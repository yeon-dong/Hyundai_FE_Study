<template>
   <NavbarView />
   <div class="container">
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
               <p>👍 {{ item.like }} <button @:click="increseLike(i)">클릭</button></p>
               <div class="btn" v-on:click="modalOpen(i)">상세보기</div>
            </div>
            <div class="hot">HOT</div>
         </div>
      </div>
   </div>
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
export default {
   name: 'appView',
   data() {
      return {
         data: mdata,
         isModal: false,
         selectedNum: 0,
      };
   },
   methods: {
      increseLike(i) {
         this.data[i].like = this.data[i].like + 1;
      },
      modalOpen(num) {
         this.isModal = true;
         this.selectedNum = num;
      },
   },
   components: {
      NavbarView,
      ModalView,
   },
};
</script>

<style lang="scss" scoped>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
   margin: 0;
   padding: 0;
   border: 0;
   font-size: 100%;
   font: inherit;
   vertical-align: baseline;
}

h3 {
   font-weight: bold;
   font-size: 18px;
}

.container {
   width: 1000px;
   margin: 0 auto;
   @media screen and (max-width: 790px) {
      width: 100%;
   }
}

.cardWrap {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 10px;
   .card {
      width: calc((100% - 30px) / 4);
      position: relative;
      @media screen and (max-width: 790px) {
         width: calc((100% - 10px) / 2);
      }
      .imgWrap {
         width: 100%;
         overflow: hidden;
         border-radius: 5px;

         img {
            display: block;
            width: 100%;
            transition: 10s;
         }
         &:hover img {
            transform: scale(10);
            transform: rotate3d(3, 2, 3, 120000deg);
         }
      }
      .cardText {
         padding: 5px;

         .btn {
            padding: 4px;
            color: #ffffff;
            display: block;
            display: flex;
            justify-content: center;
            background-color: skyblue;
            border-radius: 4px;
            cursor: pointer;
         }
      }
      .hot {
         position: absolute;
         top: 10px;
         left: 10px;
         background-color: rgba($color: #ff0000, $alpha: 0.6);
         padding: 5px 10px;
         border-radius: 5px;
         font-weight: bold;
         color: #ffffff;
      }
   }
}
</style>
