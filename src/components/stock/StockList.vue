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
            stock:[]
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
