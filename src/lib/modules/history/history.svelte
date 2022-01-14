<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/env';
  import { history } from '$lib/stores';
  import { SongList } from '$lib/components';
  import { albumCover, albumArtist, albumName, artist, songName } from '$lib/stores';
  import type { HistoryItem } from '$lib/types';

  onMount(() => {
    if (!browser) return;
    $history = JSON.parse(localStorage.getItem('history') || '[]');
  })

  const handlePick = (song: HistoryItem) => {
    $albumCover = song.albumCover;
    $songName = song.songName
    $artist = song.artist
    $albumName = song.albumName
    $albumArtist = song.albumArtist;
  }
</script>

<div class="card">
  <div class="card-content">
    <SongList items={$history} {handlePick} />
  </div>
</div>