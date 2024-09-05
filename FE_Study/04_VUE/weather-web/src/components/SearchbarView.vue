<template>
  <div class="container search-bar">
    <input
      type="text"
      class="inp"
      @input="inputText = $event.target.value"
      @keyup.enter="handleSearch"
      placeholder="지역명을 입력하세요."
    />
    <div class="sIcon" @click="handleSearch">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputText = ref("");
const handleSearch = () => {
  if (inputText.value.trim() === "") {
    alert("검색어를 입력해주세요!"); // 입력이 없을 경우 경고창
  } else {
    $store.commit("onSearchCity", inputText.value);
    $store.dispatch("getWeather");
    inputText.value = ""; // 입력 후 초기화
  }
};
</script>

<style lang="scss" scoped>
.search-bar {
  padding: 10px 16px;
  position: relative;
  margin-bottom: 20px;

  .inp {
    border: 0 none;
    outline: 0 none;
    border-bottom: 1px solid #333;
    padding: 10px 10px;
    width: 100%;
    font-size: 18px;
  }
  .sIcon {
    width: 30px;
    height: 30px;
    // background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid #333;
    border-radius: 50%;
    position: absolute;
    right: 16px;
    top: 12px;
    cursor: pointer;
  }
}
</style>
