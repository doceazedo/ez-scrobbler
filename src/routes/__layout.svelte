<script context="module">
  export async function load({ session }) {
    return {
      props: {
        user: session?.user
      }
    }
  }
</script>

<script>
  import { Footer, Navbar } from '$lib/components';

  export let user;
</script>

<Navbar {user} />

<section class="section">
  <div class="container">
    <slot/>
  </div>
</section>

<Footer />