<template>
  <!-- component -->

  <header class="bg-white h-24 flex md:hidden border-b">
    <ul
      class="header-links font-semibold text-base lg:text-lg w-full flex items-center px-4"
    >
      <!-- Services link -->
      <div class="flex items-center mr-auto w-full justify-around">
        <li class="p-3 xl:p-6">
          <NuxtLink to="/services">
            <PhosphorIconDiamondsFour
              size="24"
              :weight="route.path === '/services' ? 'fill' : 'regular'"
              :class="route.path === '/services' && 'text-amber-300'"
            />
          </NuxtLink>
        </li>

        <!-- Logo in the middle -->

        <li
          class="p-3 xl:p-6"
          :class="route.path === '/' && 'rounded-full bg-amber-50/50'"
        >
          <NuxtLink
            to="/"
            class="flex-shrink-0 flex items-center justify-center p-2"
          >
            <img class="w-[40px] h-[40px]" src="/assets/logo.png" alt="Logo" />
          </NuxtLink>
        </li>

        <!-- Contact link -->
        <li class="p-3 xl:p-6">
          <NuxtLink to="/contact">
            <PhosphorIconHeadphones
              size="24"
              :weight="route.path === '/contact' ? 'fill' : 'regular'"
              :class="route.path === '/contact' && 'text-amber-300'"
            />
          </NuxtLink>
        </li>
      </div>
    </ul>
  </header>

  <header class="bg-white shadow-lg h-24 hidden md:flex px-25">
    <nav class="header-links contents font-semibold text-base lg:text-lg">
      <ul class="flex items-center ml-4 xl:ml-8 mr-auto">
        <li class="p-3 xl:p-6" :class="route.path === '/' && 'active'">
          <NuxtLink to="/">
            <span>Trang chủ</span>
          </NuxtLink>
        </li>
        <li class="p-3 xl:p-6" :class="route.path === '/services' && 'active'">
          <NuxtLink to="/services">
            <span>Dịch vụ</span>
          </NuxtLink>
        </li>
        <li class="p-3 xl:p-6" :class="route.path === '/contact' && 'active'">
          <NuxtLink to="/contact">
            <span>Liên hệ</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <a
      href=""
      class="flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
    >
      <img class="max-w-[200px]" src="/assets/logo-label.jpeg" alt="" />
    </a>
  </header>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style>
.header-links li span {
  position: relative;
  z-index: 0;
}

.header-links li span::before {
  content: '';
  position: absolute;
  z-index: -1;
  bottom: 2px;
  left: -4px;
  right: -4px;
  display: block;
  height: 6px;
}

.header-links li.active span::before {
  background-color: #f8be49;
}

.header-links li:not(.active):hover span::before {
  background-color: #ccc;
}
</style>
