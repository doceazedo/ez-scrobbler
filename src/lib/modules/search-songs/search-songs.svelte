<script lang="ts">
  import Results from './results.svelte';

  let query = '';
  let items: SpotifyApi.TrackObjectFull[] = [];
  let cooldown: ReturnType<typeof setTimeout>;
  let loading = false;
  
  const handleSearch = () => {
    clearTimeout(cooldown);
    cooldown = setTimeout(search, 300);
  }

  const search = async () => {
    if (!query.length) {
      items = [];
      return;
    }

    loading = true;

    const data = await(await fetch(`/api/search?query=${query}`)).json();
    items = data;

    loading = false;
  }

  $: query, handleSearch();
</script>

<div class="card">
  <div class="card-content">
    <div class="control" class:is-loading={loading}>
      <input bind:value={query} class="input mb-5" type="text" placeholder="Digite o título da música...">
    </div>
    <Results {query} {items} />
  </div>
</div>