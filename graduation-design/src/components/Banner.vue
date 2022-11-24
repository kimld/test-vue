<template>
    <!-- 主体区域 -->
  <div class="banner">
    <!-- 轮播图部分 -->
    <carusel/>
    <!-- 个人信息显示部分 -->
    <personal/>
    <!-- 公告 -->
    <notice/>
    <!-- 时钟 -->
    <clock/>
    <!-- 微博 -->
    <sina/>
    <!--关于 -->
    <about/>
    <!--大卡片区域 -->
    <card/>
  </div>
</template>

<script setup lang="ts">
// 轮播图
import carusel from '@/components/Banner/Carusel.vue'
//个人
import personal from '@/components/Banner/Personal.vue'
//公告
import notice from '@/components/Banner/Notice.vue'
// 时钟
import clock from '@/components/Banner/Time.vue'
// 微博
import sina from '@/components/Banner/Sina.vue'
// 关于
import about from '@/components/Banner/About.vue'
//大卡片内容部分
import card from '@/components/Banner/Card.vue'
</script>

<style scoped>
.banner{
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-left: 120px;
  padding-right: 50px;
}
</style>
