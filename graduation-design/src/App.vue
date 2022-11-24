<template>
  <router-view/>
</template>

<script lang="ts" setup>
import { watchEffect } from 'vue'
import jwt_decode from 'jwt-decode'
import {useAuthStore} from "./stores/counter"
import { ElMessage} from 'element-plus'
import { useRouter } from 'vue-router'
const router=useRouter()
const store =useAuthStore()
// 刷新页面,pinia的存储还在,需要存放在APP组件中
watchEffect(()=>{
  if(window.sessionStorage.token){
    const decode=jwt_decode(window.sessionStorage.token)
    //认证解析的结果
    if(!decode){
      ElMessage.error('认证失败')
      router.push('/login')
    }
    store.setAuth(!!decode)
    store.setUser(decode)
  }
})
</script>

<style scoped>

</style>