<template>
   <div class="container">
      <img src="./assets/202406131103253133_0.jpg" alt="" />
      <div class="card">
         <h1>{{ title }}</h1>
         <p>🍀{{ num }}</p>
         <p>대여 : {{ won }}</p>
      </div>
      <div v-for="(item, index) in todos" v-bind:key="index">{{ item }}</div>

      <ul>
         <li v-for="(item, i) in todos" :key="i">{{ item }}</li>
      </ul>
   </div>
</template>

<script>
export default {
   name: 'App',
   data() {
      return {
         title: '핸섬가이즈',
         num: '8.6',
         won: '11,000원',
         todos: ['서울', '부산', '대구'],
      };
   },
};
</script>

<style lang="scss" scoped>
@import './css/style.scss';
</style>
