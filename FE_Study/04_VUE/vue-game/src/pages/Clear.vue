<template>
  <div class="main-text">탈출에 성공했습니다!</div>
  <div class="replay-text" @click="goToMain">한번 더 하기 -></div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToMain = () => {
  router.push("/");
};
</script>

<style lang="scss" scoped>
.main-text {
  font-size: 60px;
  position: absolute;
  top: 38vh;
  left: 32vw;
  z-index: 1;
}

.replay-text {
  font-size: 40px;
  position: absolute;
  top: 70vh;
  left: 42vw;
  z-index: 1;
  cursor: pointer;
}
</style>
