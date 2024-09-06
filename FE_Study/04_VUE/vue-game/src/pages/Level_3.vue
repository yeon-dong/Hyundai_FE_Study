<template>
  <div class="main-text">LEVEL 3</div>
  <div class="map-container">
    <div class="top" @mouseover="handleMouseOver"></div>
    <div class="left" @mouseover="handleMouseOver"></div>
    <div class="right" @mouseover="handleMouseOver"></div>
    <div class="map-container" @mouseover="handleMouseOver"></div>
    <div class="obstacle-1" @mouseover="handleMouseOver"></div>
    <div class="obstacle-2" @mouseover="handleMouseOver"></div>
    <div class="finsh-btn" @click="goToLevel4">도착</div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToLevel4 = () => {
  router.push("/level/4");
};

const handleMouseOver = (event) => {
  if (!event.target.classList.contains("finsh-btn")) {
    router.push("/"); // 메인 페이지로 리다이렉트
    alert("벽에 닿았습니다...😅");
  }
};
</script>

<style lang="scss" scoped>
.main-text {
  font-size: 40px;
  position: absolute;
  top: 46vh;
  left: 46vw;
  z-index: 1;
}
.finsh-btn {
  position: absolute;
  bottom: -60px;
  left: 50px;
  width: 50px;
  height: 50px;
  background-color: #000000;
  color: white;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
.obstacle-1 {
  position: absolute;
  background-color: red;
  height: 30px;
  width: 1000px;
  right: 0;
  bottom: -400px;
}
.obstacle-2 {
  position: absolute;
  background-color: red;
  height: 30px;
  width: 1000px;
  left: 0;
  bottom: -200px;
}
</style>
