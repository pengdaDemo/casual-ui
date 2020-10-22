<template>
<div id="myMenu" style="margin: 0;padding: 0;height: 200px;width: 100%">
  <el-menu background-color="#3DBF28"
           text-color="#fff"
           active-text-color="#ffd04b"
           :defaultActive="activeIndex2"
           mode="horizontal"
           style="height:70px;margin: auto;width: 600px;margin-bottom: 200px"
           :router="true">
    <el-menu-item index="index" :route="{path:'/index'}">首页</el-menu-item>
    <el-menu-item index="stockMenu" :route="{path:'/stockMenu'}">股票中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-row>
      <el-menu-item index="sideMenu" :route="{path:'/sideMenu/stockList'}">我的股票</el-menu-item>
      </el-row>
      <el-row>
      <el-menu-item index="2-2">选项2</el-menu-item>
      </el-row>
      <el-row>
      <el-menu-item index="2-3">选项3</el-menu-item>
      </el-row>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4" :route="{path:'/login'}"v-if="!this.$cookies.get('username')">登录</el-menu-item>
    <el-menu-item index="4" :route="true" @click="loginOut()" v-if="this.$cookies.get('username')">注销</el-menu-item>
    <el-menu-item index="register" :route="{path:'/register'}" v-if="!this.$cookies.get('username')">注册</el-menu-item>
  </el-menu>
  <div style="position: absolute;margin:0px;padding:0px;width:100%;">
    <router-view/>
  </div>
</div>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: 'stockMenu'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      loginOut(){
        this.$cookies.remove('username')
        this.$cookies.remove('userId')
        location.reload();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#myMenu {
  background-image: url("../assets/shouye.jpg");
  background-size:100% 100%;
}
</style>
