<template>
    <!--name为获取的名 -->
  <div class="Avater">
    <el-upload
      class="avatar-uploader"
      action="http://127.0.0.1:8080/code/upload"
      name="avatar"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :headers="myHeaders"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon">点击修改头像</el-icon>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted, watchEffect } from 'vue'
import { ElMessage } from 'element-plus'
import type { UploadProps } from 'element-plus'
import API from '@/apis/axios';
import qs from 'qs'
const token=window.sessionStorage.getItem('token')
const myHeaders={Authorization: token}
const imageUrl = ref('')
const handleAvatarSuccess: UploadProps['onSuccess'] = async (response,uploadFile) => {
  console.log(response);
  imageUrl.value = 'http://127.0.0.1:8080/'+response.src
    //  ElMessage.success('更换头像成功')                                                                                                         
  const {data:res}=await API.post('/code/changeload',qs.stringify({src:response.src}))
  console.log(res);
  
}

// 更换前的验证
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
onMounted(async ()=>{
    const {data:res}=await API.get('/code/initload')
    if(!imageUrl.value){
      imageUrl.value=''
    }
      imageUrl.value='http://127.0.0.1:8080/'+res.message.avatar
})


</script>

<style scoped>
/* 位置 */
.Avater{
    display: flex;
    justify-content: center;
    padding-top: 14px;
}
/* 大小 */
.avatar-uploader .avatar {
  width: 170px;
  height: 170px;
  display: block;
} 
</style>

<style>
.avatar-uploader .el-upload {
  border: 2px dashed var(--el-border-color);
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}
</style>