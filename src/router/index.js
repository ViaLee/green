import Vue from 'vue'
import Router from 'vue-router'
import articleList from '@/view/articleList'
import User from '@/view/user'
import Layout from '@/layout'

Vue.use(Router)

const routerList = [
  {
    path: "/login",
    hidden: true,
    component: () => import("@/view/login/index"),
    meta:{title: "登录",icon:'el-icon-s-data'},
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: {title: "概述",icon:'el-icon-s-data'},
        component: () => import("@/view/dashboard/index")
      }
    ]
  },
  {
    path: "/template",
    name:'template',
    component: Layout,
    meta: { title: "装修管理", icon: "el-icon-s-open" },
    children: [
      {
        path: "list",
        name: "list",
        meta: {title: "装修管理",icon:'el-icon-s-open'},
        component: () => import("@/view/template/list")
      },
      {
        path: "add",
        name: "add",
        meta: {title: "店铺装修",icon:'el-icon-s-open'},
        component: () => import("@/view/template/add")
      }
    ]
  }
]

export default new Router({
  routes: routerList
})
