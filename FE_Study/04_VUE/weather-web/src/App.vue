<template>
  <div>
    <NavbarView />
    <MainView />
    <!-- <button @click="$store.dispatch('getWeather')">자료가지고오기</button> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavbarView from "./components/NavbarView.vue";
import MainView from "./components/MainView.vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  // getWeather();
  store.dispatch("getWeather");
});
</script>

<style lang="scss" scoped></style>
