<template>
  <button
    v-wave
    class="btn btn-primary max-lg:btn-square bg-cyan-500 hover:bg-cyan-700 rounded-full border-none active:motion-preset-confetti motion-duration-700"
  >
    {{ content }}
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  content: string
}>()
</script>
