<template>
  <div class="main-text">LEVEL 5</div>
  <div class="map-container">
    <div class="top" @mouseover="handleMouseOver"></div>
    <div class="left" @mouseover="handleMouseOver"></div>
    <div class="right" @mouseover="handleMouseOver"></div>
    <div class="map-container" @mouseover="handleMouseOver"></div>
    <div class="obstacle-1" @mouseover="handleMouseOver"></div>
    <div class="obstacle-2" @mouseover="handleMouseOver"></div>
    <div class="obstacle-3" @mouseover="handleMouseOver"></div>
    <div class="obstacle-4" @mouseover="handleMouseOver"></div>
    <div class="finsh-btn" @click="goToLevel6">도착</div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToLevel6 = () => {
  router.push("/level/6");
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
  width: 500px;
  right: 0;
  bottom: -400px;
  animation: moveObstacle1 2s linear infinite alternate; /* 애니메이션 적용 */
}
.obstacle-2 {
  position: absolute;
  background-color: red;
  height: 30px;
  width: 500px;
  left: 0;
  bottom: -200px;
  animation: moveObstacle2 2s linear infinite alternate; /* 애니메이션 적용 */
}
.obstacle-3 {
  position: absolute;
  background-color: red;
  height: 300px;
  width: 30px;
  left: 300px;
  bottom: -300px;
  animation: moveObstacle3 1s linear infinite alternate; /* 애니메이션 적용 */
}
.obstacle-4 {
  position: absolute;
  background-color: red;
  height: 300px;
  width: 30px;
  left: 900px;
  bottom: -600px;
  animation: moveObstacle4 1s linear infinite alternate; /* 애니메이션 적용 */
}

@keyframes moveObstacle1 {
  0% {
    right: 0;
  }
  100% {
    right: 400px;
  }
}

@keyframes moveObstacle2 {
  0% {
    left: 0;
  }
  100% {
    left: 400px;
  }
}

@keyframes moveObstacle3 {
  0% {
    bottom: -300px;
  }
  100% {
    bottom: -600px;
  }
}

@keyframes moveObstacle4 {
  0% {
    bottom: -600px;
  }
  100% {
    bottom: -300px;
  }
}
</style>
