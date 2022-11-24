<template>
<div class="h-screen w-screen bg-pink-100 md:absolute " >
          <!-- 中间盒子区域 -->
          <!-- 第一个盒子 -->
    <div class="w-1/2 h-1/2 bg-blue-300 md:absolute left-1/2 bottom-1/2 -translate-x-1/2 
    translate-y-1/2 shadow-2xl  shadow-red-600" v-show="Showone" >
            <!-- 上方盒子区域 -->
         <div class="  text-yellow-300 text-2xl mt-5  font-black text-center " >~欢迎来到小屋~</div>
        <!-- 登录表单 -->
    <el-form
    ref="loginRuleFormRef"
    :model="loginRuleForm"
    :rules="loginRules"
    label-width="130px" >
    <el-form-item label="用户名：" prop="username" class=" mt-20 mr-10 ">
      <el-input v-model="loginRuleForm.username" />
    </el-form-item >
    <el-form-item label="密码：" prop="password" class=" mr-10 mt-10">
      <el-input
        v-model="loginRuleForm.password"
        type="password"/>
    </el-form-item>
    <el-form-item class=" ">
      <el-button type="danger"  class=" text-red-600 w-2/6 mr-10 ml-10 mt-6" @click="Login(loginRuleFormRef)">登录</el-button>
      <el-button type="danger"  class=" text-red-600 w-2/6  mt-6" @click="Reguser">注册</el-button>
    </el-form-item>
  </el-form>

    </div>
          <!-- 第二个盒子区域 -->
    <div class="w-1/2 h-1/2 bg-blue-300 md:absolute left-1/2 bottom-1/2 -translate-x-1/2 
    translate-y-1/2 shadow-2xl  shadow-blue-600" v-show="Showtwo" >
            <!-- 上方盒子区域 -->
         <div class="  text-yellow-300 text-2xl mt-5  font-black text-center " >~欢迎注册~</div>
        <!-- 注册表单 -->
    <el-form
    ref="reguserRuleFormRef"
    :model="reguserRuleForm"
    :rules="reguserRules"
    label-width="130px" >
    <el-form-item label="请输入用户名：" prop="username" class=" mt-20 mr-10 ">
      <el-input v-model="reguserRuleForm.username" />
    </el-form-item >
    <el-form-item label="请输入密码：" prop="password" class=" mr-10 mt-10">
      <el-input
        v-model="reguserRuleForm.password" type="password"/>
    </el-form-item>
    <!-- 确认密码 -->
    <el-form-item label="确认密码：" prop="againpassword" class=" mr-10 mt-10">
      <el-input
        v-model="reguserRuleForm.againpassword" type="password"/>
    </el-form-item>
    <el-form-item>
      <!-- 按钮区域 -->
      <el-button type="danger"  class=" text-red-600 w-2/6 mr-10 ml-10 mt-6" @click="BackLogin">已有账号?返回登录</el-button>
      <el-button type="danger"  class=" text-red-600 w-2/6  mt-6" @click="ReguserRight(reguserRuleFormRef)">确认注册</el-button>
    </el-form-item>
  </el-form>

    </div>


</div>
</template>

<script setup lang="ts">
import { reactive,ref, unref, watchEffect} from 'vue';
import API from '../view/../apis/axios'
import qs from 'qs'
import { ElMessage} from 'element-plus'
import { useRoute, useRouter } from 'vue-router';
import  {useAuthStore}  from '@/stores/counter'
import { storeToRefs } from 'pinia';
// 引入解析token的包
import jwt_decode from 'jwt-decode'
const store=useAuthStore()
const router = useRouter()
// 确定主页面的显示与否
let Showone=ref(true)
let Showtwo=ref(false)
// 双向绑定的登陆数据
const loginRuleForm=reactive({
    username:'',
    password:''
})
// 登录的校验规则
const loginRules=reactive({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' },
   {min:3,max:10,message:'长度在3到8个字符之间',trigger:'blur'}
],
  password: [{  required: true, message: '请输入密码', trigger: 'blur'  },
  {min:6,max:16,message:'长度在6到16个字符之间',trigger:'blur'}
],
})
// 登录按钮触发的事件
const loginRuleFormRef=ref()
  function Login(formE2:any):Promise<any>{
   return formE2.validate(async(valid:any)=>{
      if(!valid) return ElMessage({type:'error',message:'用户名或者密码格式错误'})
      else{
        const {data:res}=await API.post('/api/login',qs.stringify(loginRuleForm))
    //  console.log(res);
     if(res.status!=0) return ElMessage({type:'error',message:'用户名或者密码错误'})
     else{
          ElMessage({type:'success',message:'登录成功'})
          const token= window.sessionStorage.setItem('token',res.token)    
          // 解析token进行存放
          const decode=jwt_decode(res.token)
          // console.log(decode);
          store.setAuth(!!decode)
          store.setUser(decode)
          router.push({path:'/Index'})
        }
      }
    })

}
// 注册所触发的事件
 function Reguser():any{
    Showone.value=false
    Showtwo.value=true
 }

//  返回登录所触发的页面
 function BackLogin():any{
   Showtwo.value=false
   Showone.value=true
 }
 //  确认注册所触发的页面
 const reguserRuleFormRef = ref()  //需要先接收ref的对象参数
 async function ReguserRight(formEl:any){
  const {data:res}=await API.post('/api/reguser',qs.stringify(reguserRuleForm))
   console.log(res);
   if(res.message=='用户名已存在') return ElMessage({type:'error',message:'用户名已存在'})
   if(res.message=='"againpassword" must be [ref:password]') return ElMessage({type:'error',message:'两次输出的密码不一致'})
   if(res.status==1) return ElMessage({type:'error',message:'用户名或者密码不符合规范'})
   if(res.status==0){
    // 注册成功的提示
      ElMessage({type:'success',message:'注册成功'})
      //返回登录页面 
      formEl?.resetFields()
      Showtwo.value=false
      Showone.value=true
   }
   
 }
// 双向绑定的注册数据
const reguserRuleForm=reactive({
    username:'',
    password:'',
    againpassword:''
})
// 注册的校验规则
const reguserRules=reactive({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' },
  {min:3,max:10,message:'长度在3到8个字符之间',trigger:'blur'}
],
  password: [{  required: true, message: '请输入密码', trigger: 'blur' },
  {min:6,max:16,message:'长度在6到16个字符之间',trigger:'blur'}
],
  againpassword: [{  required: true, message: '请再次输入密码', trigger: 'blur'},
  {min:6,max:16,message:'长度在6到16个字符之间',trigger:'blur'}
],
  
})


</script>

