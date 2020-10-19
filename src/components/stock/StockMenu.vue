<template>
  <div id="vue">
    <el-col :span="12">
      <el-col>
    <span style="width: 100px;margin-left: 200px">可买入股票</span>
      <template>
        <el-select v-model="level" placeholder="请选择" style="width: 120px;margin-left: 100px" @change="findStock()">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>
      </el-col>
    <el-table
      :data="buyList"
      stripe
      style="width: 80%;margin-left: 80px">
      <el-table-column
        prop="stock_Name"
        label="股票名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="stock_code"
        label="股票代码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="now_point"
        label="当前价格"
        width="160">
      </el-table-column>
      <el-table-column
        prop="buy_point"
        label="入手价">
      </el-table-column>
    </el-table>
    </el-col>
    <el-col :span="12">
      <span style="width: 100px;margin-right: 200px">可卖出股票</span>
    <el-table
      :data="sellList"
      stripe
      style="width: 80%">
      <el-table-column
        prop="stock_Name"
        label="股票名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="stock_code"
        label="股票代码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="now_point"
        label="当前价格"
        width="160">
      </el-table-column>
      <el-table-column
        prop="sell_point"
        label="卖出价">
      </el-table-column>
    </el-table>
    </el-col>
  </div>
</template>

<script type="text/javascript">
export default { //这里需要将模块引出，可在其他地方使用
  name: "stockMenu",
  data (){ //注意：data即使不需要传数据，也必须return,否则会报错
    return {
      buyList: [],
      sellList: [],
      level: '2',
      options: [{
        value: '3',
        label: '短期持有'
      }, {
        value: '2',
        label: '中期持有'
      }, {
        value: '1',
        label: '长期持有'
      }]

    }
  },
  methods: {
      findStock() {
        this.$axios.get('/api/stock/findStockList?riseCount=' + this.level).then(res=>{
          console.log(res)
          this.buyList = res.data['buyList'];
          this.sellList = res.data['sellList'];
        })
    }
  },
  mounted() {
    this.findStock();
  }
}
</script>

<style type="text/css">
#vue{
  color: green;
  font-size: 28px;
}
</style>
