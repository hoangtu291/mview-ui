<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="text-center space-y-4">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Các con số ấn tượng
          </h2>
          <p class="text-lg leading-8 text-gray-300">
            Thống kê gần nhất thu được các con số ấn tượng
          </p>
        </div>
        <dl
          class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 border-4 border-transparent bg-gradient-to-r from-amber-500 via-raspberry-500 to-cyan-500"
        >
          <HomeStatisticItem
            title="Hơn [] triệu"
            label="lượt xem trên Youtube"
            :target-number="50"
          />
          <HomeStatisticItem
            title="[] N"
            label="người đăng ký"
            :target-number="240"
          />
          <HomeStatisticItem
            title="Hơn []"
            label="videos "
            :target-number="100"
          />
          <HomeStatisticItem
            title="[] N"
            label="lượt thích"
            :target-number="200"
          />
        </dl>
      </div>
    </div>
  </div>
</template>
