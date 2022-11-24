<template>
 <div class="mask">
   <typewriter></typewriter>
   <sildeBottom/>
 </div>
  <!-- 下部主页的内容部分 -->
  <banner/>
</template>
  
<script setup lang="ts">
// 导入跳动的按钮的效果
import sildeBottom from '@/components/SlideBottom.vue'
// 实现打字机的效果
import typewriter from '@/components/Typewriter.vue'
import banner from '@/components/Banner.vue'
</script>

<style scoped>
.mask{
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: 0.4;
}

</style>