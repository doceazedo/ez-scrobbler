import { FormData } from 'formdata-polyfill/esm.min.js';
import dotenv from 'dotenv';
import md5 from 'md5';

dotenv.config();

export const lastFm = async (params: Record<string, unknown>, sign = false, post = false): Promise<any> => {
  const { VITE_LASTFM_API_KEY, LASTFM_API_SECRET } = process.env;
  
  params = { ...params, api_key: VITE_LASTFM_API_KEY };

  const ordered = Object.keys(params).sort().reduce(
    (obj, key) => { 
      obj[key] = params[key]; 
      return obj;
    }, 
    {}
  );

  const signParams = Object.entries(ordered).map(x => x.join('')).join('');
  const signature = md5(`${signParams}${LASTFM_API_SECRET}`);

  if (post) {
    const urlParams = new URLSearchParams({...ordered, api_sig: signature}).toString();

    const form = new FormData();
    for (const key in ordered) {
      form.set(key, ordered[key]);
    }
    form.set('api_sig', signature);

    const data = await(await (fetch(`https://ws.audioscrobbler.com/2.0/?format=json&${urlParams}`, {
      method: 'POST'
    }))).json();

    return data;
  }

  const urlParams = new URLSearchParams(ordered).toString();
  let url = `https://ws.audioscrobbler.com/2.0/?${urlParams}&format=json`;
  if (sign) url = `${url}&api_sig=${signature}`;

  const data = await(await (fetch(url))).json();
  return data;
}