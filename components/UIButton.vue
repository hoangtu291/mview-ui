<template>
  <button
    v-wave
    class="btn btn-primary bg-cyan-500 px-6 hover:bg-cyan-700 rounded-full border-none active:motion-preset-confetti motion-duration-700 flex items-center justify-center text-center"
  >
    {{ content }}
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  content: string
}>()
</script>
