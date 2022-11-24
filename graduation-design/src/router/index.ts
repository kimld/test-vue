import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: () => import("../view/Login.vue") },
    // index为背景部分
    {
      path: "/index",
      component: () => import("@/view/Index.vue"),
      children: [
        // 首页的mask
        { path: "/index", component: () => import("@/view/home/Mask.vue") },
        {path: '/index/personCenter',component:()=>import('@/view/personal/index.vue')}
      ],
    },
  ],
});
router.beforeEach((to,from,next)=>{
   if(to.path==='/login') return next()
   const tokenStr = window.sessionStorage.getItem('token')
   if(!tokenStr) return next('/login')
   next()
})
export default router;
