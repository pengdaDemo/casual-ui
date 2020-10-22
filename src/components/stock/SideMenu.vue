<template>
  <div>
    <el-col :span="3">
      <el-menu
        :default-active="activeIndex"
        :router="true"
        >
        <el-menu-item index="stockList" :route="{path:'/sideMenu/stockList'}">
          <i class="el-icon-s-grid"></i>
          <span slot="title">所有股票</span>
        </el-menu-item>
        <el-menu-item index="myStock" :route="{path:'/sideMenu/myStock'}">
          <i class="el-icon-menu"></i>
          <span slot="title">我的股票</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="21">
      <div>
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

</style>
