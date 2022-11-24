<!-- 下拉到底部的按钮 -->
<template>
  <div class="barwi animate-bounce-up">
    <!-- 下拉的按钮 -->
    <el-button @click="scroll" class="icss gobottom bg-cyan-50 ">
        <svg t="1668756066574" class="icon xl" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2661" width="200" height="200"><path d="M517.688889 796.444444c-45.511111 0-85.333333-17.066667-119.466667-51.2L73.955556 381.155556c-22.755556-22.755556-17.066667-56.888889 5.688888-79.644445 22.755556-22.755556 56.888889-17.066667 79.644445 5.688889l329.955555 364.088889c5.688889 5.688889 17.066667 11.377778 28.444445 11.377778s22.755556-5.688889 34.133333-17.066667l312.888889-364.088889c22.755556-22.755556 56.888889-28.444444 79.644445-5.688889 22.755556 22.755556 28.444444 56.888889 5.688888 79.644445L637.155556 739.555556c-28.444444 39.822222-68.266667 56.888889-119.466667 56.888888 5.688889 0 0 0 0 0z" p-id="2662" fill="#707070"></path></svg>
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
function scroll(): any {
// scrollTo是光滑的滑动，top的是滚动的截止位置
  window.scrollTo({
    top: screen.height,
    behavior:'smooth'
  });
}

</script>

<style scoped>
.barwi {
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 92vh;
}
.icss {
  width: 40px;
  height: 25px;
  font-size: 30px;
  color: gray;
  z-index: 99;
  margin-top: 10px;
  align-items: center;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  border: none;
  /*直接设置背景为透明 */
  background: transparent;
}
/* 下拉的图片样式*/
.xl{
  width: 40px;
  height: 100%;
}
/*盒子上下跳动 */
@-webkit-keyframes bounce-up {
            25% {
                -webkit-transform: translateY(10px);
            }

            50%,
            100% {
                -webkit-transform: translateY(0);
            }

            75% {
                -webkit-transform: translateY(-10px);
            }
        }

        @keyframes bounce-up {
            25% {
                transform: translateY(10px);
            }

            50%,
            100% {
                transform: translateY(0);
            }

            75% {
                transform: translateY(-10px);
            }
        }

        .animate-bounce-up {
            width: 100%;
            height: 40px;
            -webkit-animation: bounce-up 1.4s linear infinite;
            animation: bounce-up 1.4s linear infinite;
        }

</style>
