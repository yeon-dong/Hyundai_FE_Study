<template>
  <div class="main-text">LEVEL 1</div>
  <div class="map-container">
    <div class="top" @mouseover="handleMouseOver"></div>
    <div class="finsh-btn" @click="goToLevel2">도착</div>
    <div class="left" @mouseover="handleMouseOver"></div>
    <div class="right" @mouseover="handleMouseOver"></div>
    <div class="map-container" @mouseover="handleMouseOver"></div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToLevel2 = () => {
  router.push("/level/2");
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
}
.finsh-btn {
  position: absolute;
  top: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  background-color: #000000;
  color: white;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
</style>
