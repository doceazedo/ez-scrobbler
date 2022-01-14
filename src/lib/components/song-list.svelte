<script lang="ts">
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let items: SpotifyApi.TrackObjectFull[] | any[], activeId = '', handlePick = (song: SpotifyApi.TrackObjectFull | any) => {};
</script>

<ul>
  {#each items as item}
    <li on:click={() => handlePick(item)} transition:slide={{ duration: 300, easing: quintOut }} class:is-active={activeId == item?.id}>
      <figure>
        <img src={item?.album?.images?.[0]?.url || item?.albumCover} alt="">
      </figure>
      <div>
        <h1 class="title is-size-5">{item?.artists?.[0]?.name || item?.artist} - {item?.name || item?.songName}</h1>
        <h2 class="subtitle is-size-6">{item?.album?.name || item?.albumName}</h2>
      </div>
    </li>
  {/each}
</ul>

<style>
  ul,
  ul li {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
  }

  ul li {
    display: flex;
    align-items: center;
    padding: .5rem;
    border-radius: .25rem;
    border: 1px solid #dbdbdb;
    cursor: pointer;
  }

  ul li:not(:last-child) {
    margin-bottom: 1rem;
  }

  ul li:hover,
  ul li.is-active {
    background-color: rgba(0, 209, 178, .075);
  }

  li figure {
    display: flex;
    flex-shrink: 0;
    height: 4rem;
    width: 4rem;
    margin: 0;
    margin-right: .75rem;
  }

  li figure img {
    height: 4rem;
    width: 4rem;
    border-radius: .25rem;
  }

  li h2 {
    margin-bottom: .25rem;
    font-weight: 400;
  }
</style>