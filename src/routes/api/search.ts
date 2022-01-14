import dotenv from 'dotenv';
import SpotifyWebApi from 'spotify-web-api-node';
import type { RequestHandler } from '@sveltejs/kit';

dotenv.config();

export const get: RequestHandler = async (request) => {
  const query = request.url.searchParams.get('query');

  if (!query) {
    return {
      status: 400,
      body: {
        error: 'Invalid search query'
      }
    }
  }

  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setCredentials({
    refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  const spotifyTokens = await spotifyApi.refreshAccessToken();
  spotifyApi.setAccessToken(spotifyTokens.body.access_token);

  const searchResults = await spotifyApi.searchTracks(query, { limit: 10 });

  return {
    body: searchResults.body.tracks.items as Array<any>
  }
}
