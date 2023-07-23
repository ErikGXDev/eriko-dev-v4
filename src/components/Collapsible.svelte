<script lang="ts">
  export var title = "BABA";
  export var className = "bg-brand-orange-400";
  $: expanded = false;
</script>

<div class={"transition-all text-brand-dark-950 " + className}>
  <button
    class="flex justify-between p-4"
    on:click={() => {
      expanded = !expanded;
    }}
  >
    <h2 class="text-6xl">{title}</h2>
  </button>
  <div
    class="px-4"
    aria-hidden={!expanded}
    class:open={expanded}
    class:closed={!expanded}
  >
    <div class="mb-4 mt-2 text-lg">
      <slot />
    </div>
  </div>
</div>

<style>
  .open {
    overflow: hidden;
    max-height: 8rem;
    transition: max-height 0.5s ease-in-out;
  }

  .closed {
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
    -webkit-transition: max-height 0.5s ease-in-out;
    max-height: 0;
  }
</style>
