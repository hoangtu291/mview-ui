<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="h-screen w-screen bg-black">
    <div class="clippath-circle clippath-circle-1"></div>
    <div class="clippath-circle clippath-circle-2"></div>
    <div class="clippath-circle clippath-circle-3"></div>
    <div class="clippath-circle clippath-circle-4"></div>
    <div class="mx-auto max-w-7xl pt-16 sm:pt-24 grid items-center h-full px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 z-30">
        <div
          class="px-6 sm:text-center flex items-center lg:text-left z-30 select-none"
        >
          <div class="space-y-8">
            <div class="space-y-4">
              <div class="space-y-2">
                <span v-html="chip"></span>
                <h1
                  class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
                >
                  <span v-html="textTitle"></span>
                </h1>
              </div>

              <p
                class="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
              >
                {{ textContent }}
              </p>
              <UIButton
                v-if="swiper.realIndex === 3"
                content="Liên hệ ngay"
                class="bg-cyan-300 font-semibold w-auto text-base sm:text-lg whitespace-nowrap"
                @click="navigateToPage"
              />
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

        <div class="flex items-center w-full h-full z-30">
          <div class="w-full relative">
            <div class="swiper default-carousel swiper-container">
              <div class="swiper-wrapper flex items-center">
                <div class="swiper-slide">
                  <div
                    class="slide-content slide-content-yt h-96 lg:h-100% scale-90 w-full max-w-2xl col-span-6 flex items-center mx-auto hover:shadow-lg rounded-md"
                    :class="'hover:shadow-cyan-300 hover:scale-95 transition-all duration-300 ease-in-out'"
                    @click="autoPlay = Math.abs(autoPlay - 1)"
                  >
                    <div style="width: 100%; height: 100%">
                      <div class="w-full h-full">
                        <iframe
                          id="widget2"
                          frameborder="1"
                          allowfullscreen
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          width="100%"
                          height="100%"
                          :src="`https://www.youtube.com/embed/iBsdQ3EbiPM?autoplay=${autoPlay}&amp;mute=0&amp;controls=0&`"
                          title="Horror Sky Delicious - Sprunki Incredibox | Mini Crewmate Kill - Among Us"
                          class="select-none pointer-events-none rounded-md"
                        >
                        </iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="rounded-2xl flex justify-center items-center">
                    <div
                      className="grid grid-cols-4 gap-1 w-full h-full sm:grid-cols-3"
                    >
                      <div
                        className="col-span-2 rounded-md hover:motion-preset-confetti motion-duration-300 bg-[url('/assets/major/major-aboutus-1.png')] bg-cover"
                        style="aspect-ratio: 2 / 1"
                      ></div>
                      <div
                        className="hover:motion-preset-confetti motion-duration-300 col-span-1 rounded-md bg-[url('/assets/major/major-aboutus-2.png')] bg-cover aspect-square"
                      ></div>
                      <div
                        className="hover:motion-preset-confetti motion-duration-300 col-span-1 rounded-md bg-[url('/assets/major/major-aboutus-3.png')] bg-cover aspect-square"
                      ></div>
                      <div
                        className="hover:motion-preset-confetti motion-duration-300 col-span-1 rounded-md bg-[url('/assets/major/major-aboutus-4.png')] bg-cover aspect-square"
                      ></div>
                      <div
                        className="hover:motion-preset-confetti motion-duration-300 col-span-1 rounded-md bg-[url('/assets/major/major-aboutus-5.png')] bg-cover aspect-square"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="slide-content h-96 lg:h-100% scale-90 w-full max-w-2xl col-span-6 flex items-center mx-auto hover:shadow-lg rounded-md"
                    :class="'hover:shadow-cyan-300 hover:scale-95 transition-all duration-300 ease-in-out'"
                    @click="autoPlay = Math.abs(autoPlay - 1)"
                  >
                    <div style="width: 100%; height: 100%">
                      <div
                        class="w-full h-full bg-[url('/assets/major/slide-4.png')] bg-contain bg-no-repeat scale-90 hover:scale-95"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="slide-content h-96 lg:h-100% scale-90 w-full max-w-2xl col-span-6 flex items-center mx-auto hover:shadow-lg rounded-md"
                    :class="'hover:shadow-cyan-300 hover:scale-95 transition-all duration-300 ease-in-out md:hover:bg-slate-200 hover:bg-transparent'"
                    @click="autoPlay = Math.abs(autoPlay - 1)"
                  >
                    <div style="width: 100%; height: 100%">
                      <DotLottieVue
                        style="width: 100%; height: 100%"
                        autoplay
                        loop
                        src="https://lottie.host/ef7ef9b5-ab45-4127-9348-fd550c1b0afb/tLOQgJXB4h.lottie"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex items-center gap-8 lg:justify-start justify-center"
              >
                <button id="slider-button-left" data-carousel-prev></button>
                <button id="slider-button-right" data-carousel-next></button>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { Swiper } from 'swiper'

