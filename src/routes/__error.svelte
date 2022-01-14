<script context="module">
  export const load = ({ error, status }) => {
    return {
      props: {
        message: error?.message,
        status
      }
    }
  }
</script>

<script>
  export let message, status;
</script>

<div class="has-text-centered">
  <img src="https://http.cat/{status}" alt="" class="mb-4">
  <h2 class="subtitle">{message}</h2>
  <p>If you think this is a mistake, please <a href="https://github.com/doceazedo/ez-scrobbler/issues">open an issue</a>.</p>
</div>

<style>
  img {
    height: 500px;
    border-radius: .5rem;
  }
</style>