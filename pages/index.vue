<template>
  <div>
    <div
      class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden px-6 sm:px-12 md:px-24"
    >
      <div
        class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 relative py-16"
      >
        <div
          class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 justify-center select-none"
        >
          <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
          <h1
            class="font-bebas-neue uppercase text-4xl sm:text-6xl lg:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800"
          >
            <span>
              M<span class="text-amber-300">V</span
              ><span class="text-raspberry-300">I</span
              ><span class="text-cyan-300">E</span>WS
            </span>
            <span class="text-xl sm:text-3xl lg:text-7xl flex">
              <span class="text-cyan-300"> CREAT</span>
              <span class="text-raspberry-300"> IVITY</span>
            </span>
          </h1>
          <p class="text-sm sm:text-base text-gray-700 dark:text-white">
            Sáng tạo nội dung độc đáo, tư vấn chiến lược marketing toàn diện,
            hợp tác quảng cáo hiệu quả và cung cấp các giải pháp digital
            marketing tối ưu cho doanh nghiệp của bạn.
          </p>
          <div class="flex mt-8">
            <UIButton
              content="Liên hệ"
              class="bg-cyan-300 font-semibold w-auto text-base sm:text-lg whitespace-nowrap"
              @click="navigateToPage"
            />
          </div>
        </div>
        <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
          <div class="max-w-xs md:max-w-sm m-auto">
            <DotLottieVue
              style="height: 600px; width: 600px"
              autoplay
              loop
              src="https://lottie.host/aa6fce2e-b245-48f1-b8e9-9d4f626b6263/WiarahAZXk.lottie"
            />
          </div>
        </div>
      </div>
    </div>

    <HomeStatistic />
    <HomeStaticInfo />
    <HomeMajorInfo />
  </div>
</template>

<script lang="ts" setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
function navigateToPage() {
  window.open('https://zalo.me/0939655757', '_blank')
}
</script>
