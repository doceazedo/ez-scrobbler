import * as cookie from 'cookie';
import { lastFm } from '$lib/api';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async (request) => {
  const albumArtist = request.url.searchParams.get('albumArtist');
  const album = request.url.searchParams.get('albumName');
  const artist = request.url.searchParams.get('artist');
  const track = request.url.searchParams.get('songName');

  if (!artist || !track) {
    return {
      status: 400,
      body: {
        error: 'Missing arguments'
      }
    }
  }

  const cookies = cookie.parse(request.headers.cookie || '');
  const user = cookies?.user ? JSON.parse(cookies?.user) : null;

  if (!user?.key) {
    return {
      status: 401,
      body: {
        error: 'Not authenticated'
      }
    }
  }

  const now = new Date(); 
  const timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds())  / 1000;

  const data = await lastFm({
    method: 'track.scrobble',
    albumArtist,
    album,
    artist,
    track,
    timestamp,
    sk: user?.key
  }, true, true);

  if (data?.scrobbles['@attr']?.accepted) {
    return {
      body: {
        message: 'Scrobbled successfully'
      }
    }
  }

  return {
    status: 500,
    body: {
      error: data?.scrobbles['@attr']?.ignored ? 'Scrobble ignored' : 'Unknown error',
      data
    }
  }
}
