<template>
  <div
    ref="counterElement"
    v-wave
    class="flex flex-col bg-gray-900 p-8 rounded-md select-none"
  >
    <dt class="text-sm font-semibold leading-6 text-gray-300">
      {{ label }}
    </dt>
    <dd class="order-first text-3xl font-semibold tracking-tight text-white">
      {{ title.replace('[]', currentNumber + '') }}
    </dd>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
  label: string
  targetNumber: number
}>()

const currentNumber = ref(1)
const isVisible = ref(false)

const counterElement = ref<HTMLElement | null>(null)

const startCounting = () => {
  let count = 1
  const interval = setInterval(
    () => {
      if (count >= props.targetNumber) {
        clearInterval(interval)
      } else {
        currentNumber.value = ++count
      }
    },
    props.targetNumber > 0 ? 1000 / props.targetNumber : 0.5,
  )
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        startCounting()
      }
    })
  },
  { threshold: 0.5 },
)

onMounted(() => {
  if (counterElement.value) {
    observer.observe(counterElement.value)
  }
})
</script>

<style></style>
