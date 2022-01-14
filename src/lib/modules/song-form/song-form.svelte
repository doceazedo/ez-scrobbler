<script lang="ts">
  import { albumCover, albumArtist, albumName, artist, history, songName } from '$lib/stores';

  let loading = false;

  const handleSubmit = async () => {
    if (loading) return;
    loading = true;

    const params = new URLSearchParams({
      albumArtist: $albumArtist,
      albumName: $albumName,
      artist: $artist,
      songName: $songName,
    }).toString();
    const data = await(await fetch(`/api/scrobble?${params}`)).json();

    loading = false;

    if (data?.error) {
      // TODO: toast error
      return;
    }

    const localHistory = JSON.parse(localStorage.getItem('history') || '[]');
    localHistory.unshift({
      albumCover: $albumCover,
      albumArtist: $albumArtist,
      albumName: $albumName,
      artist: $artist,
      songName: $songName,
    });
    localStorage.setItem('history', JSON.stringify(localHistory));
    $history = localHistory;
  }
</script>

<div class="card">
  <div class="card-content">
    <form on:submit|preventDefault={handleSubmit}>
      <div class="field">
        <label class="label is-required" for="">Título</label>
        <div class="control">
          <input bind:value={$songName} class="input" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label is-required" for="">Artista</label>
        <div class="control">
          <input bind:value={$artist} class="input" type="text">
        </div>
      </div>
  
      <div class="field">
        <label class="label" for="">Álbum</label>
        <div class="control">
          <input bind:value={$albumName} class="input" type="text">
        </div>
      </div>
  
      <div class="field">
        <label class="label" for="">Artista do álbum</label>
        <div class="control">
          <input bind:value={$albumArtist} class="input" type="text">
        </div>
      </div>
  
      <div class="has-text-right">
        <button type="submit" class="button is-link" class:is-loading={loading}>
          <span class="icon">
            <i class="fas fa-check"></i>
          </span>
          <span>Scrobblar</span>
        </button>
      </div>
    </form>
  </div>
</div>