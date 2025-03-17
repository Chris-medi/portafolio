<script setup lang="ts">
import {
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const { show = false, message } = defineProps<{
  show?: boolean;
  message: string;
  type: string;
}>();

defineEmits(["close"]);
</script>
<template lang="pug">
div( @click="$emit('close')" v-if="show" class="fixed top-0 inset-0 z-9999 flex bg-gray-500/50 items-center justify-center w-screen h-screen overflow-hidden")
  div(class="bg-white h-1/3 w-xl rounded-lg flex flex-col items-center justify-center relative")
    InformationCircleIcon(class="h-24 w-24 text-green-500 m-4" v-if="type == 'success'")
    ExclamationTriangleIcon(class="h-24 w-24 text-red-500 m-4" v-else)
    p.text-lg.text-gray-500 {{ message }}
    XMarkIcon.absolute(class="top-[-0.5rem] right-[-0.5rem] size-10 text-white cursor-pointer bg-red-500 rounded-sm")

</template>
