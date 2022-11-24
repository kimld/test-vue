<template>
    <!--轮播图的盒子 -->
    <div class="carusel">
        <!--轮播图左侧部分 -->
      <el-carousel height="200px" direction="vertical" :autoplay="true">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
        <!-- 右侧部分 -->
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* 设置上边距 */
.carusel{
    margin-top: 109px;
    width: 60%;
    height: 240px;
    background-color: red;
    padding: 20px;
    position: absolute;
    border-radius: 40px;
}
/* 设置轮播图宽度 */
.el-carousel {
  margin: 0 20px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>