import { onMounted } from 'vue'

const textTitle = ref('')
const textContent = ref('')
const chip = ref('')
const swiperOptions = {
  loop: true,
  pagination: {
    el: '.fraction-slide-carousel .swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return number
    },
  },
  navigation: {
    nextEl: '#slider-button-left',
    prevEl: '#slider-button-right',
  },
  mousewheelControl: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  spaceBetween: 30,
  grabCursor: true,
}

const swiper = ref(new Swiper('.default-carousel', swiperOptions))
onMounted(() => {
  swiper.value.init()
  buildText()
})

swiper.value.on('slideChange', () => {
  document.querySelectorAll('.clippath-circle').forEach((element, index) => {
    element.classList.remove('active', 'z-5', 'z-0', 'z-5')
    if (index === swiper.value.realIndex) {
      element.classList.add('z-5')
    } else {
      element.classList.add('z-0')
    }
  })

  document
    .querySelector(`.clippath-circle-${swiper.value.realIndex + 1}`)
    .classList.add('active')
  if (swiper.value.realIndex !== 0) {
    document.querySelector('.clippath-circle-1').style.clipPath =
      `circle(5% at 0 ${(swiper.value.realIndex - 1) * 50}%)`
  }
  setTimeout(() => {
    buildText()
  }, 300)
})

const autoPlay = ref(0)

const buildText = () => {
  if (swiper.value.realIndex === 1) {
    textTitle.value = 'Mạng xã hội'
    textContent.value =
      'Chúng tôi tập trung phát triển và xây dựng trên nhiều lĩnh vực, tổ chức đào tạo và tạo các cơ hội tiềm năng.'
    chip.value = `<span
                  class="rounded-full uppercase bg-black px-3 py-0.5 text-sm font-semibold leading-5 text-white"
                >
                  About us
                </span>`
  } else if (swiper.value.realIndex === 2) {
    textTitle.value = 'Sự thành công'
    textContent.value =
      'Theo thông tin từ Youtube Analyst (viewstats.com) chúng tôi thu được lượng người quan tâm tăng đáng kể. Là kết quả cũng như kinh nghiệm tích luỹ. Bạn cũng có thể làm được, hãy liên hệ chúng tôi để được tư vấn.'
    chip.value = `<span
                  class="rounded-full uppercase bg-black px-3 py-0.5 text-sm font-semibold leading-5 text-white"
                >
                  About us
                </span>`
  } else if (swiper.value.realIndex === 3) {
    textTitle.value = `<span
                    class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600"
                    >Liên hệ ngay với </br> chúng tôi
                  </span>`
    textContent.value =
      'Liên hệ cho ngay cho chúng tôi để được hướng dẫn và tư vấn.'
    chip.value = `<span
                  class="rounded-full uppercase bg-raspberry-400 px-3 py-0.5 text-sm font-semibold leading-5 text-white"
                >
                  Contact us
                </span>`
  } else {
    textTitle.value = `Sáng tạo nội dung với
                  <span
                    class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600"
                    >mViews
                  </span>`
    textContent.value = `Sáng tạo nội dung độc đáo, tư vấn chiến lược marketing toàn
                diện, hợp tác quảng cáo hiệu quả và cung cấp các giải pháp
                digital marketing tối ưu cho doanh nghiệp của bạn.`
    chip.value = `<span
                  class="rounded-full uppercase bg-cyan-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white"
                >
                  Early Access
                </span>`
  }
}
function navigateToPage() {
  window.open('https://zalo.me/0939655757', '_blank')
}
</script>

<style>
.swiper-wrapper {
  width: 100%;
  height: max-content !important;
  padding-bottom: 64px !important;
  -webkit-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
  position: relative;
}
.swiper-pagination-bullet {
  background: #4f46e5;
}
.swiper-pagination-current {
  color: #111827 !important;
}
.swiper-pagination-total {
  color: #9ca3af;
}
.slide-content:hover {
  box-shadow: 0px 0px 15px #49addd;
}

@media (max-width: 768px) {
  .slide-content-yt {
    box-shadow: 0px 0px 15px #49addd;
  }
}

.clippath-circle-1 {
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: circle(5% at 0 0);
  background: #000;
}
.clippath-circle-2 {
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: circle(5% at 0 0%);
  background: #49addd;
}
.clippath-circle-3 {
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: circle(5% at 0 50%);
  background: #ed3e91;
}
.clippath-circle-4 {
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: circle(5% at 0 100%);
  background: #f8be49;
}

.clippath-circle {
  transition: clip-path 1s ease-in-out;
}

.clippath-circle.active {
  clip-path: circle(100% at 50% 50%);
  animation: move-center 1s ease-in-out;
}

@keyframes move-center {
  0% {
    transform: translateX(-50%);
  }
  30% {
    clip-path: circle(5% at 50% 50%);
  }
  100% {
    clip-path: circle(100% at 50% 50%);
  }
}
</style>
