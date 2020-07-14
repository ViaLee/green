<template>
  <div class="hello">
    <div class="top-box flex-left">
      <img class="portrait" src="../assets/logo.png" style="width:30px;height:30px;"/>
      <div v-if="!isCollapse" class="userInfo">
        <div>{{userName}}</div>
        <div>{{account}}</div>
      </div>
    </div>
    <div class="menu-box">
      <el-menu router
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               background-color="#545c64"
               text-color="#fff"
               :collapse="isCollapse">
        <div v-for="item in menuData">
          <!--          多个 children的-->
          <el-submenu v-if="item.children&&item.children.length>1&&!item.hidden">
            <template slot="title">
              <i :class="item.meta.icon"></i>
              <span class="title" slot="title">{{item.meta.title}}</span>
            </template>
            <el-menu-item v-for="child in item.children"
                          :index="child.path"
                          :route="child"
                          v-if="!child.hidden">
              {{child.meta.title}}
            </el-menu-item>
          </el-submenu>

          <!--          无children的-->
          <el-menu-item v-if="!item.children&&!item.hidden" :route="item" :index="item.path">
            <i :class="item.meta.icon"></i>
            <span class="title" slot="title">{{item.meta.title}}</span>
          </el-menu-item>

          <!--          一个children的-->
          <el-menu-item v-if="item.children&&item.children.length===1&&!item.hidden" :route="item" :index="item.children[0].path">
            <i :class="item.children[0].meta.icon"></i>
            <span class="title" slot="title">{{item.children[0].meta.title}}</span>
          </el-menu-item>

        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'menu',
    data() {
      return {
        userName: this.$store.state.name,
        account: '登录后获取用户账号',
        profile: ''
      }
    },
    props:{
      isCollapse:{
        type:Boolean,
        value:false
      }
    },
    computed: {
      menuData: function () {
        return this.$router.options.routes
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      initMenu() {
        let router = this.menuData
        console.log('router', router)
      }
    },
    mounted() {
      //根据路由生成菜单数据
      this.initMenu()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .userInfo {
    margin-left: 10px;
  }

  .hello {
    background: #545c64;
    color: aliceblue;
    height: 100%;
  }

  .title{
    width: 100px;
    display: inline-block;
  }

  .top-box{
    padding-right:10px;
    font-size: 14px;
  }
  .el-menu{
    border-right: 0;
  }
  .portrait{
    margin-left: 5px;
  }
</style>
