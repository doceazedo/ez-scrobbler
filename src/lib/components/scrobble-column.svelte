<script lang="ts">
  export let title: string, icon: string;
</script>

<div class="column">
  <h1 class="title is-size-4">
    <span class="icon">
      <i class={icon}></i>
    </span>
    <span>{title}</span>
  </h1>
  <slot/>
</div>