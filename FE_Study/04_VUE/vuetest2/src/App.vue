<template>
   <NavbarView :activeIndex="activeIndex" @changeActive="setActiveIndex" />
   <SearchBarView :data="data_temp" @searchMovie="searchMovie" />
   <button @click="viewAllMovie">전체보기</button>
   <CardView v-bind:data="data_temp" :isModal="isModal" @modalOpen="modalOpen" @increaseLike="increaseLike"></CardView>
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
import SearchBarView from './components/SearchBarView.vue';

export default {
   name: 'appView',
   data() {
      return {
         data: mdata,
         isModal: false,
         selectedNum: 0,
         activeIndex: 0, // 추가: 현재 활성화된 메뉴 인덱스
         data_temp: [...mdata],
      };
   },
   methods: {
      increseLike(i) {
         console.log(i);
         this.data[i].like += 1;
      },
      modalOpen(num) {
         this.isModal = true;
         this.selectedNum = num;
         console.log('view', num);
      },
      closeM() {
         this.isModal = false;
      },
      setActiveIndex(index) {
         // 추가: 활성화된 인덱스 설정 메서드
         this.activeIndex = index;
      },
      searchMovie(title) {
         console.log('영화이름은 ' + title);
         this.data_temp = this.data.filter(movie => {
            return movie.title.includes(title);
         });
      },
      viewAllMovie() {
         this.data_temp = [...this.data];
      },
   },
   components: {
      NavbarView: NavbarView,
      ModalView: ModalView,
      CardView: CardView,
      SearchBarView: SearchBarView,
   },
};
</script>

<style lang="scss" scoped></style>
