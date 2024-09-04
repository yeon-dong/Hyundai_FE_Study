<template>
  <div>{{ count }} {{ text }}</div>
  <button @click="addNum">클릭</button>
  <ViewComp :text="text" @update="textChange"></ViewComp>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ViewComp from "./components/ViewComp.vue";
import axios from "axios";

const count = ref(0);
const text = ref("title");
const weatherData = ref({
  icon: "icon",
  temp: 0,
  text: "text",
  location: "location",
  city: "seoul",
});
const addNum = () => {
  count.value++;
};

const textChange = () => {
  text.value = "vueComp";
};

const getWeather = async () => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
  );
  console.log(res.data);
};

onMounted(() => {
  getWeather();
});
</script>

<style lang="scss" scoped></style>
