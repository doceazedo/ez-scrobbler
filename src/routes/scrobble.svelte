<script context="module">
  export async function load({ session }) {
    if (!session?.user) {
      return {
        status: 302,
        redirect: '/'
      }
    }

    return {}
  }
</script>

<script lang="ts">
  import { pickedSong } from '$lib/stores';
  import { ScrobbleColumn } from '$lib/components';
  import { History, SearchSongs, SongForm } from '$lib/modules';
</script>

<div class="columns">
  <ScrobbleColumn title="Pesquisar músicas" icon="fas fa-search">
    <SearchSongs />
  </ScrobbleColumn>

  <ScrobbleColumn title={$pickedSong ? 'Revisar registro' : 'Preencher manualmente'} icon="fas fa-pencil">
    <SongForm />
  </ScrobbleColumn>

  <ScrobbleColumn title="Seu histórico" icon="fas fa-clock-rotate-left">
    <History />
  </ScrobbleColumn>
</div>