<template>
  <div class="h-screen bg-white">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
</script>
