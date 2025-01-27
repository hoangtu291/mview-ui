<template>
  <div
    class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl"
    :class="reverse && 'rtl'"
  >
    <div class="w-full h-64 lg:w-1/2 lg:h-auto">
      <slot name="media" />
    </div>

    <div
      class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12"
      :class="
        reverse
          ? 'md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:right-0 lg:mt-20 lg:mr-20 xl:mt-24 xl:mr-12'
          : 'md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12'
      "
    >
      <div class="flex flex-col p-12 md:px-16">
        <slot name="content" />
      </div>
    </div>
  </div>
  <div class="h-3 bg-black/80 my-2"></div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    reverse?: boolean
  }>(),
  {
    reverse: false,
  },
)
</script>

<style>
.rtl {
  direction: rtl;
}
</style>
