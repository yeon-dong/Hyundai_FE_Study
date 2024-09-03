<template>
   <NavbarView :activeIndex="activeIndex" @changeActive="setActiveIndex" />
   <CardView v-bind:data="data" :isModal="isModal" @modalOpen="modalOpen" @increaseLike="increaseLike"></CardView>
   <ModalView
      v-bind:mydata="data"
      :isModal="isModal"
      :selectedNum="selectedNum"
      @closeModal="isModal = false"
   ></ModalView>
</template>

<script>
import mdata from '@/assets/mdata';
import NavbarView from '@/components/NavbarView.vue';
import ModalView from '@/components/ModalView.vue';
import CardView from '@/components/CardView.vue';

export default {
   name: 'appView',
   data() {
      return {
         data: mdata,
         isModal: false,
         selectedNum: 0,
         activeIndex: 0, // 추가: 현재 활성화된 메뉴 인덱스
      };
   },
   methods: {
      increaseLike(i) {
         this.data[i].like = this.data[i].like + 1;
      },
      modalOpen(num) {
         this.isModal = true;
         this.selectedNum = num;
      },
      setActiveIndex(index) {
         // 추가: 활성화된 인덱스 설정 메서드
         this.activeIndex = index;
      },
   },
   components: {
      NavbarView,
      ModalView,
      CardView,
   },
};
</script>

<style lang="scss" scoped></style>
