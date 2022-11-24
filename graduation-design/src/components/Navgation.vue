<template>
  <!--导航栏 -->
  <div class="nav1">
    <!--回到顶部的标签显示-->
    <div class="bigtag">
      <div class="bq1" @mouseenter="disp">🍉Honywo</div>
      <el-button
        type="success"
        @mouseleave="shou"
        @click="backTop()"
        class="bq2"
        round
        >回到顶部</el-button
      >
    </div>
    <div class="bolg">
      <!-- 头部的导航 -->
      <el-menu class="el-menu-demo1" mode="horizontal" router default-active="true">
        <!-- 回到首页 -->
        <div class="back">
          <div class="bq3" @mouseenter="pass">🍉Honywo</div>
          <el-button
            type="danger"
            @mouseleave="showag"
            @click="home"
            class="bq4"
            round >🏠</el-button>
        </div>
        <el-sub-menu index="1">
          <template #title>📘休闲</template>
          <el-menu-item index="/login" >运动</el-menu-item>
          <el-menu-item index="/login">新闻</el-menu-item>
          <el-menu-item index="/login">绘画</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>💭聊天室</template>
          <el-menu-item index="/login">公共聊天</el-menu-item>
          <el-menu-item index="/login">私人聊天</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="3">
          <template #title>📝日常记录</template>
          <el-menu-item index="/login">个人日常</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title >📂个人</template>
          <el-menu-item index="/index/personCenter">🔑&nbsp;个人中心</el-menu-item>
          <el-menu-item index="/login">🛒&nbsp;个人收藏</el-menu-item>
        </el-sub-menu>
        <el-button @click="back" class="bg-red-600" round>退出</el-button>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// 获取导航栏显示的与否
let showNav = ref<any>(false);

// 退出按钮事件操作
function back(): any {
  window.sessionStorage.setItem("token", "");
  router.push("/login");
}
// 按钮点击首页事件，此处添加计时器修复bug
function home(): any {
  // 重新刷新本页面的代码
    router.push({path:'/index'})
    setInterval(()=>{
    location.reload();
    router.go(0);
   },100)

}
// 按钮触发回到顶部事件
function backTop(): any {
  document.documentElement.scrollTop = 0;
}
// 标题的变化消失
function disp(): any {
  (document.querySelector(".bq1") as HTMLElement).style.display = "none";
  (document.querySelector(".bq2") as HTMLElement).style.display = "block";
}
//标题变化出现
function shou(): any {
  (document.querySelector(".bq2") as HTMLElement).style.display = "none";
  (document.querySelector(".bq1") as HTMLElement).style.display = "block";
}
// 首页消失
function pass(): any {
  (document.querySelector(".bq3") as HTMLElement).style.display = "none";
  (document.querySelector(".bq4") as HTMLElement).style.display = "block";
}
//首页出现
function showag(): any {
  (document.querySelector(".bq4") as HTMLElement).style.display = "none";
  (document.querySelector(".bq3") as HTMLElement).style.display = "block";
}
// 检测滚动条的变化配置标签栏
window.addEventListener("scroll", (e) => {
  //window滚动的长度刚好大于屏幕的长度
  if (window.scrollY >= screen.height / 2) {
    (document.querySelector(".bigtag") as HTMLElement).style.display = "block";
    (document.querySelector(".bolg") as HTMLElement).style.display = "none";
  } else {
    (document.querySelector(".bolg") as HTMLElement).style.display = "block";
    (document.querySelector(".bigtag") as HTMLElement).style.display = "none";
  }
});

</script>

<style scoped>
/* 导航栏 */
.nav1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: white;
  opacity: 0.8;
  z-index: 2000;
}
.bolg {
  width: 85%;
}
.el-sub-menu {
  margin-right: 40px;
}
.fixedNav {
  position: absolute;
}
.el-menu-demo1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/* 开头标签 */
.bq1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 120px;
  font-size: 24px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  display: block;
}
.bq2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 120px;
  height: 36px;
  display: none;
}
.bq3 {
  width: 120px;
  font-size: 24px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  display: block;
}
.bq4 {
  width: 120px;
  height: 36px;
  display: none;
}
.bigtag {
  position: relative;
  display: none;
  height: 59px;
}
</style>
