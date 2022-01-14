<script lang="ts">
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { SongList } from '$lib/components';
  import { albumCover, albumArtist, albumName, artist, pickedSong, songName } from '$lib/stores';

  export let query: string, items: SpotifyApi.TrackObjectFull[];

  const handlePick = (song: SpotifyApi.TrackObjectFull) => {
    $albumCover = song.album.images[0].url;
    $pickedSong = song.id;
    $songName = song.name;
    $artist = song.artists[0].name;
    $albumName = song.album.name;
    $albumArtist = song.album.artists[0].name;
  }
</script>

{#if !query.length && !items.length}
  <div class="placeholder" transition:slide={{ duration: 300, easing: quintOut }}>
    <div class="icons">
      <i class="fas fa-face-grin-tongue-wink"></i>
      <i class="fas fa-hand-point-up"></i>
    </div>
    <h1 class="is-size-5">Os resultados aparecerão aqui.</h1>
  </div>
{/if}

<SongList {items} activeId={$pickedSong} {handlePick} />

<style>
  .placeholder {
    text-align: center;
  }

  .placeholder .icons {
    font-size: 3rem;
    opacity: .25;
  }
</style>