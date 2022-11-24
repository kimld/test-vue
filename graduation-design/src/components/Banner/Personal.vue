<!-- 个人的列表页 -->
<template>
    <div class="personal">
       <div class="picture">
        <img :src="imageUrl" class="img" />
       </div>
    </div>
</template>

<script setup lang="ts">
import { ref,onMounted, onUpdated } from 'vue'
import API from '@/apis/axios';
import   {useRouter}   from 'vue-router'
const router=useRouter()
const imageUrl = ref('')
// const data= API.get('/code/initload')
// console.log(data);
// data.then((res)=>{
//     imageUrl.value='http://127.0.0.1:8080/'+ res.data.message.avatar
// })

onMounted(async ()=>{
  imageUrl.value='http://127.0.0.1:8080/'+ (await data).data.message.avatar
})
</script>

<style scoped>
.personal{
    margin-top: 109px;
    position: absolute;
    right: 120px;
    width: 20%;
    height: 400px;
    background-color: red;
    border-radius: 40px;
    display: flex;
    justify-content: center;
}
/* 图片的样式设置与旋转 */
.picture{
  margin-top: 20px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: white;
  animation: light 4s ease-in-out infinite;
  transition: 1s
}
.picture:hover {
     transform: rotate(360deg);
 }
.img{
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border-radius: 50%;
}
</style>

