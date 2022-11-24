<template>
    <!-- 标题 -->
    <div class="title">🍉Honywo</div>
    <!-- 打印机 -->
    <div class="box">
    <h1>
      <span class="css">{{ goodSentence }}</span>
      <span class="mark"></span>
    </h1>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
let texts = 'Welcome here. Please start your tour!😎😎😎'

const goodSentence = ref(texts)
let index = 0;
let charIndex = 0;
let delta = 500;
let start: number | null = null;
let isDeleting = false;

const type = (time: number)=>{
  window.requestAnimationFrame(type)
  if (!start) start = time
  let progress = time -start;
  if (progress > delta) {
    let text = goodSentence.value
    if (!isDeleting){
      goodSentence.value = texts.slice(0,++charIndex)
      delta = 400 - Math.random() * 400
    }else {
      goodSentence.value = texts.slice(0,charIndex--)
    }
    start = time;

    if (charIndex === texts.length){
      isDeleting = true;
      delta = 200;
      start = time + 1200;
    }

    if (charIndex < 0 ){
      isDeleting = false;
      start = time + 200;

    }
  }
}
window.requestAnimationFrame(type)
</script>

<style scoped>
.title{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    position: relative;
    top: 54%;
    font-size: 30px;
    color: aqua;
}
.box{
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 9999;
    position: relative;
    top: 54%;
}
.mark {
  height: 40px;
  border-right: 2px solid;
  animation: blink 0.6s step-end infinite;
}
@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-right: 2px solid;
  }
}
.css{
    font-size: 32px;
    color:white;
}
</style>