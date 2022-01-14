<script lang="ts">
  import { BASE_URL, LASTFM_API_KEY } from '$lib/env';
  import type { User } from '$lib/types';

  export let user: User;

  let isMobileMenuOpen = false;
</script>

<nav class="navbar">
  <section class="section">
    <div class="container">
      <div class="navbar-brand">
        <h1 class="navbar-item has-text-weight-bold">
          <span class="icon">
            <i class="fas fa-headphones-simple"></i>
          </span>
          <span>eZ Scrobbler</span>
        </h1>
    
        <span on:click={() => isMobileMenuOpen = !isMobileMenuOpen} class="navbar-burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>
    
      <div class="navbar-menu" class:is-active={isMobileMenuOpen}>
        <div class="navbar-end">
          {#if user}
            <div class="navbar-item has-dropdown is-hoverable">
              <span class="navbar-link navbar-user">
                <img src={user.image[1]['#text']} alt="{user.name}'s avatar">
                @{user.name}
              </span>
      
              <div class="navbar-dropdown">
                <a href="https://last.fm/user/{user.name}" target="_blank" rel="nofollow" class="navbar-item">
                  <span class="icon">
                    <i class="fas fa-user"></i>
                  </span>
                  <span>Visit last.fm profile</span>
                </a>
                <a href="https://github.com/doceazedo/ez-scrobbler/issues" target="_blank" class="navbar-item">
                  <span class="icon">
                    <i class="fas fa-bug"></i>
                  </span>
                  <span>Report an issue</span>
                </a>
                <hr class="navbar-divider">
                <a href="/api/logout" rel="external" class="navbar-item">
                  <span class="icon">
                    <i class="fas fa-right-from-bracket"></i>
                  </span>
                  <span>Logout</span>
                </a>
              </div>
            </div>
          {:else}
            <div class="navbar-item">
              <div class="buttons">
                <a href={`https://www.last.fm/api/auth?api_key=${LASTFM_API_KEY}&cb=${BASE_URL}/api/login`} class="button is-lastfm">
                  <span class="icon">
                    <i class="fab fa-lastfm"></i>
                  </span>
                  <span>Fazer login</span>
                </a>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>
</nav>

<style>
  .section {
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
  }

  .container {
    display: flex;
  }

  .navbar-brand .navbar-item {
    padding-left: 0;
  }

  .navbar {
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .02);
  }

  .navbar-user {
    display: flex;
    align-items: center;
  }

  .navbar-user img {
    height: 2.25rem;
    max-height: unset;
    border-radius: 50%;
    margin-right: .5rem;
  }

  @media screen and (max-width: 1023px) {
    .navbar-menu {
      display: block;
      position: absolute;
      top: 4rem;
      right: -1rem;
      border-radius: .25rem;
      transition: all .2s ease;
    }

    .navbar-menu:not(.is-active) {
      opacity: 0;
      pointer-events: none;
      transform: translateY(-1rem);
    }

    .navbar-brand {
      width: 100%;
    }
  }
</style>