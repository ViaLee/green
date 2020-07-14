<template>
  <div class="flex-center">
    <Menu :isCollapse="isCollapse"></Menu>
    <main>
      <header class="header flex-left">
        <el-radio-group v-model="collapse" class="switch" size="mini" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <Breadcrumb></Breadcrumb>
      </header>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </main>
  </div>
</template>

<script>
  import Menu from '@/components/menu';
  import Breadcrumb from '@/components/breadcrumb';

  export default {
    name: "Layout",
    components: {Menu, Breadcrumb},
    watch: {
      collapse: {
        handler: function (val, oldVal) {
          // 改变菜单折叠状态
          console.log('val', val)
          this.isCollapse = val
        }
      }
    },
    data() {
      return {
        isCollapse: false,
        collapse: false
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .flex-center {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .header{

  }
  .switch{
    margin: 12px 10px;
  }
</style>
