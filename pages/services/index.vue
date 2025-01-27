<template>
  <div class="bg-white">
    <img
      src="/assets/service/service-banner.jpeg"
      width="100%"
      class="select-none"
    />
    <section class="grid grid-cols-1 gap-10 items-center pl-10 my-6">
      <div class="flex justify-center w-full">
        <img src="/assets/logo-text.png" alt="mviews logo" width="150px" />
      </div>
      <p class="text-center">
        Chúng tôi cung cấp giải pháp sáng tạo và phát triển toàn diện cho các
        doanh nghiệp, cá nhân muốn xây dựng thương hiệu và tăng trưởng trên các
        nền tảng số. Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi cam kết
        mang đến những dịch vụ chất lượng, tối ưu hóa hiệu quả marketing và sáng
        tạo nội dung.
      </p>
    </section>
    <section>
      <ServiceInfo>
        <template #content>
          <h2
            class="text-2xl font-semibold shadow-lg uppercase text-white lg:text-4xl bg-black py-4 pl-6 relative -ml-16"
          >
            Sáng Tạo Nội Dung Trên Các Nền Tảng Mạng Xã Hội
          </h2>
          <p class="my-4">
            Chúng tôi tạo ra những nội dung sáng tạo và hấp dẫn giúp thương hiệu
            bạn kết nối mạnh mẽ với khách hàng trên các nền tảng như YouTube,
            Facebook, Instagram và nhiều kênh khác.
          </p>

          <ul>
            <li>
              <strong class="font-semibold"
                >Chiến lược nội dung sáng tạo:</strong
              >
              Phù hợp với mục tiêu thương hiệu, hướng tới đối tượng khách hàng
              mục tiêu.
            </li>
            <li>
              <strong class="font-semibold"
                >Sản xuất video, bài viết, hình ảnh chuyên nghiệp:</strong
              >
              Nội dung độc đáo, dễ dàng lan tỏa trên các nền tảng.
            </li>
            <li>
              <strong class="font-semibold"
                >Tối ưu hóa chiến lược nội dung:</strong
              >
              Tăng trưởng tương tác và xây dựng cộng đồng mạnh mẽ.
            </li>
          </ul>
        </template>
        <template #media>
          <div
            class="w-full h-full flex items-center justify-center"
            style="aspect-ratio: 1 / 1"
          >
            <img
              class="h-full w-full object-cover"
              src="/assets/service/service-1.jpg"
            />
          </div>
        </template>
      </ServiceInfo>
      <ServiceInfo :reverse="true" class="text-left">
        <template #content>
          <h2
            class="text-2xl font-semibold shadow-lg uppercase text-white lg:text-4xl text-right bg-cyan-500 py-4 pr-6 relative -mr-16"
          >
            Đào tạo về đồ họa và animation
          </h2>
          <p class="my-4 text-left">
            Chúng tôi cung cấp các khóa đào tạo chuyên sâu trong lĩnh vực đồ họa
            và hoạt hình, giúp học viên phát triển kỹ năng và sự sáng tạo
          </p>

          <ul class="text-left">
            <li>
              <strong class="font-semibold"
                >Khóa học đồ họa chuyên nghiệp:</strong
              >
              Học viên sẽ được làm quen và thành thạo các công cụ như Photoshop,
              Illustrator, After Effects
            </li>
            <li>
              <strong class="font-semibold">Đào tạo hoạt hình 2D và 3D:</strong>
              Tạo ra các sản phẩm hoạt hình sống động từ ý tưởng
            </li>
            <li>
              <strong class="font-semibold"
                >Phát triển kỹ năng sáng tạo:</strong
              >
              Đội ngũ giảng viên giàu kinh nghiệm sẽ giúp học viên xây dựng
              portfolio chất lượng
            </li>
          </ul>
        </template>
        <template #media>
          <div
            class="w-full h-full flex items-center justify-center"
            style="aspect-ratio: 1 / 1"
          >
            <img
              class="h-full w-full object-cover"
              src="/assets/service/service-2.jpg"
            />
          </div>
        </template>
      </ServiceInfo>
      <ServiceInfo>
        <template #content>
          <h2
            class="text-2xl font-semibold shadow-lg uppercase text-white lg:text-4xl bg-raspberry-300 py-4 pl-6 relative -ml-16"
          >
            Đào tạo tư vấn xây dựng kênh TikTok
          </h2>
          <p class="my-4">
            Chúng tôi cung cấp tư vấn chuyên nghiệp để giúp bạn xây dựng và phát
            triển kênh TikTok, tối ưu hóa nội dung và thu hút người theo dõi
            hiệu quả.
          </p>

          <ul>
            <li>
              <strong class="font-semibold"
                >Tư vấn chiến lược xây dựng kênh:
              </strong>
              Hướng dẫn từ việc tạo dựng thương hiệu cá nhân đến việc phát triển
              chiến lược nội dung hiệu quả.
            </li>
            <li>
              <strong class="font-semibold">Sản xuất nội dung sáng tạo:</strong>
              Giúp bạn tạo ra các video hấp dẫn, dễ dàng thu hút người xem và
              lan tỏa mạnh mẽ.
            </li>
            <li>
              <strong class="font-semibold"
                >Tăng trưởng người theo dõi và tương tác:</strong
              >
              Chúng tôi sẽ giúp bạn tối ưu hóa các yếu tố trên kênh để gia tăng
              lượt xem, người theo dõi và sự tương tác.
            </li>
          </ul>
        </template>
        <template #media>
          <div
            class="w-full h-full flex items-center justify-center"
            style="aspect-ratio: 1 / 1"
          >
            <img
              class="h-full w-full object-cover"
              src="/assets/service/service-3.jpg"
            />
          </div>
        </template>
      </ServiceInfo>
      <ServiceInfo :reverse="true" class="text-left">
        <template #content>
          <h2
            class="text-2xl font-semibold shadow-lg uppercase text-white lg:text-4xl text-right bg-amber-500 py-4 pr-6 relative -mr-16"
          >
            Lập trình và phát triển game mobile, PC
          </h2>
          <p class="my-4 text-left">
            Chúng tôi giúp bạn phát triển game mobile và PC từ ý tưởng đến sản
            phẩm hoàn chỉnh. Với đội ngũ lập trình viên giàu kinh nghiệm, chúng
            tôi đảm bảo mang đến những trò chơi sáng tạo và hấp dẫn
          </p>

          <ul class="text-left">
            <li>
              <strong class="font-semibold"
                >Phát triển game mobile (IOS, Android):</strong
              >
              Tạo ra những game thú vị, dễ chơi và tối ưu hóa trải nghiệm người
              dùng trên di động
            </li>
            <li>
              <strong class="font-semibold">Phát triển game PC:</strong>
              Đưa game của bạn lên nền tảng PC với đồ họa ấn tượng và gameplay
              mượt mà
            </li>
            <li>
              <strong class="font-semibold">Tích hợp công nghệ mới:</strong>
              Chúng tôi sử dụng các công nghệ tiên tiến để đảm bảo game chạy ổn
              định và có thể mở rộng trong tương lai
            </li>
          </ul>
        </template>
        <template #media>
          <div
            class="w-full h-full flex items-center justify-center"
            style="aspect-ratio: 1 / 1"
          >
            <img
              class="h-full w-full object-cover"
              src="/assets/service/service-4.jpg"
            />
          </div>
        </template>
      </ServiceInfo>
      <ServiceInfo>
        <template #content>
          <h2
            class="text-2xl font-semibold shadow-lg uppercase text-white lg:text-4xl bg-black py-4 pl-6 relative -ml-16"
          >
            Quảng cáo và hợp tác kéo kênh trên nền tảng TikTok, Facebook,
            YouTube
          </h2>
          <p class="my-4">
            Chúng tôi giúp bạn triển khai các chiến dịch quảng cáo và hợp tác
            với influencer để gia tăng sự hiện diện và phát triển kênh trên các
            nền tảng TikTok, Facebook và YouTube.
          </p>

          <ul>
            <li>
              <strong class="font-semibold"
                >Chiến lược quảng cáo hiệu quả:
              </strong>
              Đưa ra chiến lược quảng cáo sáng tạo và tối ưu hóa ngân sách để
              thu hút người theo dõi tiềm năng.
            </li>
            <li>
              <strong class="font-semibold">Hợp tác influencer:</strong>
              Chúng tôi kết nối bạn với các influencer phù hợp, giúp kéo kênh và
              tạo sự lan tỏa mạnh mẽ.
            </li>
            <li>
              <strong class="font-semibold"
                >Tăng trưởng kênh nhanh chóng:</strong
              >
              Tập trung vào việc gia tăng lượt xem, người theo dõi và sự tương
              tác trên các nền tảng xã hội lớn.
            </li>
          </ul>
        </template>
        <template #media>
          <div
            class="w-full h-full flex items-center justify-center"
            style="aspect-ratio: 1 / 1"
          >
            <img
              class="h-full w-full object-cover"
              src="/assets/service/service-5.jpg"
            />
          </div>
        </template>
      </ServiceInfo>
      <ServiceInfo :reverse="true" class="text-left">
        <template #content>
          <h2
            class="text-2xl font-semibold shadow-lg uppercase text-white lg:text-4xl text-right bg-cyan-500 py-4 pr-6 relative -mr-16"
          >
            Thiết kế nội dung theo yêu cầu khách hàng
          </h2>
          <p class="my-4 text-left">
            Chúng tôi cung cấp dịch vụ thiết kế nội dung tùy chỉnh theo yêu cầu
            của khách hàng, bao gồm viết bài, thiết kế đồ họa, video và các sản
            phẩm truyền thông khác
          </p>

          <ul class="text-left">
            <li>
              <strong class="font-semibold">Viết bài chuẩn SEO:</strong>
              Tạo ra hình ảnh, banner, infographics và các ấn phẩm trực quan
              giúp truyền tải thông điệp thương hiệu một cách mạnh mẽ.
            </li>
            <li>
              <strong class="font-semibold"
                >Video truyền thông chuyên nghiệp:</strong
              >
              Chúng tôi sản xuất video và nội dung multimedia giúp bạn giao tiếp
              với khách hàng hiệu quả và ấn tượng.
            </li>
            <li>
              <strong class="font-semibold">Tích hợp công nghệ mới:</strong>
              Chúng tôi sử dụng các công nghệ tiên tiến để đảm bảo game chạy ổn
              định và có thể mở rộng trong tương lai
            </li>
          </ul>
        </template>
        <template #media>
          <div
            class="w-full h-full flex items-center justify-center"
            style="aspect-ratio: 1 / 1"
          >
            <img
              class="h-full w-full object-cover"
              src="/assets/service/service-2.jpg"
            />
          </div>
        </template>
      </ServiceInfo>
    </section>
  </div>
</template>

<script lang="ts" setup></script>
