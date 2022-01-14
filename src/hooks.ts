import * as cookie from 'cookie';
import type { Handle, GetSession } from '@sveltejs/kit';
import { lastFm } from '$lib/api';

export const handle: Handle = async ({ request, resolve }) => {
  const cookies = cookie.parse(request.headers.cookie || '');
  const user = cookies?.user ? JSON.parse(cookies?.user) : null;

  const userInfo = user ? await lastFm({
    method: 'user.getInfo',
    user: user?.name
  }) : null;

  if (userInfo?.user) request.locals.user = userInfo?.user;

  const resp = await resolve(request);
  return resp;
}

export const getSession: GetSession = async (request) => (request.locals?.user) ? { user: request.locals.user } : null;