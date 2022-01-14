import * as cookie from 'cookie';
import { lastFm } from '$lib/api';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async (request) => {
  const token = request.url.searchParams.get('token');

  if (!token) {
    return {
      status: 400,
      body: {
        error: 'Invalid token'
      }
    }
  }

  const data = await lastFm({
    method: 'auth.getSession',
    token
  }, true);

  if (data?.error || !data?.session) {
    return {
      status: data?.error ? 400 : 500,
      body: {
        error: data?.message || 'Internal server error'
      }
    }
  }

  const headers = {
    'Set-Cookie': cookie.serialize('user', JSON.stringify(data?.session), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'none',
      secure: true,
      path: '/'
    }),
    location: '/scrobble'
  }

  return {
    status: 302,
    headers
  }
}
