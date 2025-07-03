<template>
  <div class="bg-[#0d1227] min-h-screen w-full font-mono">
    <nav class="sticky top-0 z-50 bg-[#0d1227] w-full px-4 py-4 flex items-center opacity-60">
      <div class="flex items-center space-x-3">
        <p class="text-white text-xl ml-4 mt-4">HiddenEarth</p>
      </div>
    </nav>

    <!-- Header -->
    <div class="flex flex-col justify-center items-center">
      <img src="./public/icons/profile.png" loading="lazy" class="w-36 h-32 rounded-full mt-10" />
      <div
        class="text-neutral-300 text-2xl w-[90%] max-w-md h-40 rounded-3xl mt-1 mb-8
        bg-[linear-gradient(0deg,_rgba(15,40,71,1)_0%,_rgba(19,25,59,1)_25%,_rgba(13,18,39,1)_100%)]
        flex justify-center items-center text-center px-4">
        <p>@{{ displayedText }}</p>
      </div>
    </div>

    <!-- Social Links -->
    <div class="flex flex-col items-center mt-14 w-full px-4">
      <h1 class="text-neutral-200 text-3xl font-bold mb-4">Social Links</h1>

      <div class="flex flex-col items-center w-full max-w-xl space-y-4">
        <a href="https://www.facebook.com/peerasit.earth" target="_blank" class="w-full">
          <div class="flex flex-row items-center bg-[#232738] p-4 sm:p-6 rounded-xl text-neutral-200 w-full hover:bg-[#2d3146] transition">
            <img src="./assets/icons/fb.png" loading="lazy" class="w-12 sm:w-14 ml-2 sm:ml-4 mr-4">
            <p class="text-lg sm:text-xl">Facebook</p>
          </div>
        </a>

        <a href="https://www.instagram.com/ep.e_rth/" target="_blank" class="w-full">
          <div class="flex flex-row items-center bg-[#232738] p-4 sm:p-6 rounded-xl text-neutral-200 w-full hover:bg-[#2d3146] transition">
            <img src="./assets/icons/ig.png" loading="lazy" class="w-12 sm:w-14 ml-2 sm:ml-4 mr-4">
            <p class="text-lg sm:text-xl">Instagram</p>
          </div>
        </a>
      </div>
    </div>

    <!-- Shops -->
    <div class="flex flex-col items-center mt-14 w-full px-4">
      <h1 class="text-neutral-200 text-3xl font-bold mb-4">Shops</h1>

      <div class="flex flex-col items-center w-full max-w-xl space-y-4">
        <!-- <a href="" class="w-full">
          <div class="rounded-xl p-0.5 bg-[#6c4324] w-full">
            <div class="flex flex-row items-center bg-[#492e19] p-4 sm:p-6 rounded-xl text-neutral-200 hover:bg-[#34271d] w-full transition">
              <img src="./assets/icons/etsy.png" class="w-16 sm:w-14 ml-2 sm:ml-4 mr-4">
              <p class="text-lg sm:text-xl">Etsy</p>
            </div>
          </div>
        </a> -->

        <a href="https://line.me/S/shop/sticker/author/5359919" target="_blank" class="w-full">
          <div class="rounded-xl p-0.5 bg-[#3b6248] w-full">
            <div class="flex flex-row items-center bg-[#314a3b] p-4 sm:p-6 rounded-xl text-neutral-200 hover:bg-[#273a2f] w-full transition">
              <img src="./assets/icons/line.png" class="w-12 sm:w-14 ml-2 sm:ml-4 mr-4">
              <p class="text-lg sm:text-xl">Line Stickers</p>
            </div>
          </div>
        </a>
      </div>
      <br>
      <br>
    </div>
  </div>
  <NuxtPage />
</template>

<script setup>
import { ref, onMounted } from 'vue'

const textList = ['HiddenEarth', 'Hyphen']
const displayedText = ref('')
const randomChars = '!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
let currentTarget = ''

function animateReveal(target) {
  let frame = 0
  const length = target.length
  const interval = setInterval(() => {
    displayedText.value = target
      .split('')
      .map((char, index) => {
        if (index < frame) return char
        return randomChars[Math.floor(Math.random() * randomChars.length)]
      })
      .join('')
    frame++
    if (frame > length) clearInterval(interval)
  }, 120)
}

function startRandomLoop(delay = 5000) {
  animateNewText()
  setInterval(() => {
    animateNewText()
  }, delay)
}

function animateNewText() {
  let next
  do {
    next = textList[Math.floor(Math.random() * textList.length)]
  } while (next === currentTarget)
  currentTarget = next
  animateReveal(currentTarget)
}

onMounted(() => {
  startRandomLoop(15000)
})
</script>