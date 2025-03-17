<script setup lang="ts">
import InputComponent from "@components/InputComponent.vue";
import ModalComponent from "@components/ModalComponent.vue";
import MapComponent from "@components/MapComponent.vue";

import { sendForm } from "@services/ContacServices";

import { ref } from "vue";

const modal_show = ref(false);
const model_message = ref("");
const modal_type = ref("");

async function submitForm(event: SubmitEvent) {
  const form = event.target as HTMLFormElement;
  if (!form.checkValidity()) return false;
  const form_data = new FormData(form);
  try {
    const response = await sendForm(form_data);
    if (response.status !== 200) throw Error("Error en el servidor");
    modal_show.value = true;
    model_message.value = "Your message has been sent successfully";
    modal_type.value = "success";
  } catch (error) {
    modal_show.value = true;
    model_message.value = "Error sending form, please try again later";
    modal_type.value = "error";
  }
}
</script>
<template lang="pug">
motion(id="contact" is="section" preset="slideVisibleOnceBottom" class="sm:px-8 m-8 mb-24" :delay="200" :duration="1000" )
  h2.py-8.text-4xl.font-bold.underline.decoration-sky-500.underline-offset-8.decoration-4 Contact
  div(class="sm:grid-cols-2 grid grid-cols-1  gap-4")
    MapComponent
    form.mx-auto(v-on:submit.prevent="submitForm" class="shadow-xl p-12 rounded-lg")
      h3.font-semibold.text-gray-900(class="text-base/7") Information
      p.mt-1.text-gray-600(class="text-sm/6") Use an email where you can receive the answer.
      .mt-10.grid.grid-cols-1.gap-x-6.gap-y-8(class="sm:grid-cols-6")
        div(class="sm:col-span-3")
          label.block.font-medium.text-gray-900(for="first-name" class="text-sm/6") First name
          .mt-2
            InputComponent(id="first-name" type="text" placeholder="John")
        div(class="sm:col-span-3")
          label.block.font-medium.text-gray-900(for="subject" class="text-sm/6") Subject
          .mt-2
            InputComponent(id="subject" type="text" placeholder="I'm interested in your profile")
      div.w-full.mt-10
        label.block.font-medium.text-gray-900(for="email" class="text-sm/6") Email address
        InputComponent(id="email" type="email" placeholder="example@example.com" class="mt-2")
        .col-span-full
      .mt-10
        label.block.font-medium.text-gray-900(for='messages' class='text-sm/6') Messages
        textarea#messages.block.w-full.rounded-md.bg-white.px-3.text-base.text-gray-900.outline-1.-outline-offset-1.outline-gray-300.mt-2(name='messages' rows='3' class='py-1.5 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6')
      .w-full.justify-center.flex
        button.rounded-md.bg-sky-600.px-3.py-3.text-sm.font-semibold.text-white.shadow-xs.my-4(type='submit' class='hover:bg-sky-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600') Submit messages
  ModalComponent(:show="modal_show" @close="modal_show=false" :message="model_message" :type="modal_type")
</template>
