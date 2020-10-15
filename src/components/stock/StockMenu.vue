<template>
  <div id="vue">
    <el-col :span="12">
    <span style="width: 100px;margin-right: 200px">可买入股票</span>
    <el-table
      :data="stockList"
      stripe
      style="width: 80%">
      <el-table-column
        prop="date"
        label="股票代码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="当前价格"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="建议入手价">
      </el-table-column>
    </el-table>
    </el-col>
    <el-col :span="12">
      <span style="width: 100px;margin-right: 200px">可卖入股票</span>
    <el-table
      :data="stockList"
      stripe
      style="width: 80%">
      <el-table-column
        prop="date"
        label="股票代码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="当前价格"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="建议入手价">
      </el-table-column>
    </el-table>
    </el-col>
    <el-button @click="test()">测试</el-button>
  </div>
</template>

<script type="text/javascript">
export default { //这里需要将模块引出，可在其他地方使用
  name: "stockMenu",
  data (){ //注意：data即使不需要传数据，也必须return,否则会报错
    return {
      stockList: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
      test() {
        console.log("1111111111111111111111111");
        this.$axios.get('/api/testApi').then(res=>{
          console.log(res)
        })
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
