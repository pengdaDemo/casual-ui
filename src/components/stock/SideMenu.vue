<template>
  <div id="main">
    <el-col :span="3">
      <el-menu
        :default-active="activeIndex"
        background-color="#425CB9"
        text-color="#fff"
        :router="true"
        style="height: 500px"
        >
        <el-menu-item index="stockList" :route="{path:'/sideMenu/stockList'}">
          <i class="el-icon-s-grid"></i>
          <span slot="title">所有股票</span>
        </el-menu-item>
        <el-menu-item index="myStock" :route="{path:'/sideMenu/myStock'}">
          <i class="el-icon-menu"></i>
          <span slot="title">我的关注</span>
        </el-menu-item>
        <el-menu-item index="stockAdd" :route="{path:'/sideMenu/stockAdd'}">
          <i class="el-icon-plus"></i>
          <span slot="title">添加股票</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="21">
      <div style="margin-top: 20px">
        <router-view></router-view>
      </div>
    </el-col>
  </div>
</template>

<script>
    export default {
        name: "sideMenu",
        data() {
          return {
            activeIndex: 'stockList'
          }
        },
        methods : {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style scoped>
a {
  color: #425cb9;
}
</style>
