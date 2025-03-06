<template lang="pug">
header(class=" bg-[url(@img/header.png)] bg-cover bg-center bg-no-repeat px-24 bg-fixed bg-center h-[calc(100vh-4rem)] justify-center flex flex-col" id="header")
  //- img(src="@img/header.png" class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center")
  h1.text-6xl.font-bold Cristian Medina
  h2.text-4xl.py-4 I'm {{ word }}
    span( :class="{ blink: isBlink }") |
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
const words = ref(['Developer Backend','Developer Frontend', 'Developer Full-Stack','Freelancer'])
const word = ref('')

let i = 0
let j = 0
let currentWord = ''
let isDeleting = false
let isBlink = false

function demorar(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function type() {
  currentWord = words.value[i];
  if (isDeleting) {
    word.value = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.value.length) {
        i = 0;
      }
    }
  } else {
    word.value = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
      isBlink = true
      await demorar(2000)
      isBlink = false
    }
  }
  setTimeout(type, 100 * 2);
}

onMounted(async () => {
  type()
})

</script>

<style scoped >
.blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>