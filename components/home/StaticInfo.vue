<template>
  <div class="bg-white p-6 sm:p-10 md:p-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 text-justify">
      <!-- Section 1: Logo and Description -->
      <div
        class="col-span-full grid grid-cols-1 sm:grid-cols-2 gap-10 items-center pl-10"
      >
        <img src="/assets/logo-text.png" alt="mviews logo" width="128px" />
        Chúng tôi cung cấp giải pháp sáng tạo và phát triển toàn diện cho các
        doanh nghiệp, cá nhân muốn xây dựng thương hiệu và tăng trưởng trên các
        nền tảng số. Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi cam kết
        mang đến những dịch vụ chất lượng, tối ưu hóa hiệu quả marketing và sáng
        tạo nội dung.
      </div>
      <div class="flex items-center p-6 sm:p-10">
        <div class="flex flex-col gap-4">
          <ul class="timeline timeline-vertical">
            <li v-for="(item, index) in services" :key="item">
              <div
                v-wave
                class="timeline-box bg-white select-none active:motion-preset-confetti motion-duration-300"
                :class="index % 2 == 0 ? 'timeline-start' : 'timeline-end'"
              >
                {{ item }}
              </div>
              <div class="timeline-middle">
                <span
                  class="bg-raspberry-500/20 flex size-4.5 items-center justify-center rounded-full"
                >
                  <span
                    class="badge badge-primary bg-raspberry-300 size-3 rounded-full p-0"
                  ></span>
                </span>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>

      <!-- Section 2: Carousel -->
      <div class="flex items-center w-full h-full">
        <div
          v-wave
          class="relative w-full max-w-full mx-auto"
          @mouseover="clearCustomInterval"
          @mouseleave="startInterval"
        >
          <!-- Carousel wrapper -->
          <div class="overflow-hidden relative rounded-lg">
            <div
              id="carousel"
              class="flex transition-transform duration-500 ease-in-out transform"
            >
              <!-- Slide 1 -->
              <div class="min-w-full">
                <img
                  src="https://placehold.co/700x500"
                  alt="Slide 1"
                  class="w-full h-full object-cover"
                />
              </div>
              <!-- Slide 2 -->
              <div class="min-w-full">
                <img
                  src="https://placehold.co/700x500"
                  alt="Slide 2"
                  class="w-full h-full object-cover"
                />
              </div>
              <!-- Slide 3 -->
              <div class="min-w-full">
                <img
                  src="https://placehold.co/700x500"
                  alt="Slide 3"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <!-- Navigation buttons -->
          <button
            class="btn btn-circle btn-soft btn-primary absolute top-1/2 left-0 transform -translate-y-1/2 mx-2"
            @click="scrollCarousel(-1)"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            class="btn btn-circle btn-soft btn-primary absolute top-1/2 right-0 transform -translate-y-1/2 mx-2"
            @click="scrollCarousel(1)"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
let currentIndex = 0

function scrollCarousel(direction: number): void {
  const carousel = document.getElementById('carousel') as HTMLElement
  if (!carousel) return // Check if carousel exists

  const totalSlides = carousel.children.length
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`
}

const services = [
  'Sáng tạo nội dung trên các nền tảng mạng xã hội',
  'Đào tạo học viên lĩnh vực đồ hoạ, hoạt hình,..',
  'Tư vấn xây dựng kênh tiktok, youtube,...',
  'Lập trình, phát triển game mobile, PC',
  'Quảng cáo, hợp tác kéo kênh trên nền tảng tiktok, facebok, youtube...',
  'Thiết kế nội dung theo yêu cầu của khách hàng',
]

let intervalId: ReturnType<typeof setInterval> | null = null

const startInterval = () => {
  intervalId = setInterval(() => {
    scrollCarousel(1)
  }, 1000)
}

const clearCustomInterval = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onMounted(() => {
  startInterval()
})

onBeforeUnmount(() => {
  if (intervalId) {
    clearCustomInterval()
  }
})
</script>
