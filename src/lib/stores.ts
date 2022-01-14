import { writable } from 'svelte/store';

export const albumCover = writable('');
export const albumArtist = writable('');
export const albumName = writable('');
export const artist = writable('');
export const songName = writable('');

export const history = writable([]);
export const pickedSong = writable('');