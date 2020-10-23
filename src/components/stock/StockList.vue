<template>
    <div>
      <el-form :inline="true" :model="conditional" align="auto" class="demo-form-inline">
        <el-form-item label="股票代码:">
          <el-input style="width: 250px;" v-model="conditional.stockCode" placeholder="输入采集源 id:"></el-input>
          <el-form-item>
            <el-button type="primary" @click='onSubmit' icon="el-icon-search" style="margin-left: 10px">查询</el-button>
          </el-form-item>
        </el-form-item>
      </el-form>
      <el-table
        :data="taskList"
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
          width="120">
        </el-table-column>
        <el-table-column
          prop="buy_point"
          label="入手价"
          width="120">
        </el-table-column>
        <el-table-column
          label="行情">
          <template slot-scope="scope">
            <stock-curve :value="scope.row"></stock-curve>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name: "stockList",
      data() {
          return {
            conditional : {
              stockCode : ''
            },
            taskList:[]
          }
      },
      methods : {
        onSubmit() {

        }
      }
    }
</script>

<style scoped>

</style>
