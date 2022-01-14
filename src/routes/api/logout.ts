import * as cookie from 'cookie';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
  const headers = {
    'Set-Cookie': cookie.serialize('user', '', {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      path: '/',
      expires: new Date('Thu, 01 Jan 1970 00:00:00 GMT')
    }),
    location: '/'
  }

  return {
    status: 302,
    headers
  }
}
