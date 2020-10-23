<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" style="width: 300px;margin: auto">
      <el-form-item label="股票代码">
        <el-input v-model="form.stock_code"></el-input>
      </el-form-item>
      <el-form-item label="股票名称">
        <el-input v-model="form.stock_Name"></el-input>
      </el-form-item>
      <el-form-item label="入手价">
        <el-input v-model="form.buy_point"></el-input>
      </el-form-item>
      <el-form-item label="出手价">
        <el-input v-model="form.sell_point"></el-input>
      </el-form-item>
      <el-form-item style="margin-top: 30px">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "stockAdd",
  data() {
    return {
      form: {
        stock_code: '',
        stock_Name: '',
        buy_point: '',
        sell_point: '',
        editor: this.$cookies.get("username"),
        userId : this.$cookies.get("userId")
      }
    }
  },
  methods : {
    onSubmit() {
      if(!this.form.stock_code||
        !this.form.stock_Name||
        !this.form.buy_point||
        !this.form.editor||
        !this.form.userId||
        !this.form.sell_point) {
        this.$message.error("请填写完整信息");
      }
      this.$axios.post(`/api/stock/add`, this.form,{headers:
                       {
                         'Content-Type': 'application/json'
                       }}).then(body =>{
        if(body.data.code === 200) {
        } else {
          this.$message.error(body.data.msg);
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
