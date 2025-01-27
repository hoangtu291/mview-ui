<template>
  <div class="relative isolate bg-white">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div
        class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32"
      >
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div
            class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"
          >
            <svg
              class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                  width="200"
                  height="200"
                  x="100%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M130 200V.5M.5 .5H200" fill="none"></path>
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="white"
              ></rect>
              <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0"></path>
              </svg>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
              ></rect>
            </svg>
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            Liên hệ chúng tôi
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Hãy liên hệ với chúng tôi nếu bạn có bất kỳ thắc mắc hoặc cần hỗ trợ
            nào. Chúng tôi luôn sẵn sàng tư vấn
          </p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <span class="icon-[tabler--mail] size-6 text-black/30"></span>
              </dt>
              <dd>
                <a class="hover:text-gray-900" href="mailto:huyxiao@gmail.com"
                  >huyxiao@gmail.com</a
                >
              </dd>
            </div>
            <div
              href="https://zalo.me/0939655757"
              target="_blank"
              class="flex gap-x-4"
            >
              <dt class="flex-none">
                <span class="sr-only">Phone</span>
                <span class="icon-[tabler--phone] size-6 text-black/30"></span>
              </dt>
              <a
                href="https://zalo.me/0939655757"
                target="_blank"
                class="hover:text-gray-900"
                >0939 655 757</a
              >
            </div>
            <div
              href="https://www.facebook.com/balutoon?mibextid=ZbWKwL"
              target="_blank"
              class="flex gap-x-4"
            >
              <dt class="flex-none">
                <span class="sr-only">Facebook</span>
                <span
                  class="icon-[tabler--brand-facebook] size-6 text-black/30"
                ></span>
              </dt>
              <a
                href="https://www.facebook.com/balutoon?mibextid=ZbWKwL"
                target="_blank"
                class="hover:text-gray-900"
                >Huy Small
              </a>
            </div>
            <div class="flex gap-x-4 hover:text-gray-900">
              <dt class="flex-none">
                <span class="sr-only">Youtube</span>
                <span
                  class="icon-[tabler--brand-youtube] size-6 text-black/30"
                ></span>
              </dt>
              <a
                href="https://youtube.com/@crewtoon_huy?si=Vi6JJ7f_BSPo66qk"
                target="_blank"
                class="hover:text-gray-900"
                >Crewtoon</a
              >
            </div>
          </dl>
        </div>
      </div>
      <form class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32">
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >First name</label
              >
              <div class="mt-2.5">
                <input
                  id="first-name"
                  type="text"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="firstName"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Last name</label
              >
              <div class="mt-2.5">
                <input
                  id="last-name"
                  type="text"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="lastName"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Email</label
              >
              <div class="mt-2.5">
                <input
                  id="email"
                  type="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="email"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Message</label
              >
              <div class="mt-2.5">
                <textarea
                  id="message"
                  rows="4"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="message"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <UIButton content="Gửi" @click="sendMail($event)" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
function sendMail(event: Event) {
  event.preventDefault()
  const firstName = (document.getElementById('first-name') as HTMLInputElement)
    .value
  const lastName = (document.getElementById('last-name') as HTMLInputElement)
    .value
  const email = (document.getElementById('email') as HTMLInputElement).value
  const message = (document.getElementById('message') as HTMLTextAreaElement)
    .value

  // Tạo liên kết mailto với nội dung
  const subject = encodeURIComponent(`Message from ${firstName} ${lastName}`)
  const body = encodeURIComponent(
    `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
  )

  const mailtoLink = `mailto:huyxiao@gmail.com?subject=${subject}&body=${body}`

  // Mở mailto link
  window.location.href = mailtoLink
}
</script>
