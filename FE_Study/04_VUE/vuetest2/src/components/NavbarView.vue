<template>
   <div class="conWrap">
      <div class="container menu">
         <a
            v-for="(item, index) in menuItems"
            :key="index"
            :class="{ on: activeIndex == index }"
            @click="changeActive(index)"
         >
            {{ item }}
         </a>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      activeIndex: Number, // 부모로부터 활성화된 인덱스 받기
   },
   data() {
      return {
         menuItems: ['영화', '방송', '랭킹', '무료', '이벤트', '멤버십'], // 메뉴 항목
      };
   },
   methods: {
      changeActive(index) {
         // 클릭 시 호출되는 메서드
         this.$emit('changeActive', index); // 부모에게 인덱스 전달
      },
   },
};
</script>

<style lang="scss" scoped>
a:link,
a:visited {
   text-decoration: none;
   color: black;
}
.conWrap {
   width: 100%;
   //    background-color: skyblue;
   border-bottom: 1px solid #888;
   //    padding: 16px 0;

   .menu {
      display: flex;
      a {
         display: block;
         margin-right: 5px;
         font-weight: bold;
         position: relative;
         padding: 16px 0;
         padding-right: 40px;
         cursor: pointer;
      }
      @media screen and (max-width: 560px) {
         a {
            padding-right: 15px;
         }
      }

      a.on:after,
      a:hover:after {
         content: '';
         //  display: block;
         position: absolute;
         width: 50px;
         height: 5px;
         bottom: -3px;
         left: 0;
         background-color: rgb(80, 124, 14);
      }
   }
}
</style>
