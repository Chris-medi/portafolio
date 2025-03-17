<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

import { onMounted, ref } from "vue";

const map = ref();

const coord = [5.383309999939931, -75.16111190527492];
const style_map = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

onMounted(() => {
  map.value = L.map("map").setView([coord[0], coord[1]], 12);

  L.tileLayer(style_map, {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map.value);

  L.marker([coord[0], coord[1]])
    .addTo(map.value)
    .bindPopup("I'm here")
    .openPopup();
});
</script>
<template lang="pug">
div(id="map" class="w-full h-full min-h-[400px] rounded-lg shadow-xl")

</template>
