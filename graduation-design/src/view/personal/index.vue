<template>
  <div>
    <div class="mask">
      <!-- 标题 -->
      <div class="title">个人中心</div>
    </div>
    <!-- 表单部分 -->
    <div class="box">
      <div class="change">修改头像：</div>
      <avator />
      <div class="table">
        <!-- 用户名 -->
        <el-form :model="form" label-width="120px">
          <el-form-item label="用户名：">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-form>
        <!-- 邮箱 -->
        <el-form :model="form" label-width="120px">
          <el-form-item label="邮箱">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-form>
        <!-- 生日 -->
        <el-form :model="form" label-width="120px">
          <el-form-item label="生日">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-form>
        <!-- 住址 -->
        <el-form :model="form" label-width="120px">
          <el-form-item label="住址">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-form>
        <!-- 爱好 -->
        <el-form :model="form" label-width="120px">
          <el-form-item label="爱好">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import avator from "@/components/PersonalCenter/avator.vue";

const form = reactive({
  name: "",
});
</script>

<style scoped>
.mask {
  width: 100%;
  height: 20vh;
  background-color: black;
  opacity: 0.4;
}
.title {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  font-size: 36px;
  color: white;
  position: absolute;
  top: 10vh;
}
.box {
  position: relative;
  width: 50%;
  height: 150vh;
  background-color: aliceblue;
  opacity: 0.9;
  margin-top: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 10px;
}
/*修改头像的文字 */
.change {
  width: 100%;
  height: 40px;
  color: blue;
  font-size: 30px;
  text-align: center;
  margin-bottom: 10px;
}
/* 表单的盒子 */
.table {
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 30px;
  margin-left: 60px;
}

</style>
