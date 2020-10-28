<template>
    <div>
      <el-form :inline="true" :model="conditional" align="auto" class="demo-form-inline">
        <el-form-item label="股票代码:">
          <el-input style="width: 250px;" v-model="conditional.stockCode" clearable placeholder="输入股票名或id:"></el-input>
          <el-form-item>
            <el-button type="primary" @click='onSubmit' icon="el-icon-search" style="margin-left: 10px">查询</el-button>
          </el-form-item>
        </el-form-item>
      </el-form>
      <el-table
        :data="taskList"
        stripe
        style="width: 50%;margin: auto">
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
        <el-table-column
          label="操作">
          <template  slot-scope="scope">
            <el-button size="mini" @click="stockEdit(scope.row)" type="primary" icon="el-icon-edit" circle></el-button>
            <el-button size="mini" @click="deleteStock(scope.row)" type="danger" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination :value="this.pagination" @current-change="handleCurrentChange"></pagination>
      <el-dialog :visible.sync="dialogVisible" width="40%" top="2vh">
        <el-form ref="form" :model="edit" label-width="80px" style="width: 300px;margin: auto">
          <el-form-item label="股票:">
            <el-input v-model="edit.stockCode" disabled></el-input>
          </el-form-item>
          <el-form-item label="买入价">
            <el-input v-model="edit.editBuy"></el-input>
          </el-form-item>
          <el-form-item label="股票名称">
            <el-input v-model="edit.editSell"></el-input>
          </el-form-item>
          <el-form-item style="margin-top: 30px">
            <el-button type="primary" @click="editSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
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
            taskList:[],
            dialogVisible:false,
            edit : {
              editBuy : '',
              editSell : '',
              userId : this.$cookies.get("userId"),
              stockCode: ''
            },
            pagination: {
              pageIndex : 1,
              total: 100,
              pageSize:10
            }
          }
      },
      methods : {
        onSubmit() {
          this.$axios.get(`/api/stock/findAllStockList?stock=${this.conditional.stockCode}&pageIndex=${this.pagination.pageIndex}`).then(res=>{
            this.taskList = res.data.data;
            this.pagination.total = res.data.total;
          })
        },
        stockEdit(row) {
          this.edit.editBuy = row.buy_point;
          this.edit.editSell = row.sell_point;
          this.edit.stockCode = row.stock_code;
          this.dialogVisible = true;
        },
        editSubmit() {
          this.$axios.post(`/api/stock/editStock`, this.qs.stringify(this.edit)).then(res=>{
            if(res.data.code === 200) {
              this.common.success("修改成功!");
              this.dialogVisible = false;
            } else {
              this.common.error(res.data.msg);
            }
            this.onSubmit();
          })
        },
        deleteStock(row) {
          this.common.info("暂不支持该操作!");
        },
        handleCurrentChange() {
          this.onSubmit();
        }
      },
      mounted() {
          this.onSubmit();
      }
    }
</script>

<style scoped>

</style>
