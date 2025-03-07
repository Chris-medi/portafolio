<script setup lang="ts">
const {
  type = "text",
  placeholder,
  id,
} = defineProps<{
  type?: string;
  placeholder?: string;
  id?: string;
}>();
</script>
<template lang="pug">
input.block.w-full.rounded-md.bg-white.px-3.text-base.text-gray-900.outline-1.-outline-offset-1.outline-gray-300(:type="type" :placeholder="placeholder" :id="id" :name="id" autocomplete="family-name" required class="py-1.5 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6")
</template>
