<template>
  <div id="vue">
    <el-col :span="2">
      <el-tooltip class="item" effect="dark" content="仅查看已关注" placement="top">
      <el-switch
        v-model="follow"
        active-color="#13ce66"
        @change="findStock"
        inactive-color="#7C7E7D">
      </el-switch>
      </el-tooltip>
    </el-col>
    <el-col :span="11">
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
        width="120">
      </el-table-column>
      <el-table-column
        prop="stock_code"
        label="股票代码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="now_point"
        label="当前价格"
        width="110">
      </el-table-column>
      <el-table-column
        prop="buy_point"
        label="入手价"
        width="110">
      </el-table-column>
      <el-table-column
        label="行情">
        <template slot-scope="scope">
        <stock-curve :value="scope.row"></stock-curve>
        </template>
      </el-table-column>
    </el-table>
      <pagination :value="this.value" @current-change="handleCurrentChange"></pagination>
    </el-col>
    <el-col :span="11">
      <span style="width: 100px;margin-right: 200px">可卖出股票</span>
    <el-table
      :data="sellList"
      stripe
      style="width: 80%">
      <el-table-column
        prop="stock_Name"
        label="股票名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="stock_code"
        label="股票代码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="now_point"
        label="当前价格"
        width="110">
      </el-table-column>
      <el-table-column
        prop="sell_point"
        label="卖出价"
        width="110">
      </el-table-column>
      <el-table-column
        label="行情">
        <template slot-scope="scope">
        <stock-curve :value="scope.row"></stock-curve>
        </template>
      </el-table-column>
    </el-table>
    </el-col>
  </div>
</template>

<script type="text/javascript">
import StockCurve from "../common/stockCurve";
export default { //这里需要将模块引出，可在其他地方使用
  name: "stockMenu",
  components: {StockCurve},
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
      }],
      follow : false,
      value : {
        pageIndex: 1,
        total: 100
      }

    }
  },
  methods: {
      findStock() {
        let uri = `findStockList?riseCount=${this.level}&pageIndex=${this.value.pageIndex}`;
        if(this.follow) {
          uri = `findStockList?riseCount=${this.level}&pageIndex=${this.value.pageIndex}` + "&userId=" + this.$cookies.get("userId");
        }
        this.$axios.get(uri).then(res=>{
          this.buyList = res.data['buyList'];
          this.sellList = res.data['sellList'];
          this.value.total = res.data['total'];
        })
    },
    handleCurrentChange() {
        this.findStock();
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
