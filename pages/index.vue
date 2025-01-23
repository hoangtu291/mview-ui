<template>
  <div>
    <div
      class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden px-24"
    >
      <div class="container mx-auto px-6 grid grid-cols-2 relative py-16">
        <div
          class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 justify-center select-none"
        >
          <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"> </span>
          <h1
            class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800"
          >
            <span
              >M<span class="text-amber-300">V</span
              ><span class="text-raspberry-300">I</span
              ><span class="text-cyan-300">E</span>WS</span
            >
            <span class="text-3xl sm:text-7xl flex">
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
              class="bg-cyan-300 font-semibold w-fit px-6"
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
    <div class="h-screen w-screen bg-black">
      <div class="mx-auto max-w-7xl pt-16 sm:pt-24">
        <div class="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
          <div
            class="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left"
          >
            <div class="space-y-8">
              <div class="space-y-4">
                <div class="space-y-2">
                  <span
                    class="rounded-full uppercase bg-amber-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white"
                  >
                    Early Access
                  </span>
                  <h1
                    class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
                  >
                    <span class="sm:text-6xl"> </span> Sáng tạo nội dung với
                    <span
                      class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600"
                      >mViews
                    </span>
                    <br />
                    ngay.
                  </h1>
                </div>

                <p
                  class="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                >
                  Sáng tạo nội dung độc đáo, tư vấn chiến lược marketing toàn
                  diện, hợp tác quảng cáo hiệu quả và cung cấp các giải pháp
                  digital marketing tối ưu cho doanh nghiệp của bạn.
                </p>
              </div>

              <div class="border-t border-gray-700"></div>

              <div class="flex space-x-4 items-center text-white">
                <div class="flex items-center space-x-2">
                  <div class="flex flex-shrink-0 -space-x-1">
                    <img
                      loading="lazy"
                      width="400"
                      height="400"
                      decoding="async"
                      class="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      style="color: transparent"
                      src="https://randomuser.me/api/portraits/men/29.jpg"
                    />
                    <img
                      loading="lazy"
                      width="400"
                      height="400"
                      decoding="async"
                      class="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      style="color: transparent"
                      src="https://randomuser.me/api/portraits/men/90.jpg"
                    />
                    <img
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      class="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      style="color: transparent"
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                    />
                    <img
                      loading="lazy"
                      width="200"
                      height="200"
                      decoding="async"
                      class="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      style="color: transparent"
                      src="https://randomuser.me/api/portraits/men/5.jpg"
                    />
                  </div>

                  <span class="flex-shrink-0 text-xs font-medium leading-5"
                    >+180</span
                  >
                </div>

                <div class="h-4 border-l border-gray-700"></div>

                <div class="flex items-center">
                  <svg
                    class="h-4 w-4 fill-current text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                    ></path>
                  </svg>
                  <svg
                    class="h-4 w-4 fill-current text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                    ></path>
                  </svg>
                  <svg
                    class="h-4 w-4 fill-current text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                    ></path>
                  </svg>
                  <svg
                    class="h-4 w-4 fill-current text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                    ></path>
                  </svg>
                  <svg
                    class="h-4 w-4 fill-current text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center w-full col-span-6">
            <div
              class="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto"
            >
              <div style="width: 100%; height: 100%">
                <div style="width: 100%; height: 100%">
                  <iframe
                    id="widget2"
                    frameborder="1"
                    allowfullscreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/iBsdQ3EbiPM?autoplay=0&amp;mute=0&amp;controls=0&"
                    title="Horror Sky Delicious - Sprunki Incredibox | Mini Crewmate Kill - Among Us"
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
</script>
