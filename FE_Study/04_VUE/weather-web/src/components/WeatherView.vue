<template>
  <div class="container weather-info">
    <div class="location">
      {{ $store.state.weatherData.location }} /
      {{ $store.state.weatherData.city }}
    </div>
    <div class="icon">
      <img
        :src="`https://openweathermap.org/img/wn/${$store.state.weatherData.icon}@4x.png`"
        alt=""
      />
    </div>
    <div class="text">{{ $store.state.weatherData.text }}</div>
    <div class="temp">
      현재 온도 : {{ ($store.state.weatherData.temp - 273.15).toFixed(2) }}&deg
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.weather-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text {
  font-size: 20px;
  margin-bottom: 20px;
}
</style>
