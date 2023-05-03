import Vue from 'vue'
import VueRouter from 'vue-router'
import Main_sign_in from "@/views/Main_Sign_in.vue"

Vue.use(VueRouter)

const routes = [
  {
    Path:"/",
    component:Main_sign_in
  },
  {
    
  }
 
]

const router = new VueRouter({
  routes
})

export default router
