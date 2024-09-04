<template>
  <div>ViewComp</div>
  <p>{{ props.text }}</p>
  <button @click="emitUpdate">>변경</button>
</template>

<script setup>
import { defineEmits } from "vue";
const props = defineProps({
  text: String,
});

const emit = defineEmits(["update"]); // 'update' 이벤트를 선언합니다.

const emitUpdate = () => {
  emit("update"); // 이벤트를 발생시킵니다.
};
</script>

<style lang="scss" scoped></style>
