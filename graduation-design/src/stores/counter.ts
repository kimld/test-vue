import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => { //管理俩个状态 一个是是否登录成功即token是否存在，二是解析的token里面所包含的数据
        return { isAuthenticated: false, user: {} }
    },
    getters:{
      getAuthenticated:(state)=>state.isAuthenticated,
      getUser:(state)=>state.user
    },
    actions:{
      setAuth(isAuth:boolean){
        if(isAuth){
          this.isAuthenticated=isAuth;
        }else{
          this.isAuthenticated=false
        }
      },
      setUser(user:any){{
        if(user){
          this.user=user;
        }else{
          this.user={};
        }
      }}
    }
})
