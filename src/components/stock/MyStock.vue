<template>
  <div>
    <el-form :inline="true" :model="conditional" align="auto" class="demo-form-inline">
      <el-form-item label="股票代码:">
        <el-input style="width: 250px;" v-model="conditional.stockCode" placeholder="输入采集源 id:"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/javascript">
  export default {
    name : '',
    data() {
      return {
        conditional : {
          stockCode : ''
        }
      }
    }
  }
</script>
