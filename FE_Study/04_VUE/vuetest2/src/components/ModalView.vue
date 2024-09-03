<template>
   <div class="modal" v-if="isModal">
      <div class="inner">
         <div>{{ mydata[selectedNum].title }}</div>
         <hr />
         <div>subtitle</div>
         <button v-on:click="$emit('closeModal')">닫기</button>
      </div>
   </div>
</template>

<script>
export default {
   name: 'modalView',
   props: {
      mydata: Array,
      isModal: Boolean,
      selectedNum: Number,
   },
};
</script>

<style lang="scss" scoped>
.modal {
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;
   background-color: rgba(0, 0, 0, 0.3);
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   .inner {
      background-color: #fff;
      width: 400px;
      padding: 10px 16px;
      border-radius: 16px;
      button {
         width: 100%;
      }
   }
}
</style>
