<!-- 时钟 -->
<template>
  <div class="time">
    <ul class="nowTime" ref="nowTime">
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted,onUnmounted,onBeforeUnmount, onBeforeUpdate, onUpdated, watchEffect } from "vue";
const nowTime = ref<HTMLDivElement | null>(null);
const NowTime = () => nowTime.value as HTMLDivElement;

//获取当前时间
function getNowFormatDate() { 
  let date = new Date();
  let year: number | string = date.getFullYear();
  let month: number | string = date.getMonth() + 1;
  let strDate: number | string = date.getDate();
  let Hour: number | string = date.getHours(); // 获取当前小时数(0-23)
  let Minute: number | string = date.getMinutes(); // 获取当前分钟数(0-59)
  let Second: number | string = date.getSeconds(); // 获取当前秒数(0-59)
  let show_day = new Array(
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  );
  let day = date.getDay();
  if (Hour < 10) {
    Hour = "0" + Hour;
  }
  if (Minute < 10) {
    Minute = "0" + Minute;
  }
  if (Second < 10) {
    Second = "0" + Second;
  }
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  let currentdate =
    "<div><p style='text-align:left;background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#000000), to(#5ec0d2));-webkit-background-clip: text;-webkit-text-fill-color: transparent;'>" +
    year +
    "年" +
    month +
    "月" +
    strDate +
    "号</p><p style='text-align:left'>" +
    show_day[day] +
    "</p></div>";
  let HMS = Hour + ":" + Minute + ":" + Second;
  NowTime().children[0]!.innerHTML = HMS;
  NowTime().children[1]!.innerHTML = currentdate;
  let time= ref(setTimeout(getNowFormatDate, 1000)); //每隔1秒重新调用一次该函数

};


onMounted(async() => {  
  getNowFormatDate()
});


</script>

<style scoped>
.time {
  position: absolute;
  right: 120px;
  width: 20%;
  height: 200px;
  background-color: white;
  opacity: 0.7;
  border-radius: 40px;
  margin-top: 874px;
}
.nowTime {
  width: 80%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 34px;
}
.nowTime li {
  width: 100%;
  height: 60px;
  font-size: 34px;
  color: black;
}
.nowTime li:nth-child(2) {
  font-size: 20px;
}


</style>
