<template>
  <div class="h-screen bg-white">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'

useHead({
  title: 'Trang Chủ | mViews',
  meta: [
    {
      name: 'description',
      content:
        'mViews - cung cấp các dịch vụ sáng tạo nội dung, đào tạo đồ họa, phát triển game và nhiều dịch vụ khác.',
    },
    {
      name: 'keywords',
      content:
        'sáng tạo nội dung, đồ họa, hoạt hình, phát triển game, đào tạo TikTok, mview youtube,mview facebook, tiktok, lập trình',
    },
    {
      property: 'og:title',
      content: 'Trang Chủ | Tên Công Ty',
    },
    {
      property: 'og:description',
      content:
        'Chúng tôi cung cấp các dịch vụ sáng tạo nội dung, đào tạo đồ họa, phát triển game và nhiều dịch vụ khác.',
    },
    {
      property: 'og:image',
      content: '/assets/logo-label.jpeg',
    },
    {
      property: 'og:url',
      content: 'https://yourwebsite.com',
    },
    {
      name: 'twitter:card',
      content: '/assets/logo-label.jpeg',
    },
    {
      name: 'twitter:title',
      content: 'Trang Chủ | mViews',
    },
    {
      name: 'twitter:description',
      content:
        'MViews - Chúng tôi cung cấp các dịch vụ sáng tạo nội dung, đào tạo đồ họa, phát triển game và nhiều dịch vụ khác.',
    },
    {
      name: 'twitter:image',
      content: '/assets/logo-label.jpeg',
    },
  ],
})
</script>
