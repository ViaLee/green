<template>
  <div class="hello">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'breadcrumb',
    data() {
      return {
      }
    },
    props:{},
    computed: {
      menuData: function () {
        return this.$router.options.routes
      }
    },
    methods: {
      initBread(){
        let menu = this.menuData
        let currentPath = this.$route.path

      }
    },
    mounted() {
      //根据url生成面包屑
      // 遍历菜单数据，找到当前路由
      this.initBread()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .userInfo {
    margin-left: 10px;
  }

  .hello {
  }

  .title{
    width: 100px;
    display: inline-block;
  }
</style>
