<template>
  <div id="vue">111111111111! {{ message }}
    <el-input/>
  </div>
</template>

<script type="text/javascript">
export default { //这里需要将模块引出，可在其他地方使用
  name: "StockMenu",
  data (){ //注意：data即使不需要传数据，也必须return,否则会报错
    return {
      message: "啦啦啦啦啦"
    }
  }
}
</script>

<style type="text/css">
#vue{
  color: green;
  font-size: 28px;
}
</style>
