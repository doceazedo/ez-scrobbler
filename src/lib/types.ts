interface Image {
  size: string;
  '#text': string;
}

interface Registered {
  unixtime: string;
  '#text': number;
}

export interface User {
  country: string;
  age: string;
  playcount: string;
  subscriber: string;
  realname: string;
  playlists: string;
  bootstrap: string;
  image: Image[];
  registered: Registered;
  url: string;
  gender: string;
  name: string;
  type: string;
}

export interface HistoryItem {
  albumCover: string;
  albumArtist: string;
  albumName: string;
  artist: string;
  songName: string;
}