<script setup>
import TiendaHeader from "@/components/TiendaHeader.vue";
import FooterTienda from "@/components/FooterTienda.vue";
import { RouterView } from "vue-router";
// import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <div>
    <TiendaHeader />
  </div>
  <div class="body m-3">
    <RouterView />
  </div>
  <div clas="footer">
    <FooterTienda />
  </div>
</template>

<style scoped>
.body {
  max-width: 100vw;
  background-color: #efeaf0;
  min-height: 70vh;
}
</style>
