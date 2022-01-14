<script context="module">
  import { BASE_URL, LASTFM_API_KEY } from '$lib/env';

  export async function load({ session }) {
    if (!session?.user) return {};

    return {
      status: 302,
      redirect: '/scrobble'
    }
  }
</script>

<script lang="ts">
  import { Particles } from '$lib/components';
</script>

<div class="has-text-centered">
  <h1 class="title">
    <span class="icon">
      <i class="fas fa-headphones-simple"></i>
    </span>
    <span>eZ Scrobbler</span>
  </h1>
  <h2 class="subtitle">
    Pesquise pela música e deixa o resto com a gente.
  </h2>
  <a href={`https://www.last.fm/api/auth?api_key=${LASTFM_API_KEY}&cb=${BASE_URL}/api/login`} class="button is-lastfm is-large">
    <span class="icon">
      <i class="fab fa-lastfm"></i>
    </span>
    <span>Conectar com last.fm</span>
  </a>
</div>

<Particles />

<style>
  :global(#svelte > .section) {
    background-color: #fff;
    box-shadow: 0 6rem 4rem 0px #fff;
  }
</style>