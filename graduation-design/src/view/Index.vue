<template>
  <!-- building为背景图片 -->
  <div class="building">
    <!-- 导航栏 -->
    <navgation />
    <!--mask部分 -->
    <router-view  />
  </div>
</template>

<script setup lang="ts" >
// 导航栏
import navgation from "@/components/Navgation.vue";
import { onMounted, provide } from "vue";
import {useRouter} from 'vue-router'
const router=useRouter()

</script>

<style scoped>
/* 背景图片 */
.building {
  background: url("@/assets/image/yln01.JPG");
  width: 100%;
  height:350%;
  background-size: 100% 100%;
  /*固定图片 */
  background-attachment: fixed;
}
/* <!--撑开的空盒子 --> */
.building{
      cursor: url('../assets/image/feather.png'),auto;
}

</style>
