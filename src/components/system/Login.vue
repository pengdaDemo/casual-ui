<template>
  <div>
    <el-tabs  type="border-card" style="width: 500px;margin: auto">
      <el-tab-pane label="用户密码登录">
        <el-form ref="form"  :rules="rules" :model="form" label-width="80px" style="width: 400px;margin: auto">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-button type="primary" style="margin: auto" @click="onSubmit">登录</el-button>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="手机号码登录">
        <el-form ref="form" :model="phone" label-width="80px" style="width: 400px;margin: auto">
          <el-form-item label="手机号" prop="username">
            <el-input v-model="phone.code"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="password">
            <el-col :span="16">
            <el-input style="width: 80px;margin-left:90px" v-model="phone.verification"></el-input>
            </el-col>
            <el-col :span="8">
            <div style="width: 120px">
              <el-button @click="seedVerificy" style="width: 90px" type="primary" size="mini">{{this.verificationStatus}}</el-button>
            </div>
            </el-col>
          </el-form-item>
          <el-button type="primary" style="margin: auto" @click="phoneSubmit">登录</el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script type="text/javascript">
export default {
  name : "login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value.length < 4) {
        callback(new Error('密码太短'));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: '',
        password: ''
      },
      phone: {
        code:'',
        verification:''
      },
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'},{validator: validatePass, trigger: 'blur'}],
      },
      verificationStatus:'发送验证码'
    }
  },
  methods: {
    onSubmit() {
      this.$cookies.set("userId","1","1h")
      this.$cookies.set("username","kkkkjjjj","1h")
      this.$router.push({path:'/stockMenu'})
      // this.$axios.post(`/login`, this.form).then(body =>{
      //
      // });

    },
    phoneSubmit() {
      console.log("手机登录")
      this.verificationStatus = '发送验证码';
    },
    seedVerificy() {
      if(this.verificationStatus !== '已发送') {
        console.log("发送验证码")
        this.verificationStatus = '已发送';
        console.log(this.verificationStatus)
      }
    }
  }
}

</script>
