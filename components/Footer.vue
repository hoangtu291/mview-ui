<template>
  <footer
    class="footer bg-white text-black/80 flex flex-col items-center gap-4 p-6"
  >
    <div class="flex items-center gap-2 text-xl font-bold">
      <div
        style="width: 300px; height: 100px"
        class="bg-[url('/assets/logo-label.jpeg')] bg-contain"
      ></div>
    </div>
    <aside>
      <p>©2025MViews</p>
    </aside>
    <nav class="grid-flow-col gap-4">
      <NuxtLink class="link link-hover" to="/">Trang chủ</NuxtLink>
      <NuxtLink class="link link-hover" to="/services">Dịch vụ</NuxtLink>
      <NuxtLink class="link link-hover" to="/contact">Liên hệ</NuxtLink>
    </nav>
    <div class="flex h-5 gap-4">
      <a href="#" class="link" aria-label="Github Link">
        <span class="icon-[tabler--brand-youtube] size-5"></span>
      </a>
      <a href="#" class="link" aria-label="Facebook Link">
        <span class="icon-[tabler--brand-facebook] size-5"></span>
      </a>
      <a href="#" class="link" aria-label="X Link">
        <span class="icon-[tabler--circle-letter-z] size-5"></span>
      </a>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style></style>
