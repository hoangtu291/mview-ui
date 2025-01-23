<template>
  <div class="bg-white p-20">
    <div class="grid grid-cols-2 gap-10">
      <div class="flex items-center p-10">
        <div class="flex flex-col gap-4">
          <img src="/assets/logo-text.png" alt="mviews logo" width="128px" />
          <span class="text-sm"
            >Sáng tạo nội dung trên các nền tảng mạng xã hội. Tư vấn đào tạo học
            viên lĩnh vực đồ hoạ, thiết kế. Xây dựng kế hoạch phát triển các
            trang mạng xã hội. Lập trình, phát triển game trên mobile và máy
            tính.</span
          >
        </div>
      </div>
      <div class="flex items-center w-full h-full">
        <div
          v-wave
          class="relative w-full max-w-4xl mx-auto"
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
