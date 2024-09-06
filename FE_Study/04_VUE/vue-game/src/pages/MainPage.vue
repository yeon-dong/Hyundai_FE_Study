<template>
  <div class="map-container">
    <div class="left"></div>
    <div class="right"></div>
    <div class="map-container">
      <div class="start-btn" @click="goToLevel1">시작</div>
    </div>
  </div>
  <div class="main-text">아래 버튼을 눌러서 게임을 시작하세요!</div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToLevel1 = () => {
  router.push("/level/1");
};
</script>

<style lang="scss" scoped>
.main-text {
  font-size: 40px;
  position: absolute;
  top: 40vh;
  left: 28vw;
}
.start-btn {
  position: absolute;
  bottom: 50px;
  left: 50px;
  width: 50px;
  height: 50px;
  background-color: #000000;
  color: white;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
</style>
