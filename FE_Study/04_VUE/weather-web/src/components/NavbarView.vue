<template>
  <nav class="container navbar-container">
    <div class="navbar">
      <div class="header-text">🍀 Weather Search 🍀</div>
      <div class="toggle">
        <i class="fa-solid fa-bars-staggered"></i>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar-container {
  margin-bottom: 10px;
}
.navbar {
  width: 100%;
  background: white;
  padding: 10px;
  display: flex;
  border-bottom: 2px solid gray;
  align-items: center;
  .header-text {
    color: teal;
    font-weight: bold;
  }
  .toggle {
    margin-left: auto;
    // background: skyblue;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
