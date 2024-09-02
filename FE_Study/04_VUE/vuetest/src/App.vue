<template>
   <div class="container secWrap">
      <h3>HOT & NEW</h3>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <div class="imgWrap">
               <img v-bind:src="`./images/${item.img}`" alt="" />
            </div>
            <div class="cardText">
               <h3>{{ item.title }}</h3>
               <p>❤️ {{ item.num }}</p>
               <p>대여 : {{ item.won }}</p>
            </div>
         </div>
      </div>
   </div>

   <!-- <div v-for="(item, index) in todos" v-bind:key="index">{{ item }}</div>

      <ul>
         <li v-for="(item, i) in todos" :key="i">{{ item }}</li>
      </ul> -->
</template>

<script>
export default {
   name: 'App',
   data() {
      return {
         todos: ['서울', '부산', '대구'],
         data: [
            { title: '핸섬가이즈', num: 8.3, won: '11,000원', img: 'handsome.jpg' },
            { title: '에이리언: 로물루스', num: 8.79, won: '15,000원', img: '에일리언.jpg' },
            { title: '파일럿', num: 7.73, won: '12,000원', img: '파일럿.jpg' },
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
@import './css/style.scss';
</style>
