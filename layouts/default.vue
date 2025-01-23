<template>
  <div class="h-screen bg-white">
    <Header />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue'
</script>
