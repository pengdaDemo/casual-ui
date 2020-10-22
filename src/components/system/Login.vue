<template>
  <div>
    <el-tabs  type="border-card" style="width: 500px;margin: auto">
      <el-tab-pane label="用户密码登录">
        <el-form ref="form"  :rules="rules" :model="form" label-width="80px" style="width: 400px;margin: auto">
          <el-form-item label="用户名" prop="username">
            <el-input value="彭达" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input placeholder="请输入密码" v-model="form.password" show-password @keyup.enter.native="onSubmit"></el-input>
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
            <el-input style="width: 80px;margin-left:90px" v-model="phone.verification" @keyup.enter.native="phoneSubmit"></el-input>
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
        username: '彭达',
        password: '1234'
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
      this.$axios.post(`/userLogin`, this.qs.stringify(this.form)).then(body =>{
        if(body.data.code === 200) {
          this.$cookies.set("userId",body.data.data.user_id,"1h")
          this.$cookies.set("username",body.data.data.username,"1h")
          this.$router.push({path:'/stockMenu'})
        } else {
          this.$message.error(body.data.msg);
        }
      });

    },
    phoneSubmit() {
      this.$axios.post(`/phoneLogin`, this.qs.stringify(this.phone)).then(body =>{
        if(body.data.code === 200) {
          this.$cookies.set("userId",body.data.data.user_id,"1h")
          this.$cookies.set("username",body.data.data.username,"1h")
          this.$router.push({path:'/stockMenu'})
        } else {
          this.$message.error(body.data.msg);
        }
      });
      this.verificationStatus = '发送验证码';
    },
    seedVerificy() {
      if(this.verificationStatus === '发送验证码') {
        console.log("发送验证码")
        this.$axios.get(`/` + this.phone.code).then(body=>{
          if(body.data.code !== 200) {
            this.$message.info(body.data.msg);
          } else {
            this.verificationStatus = '已发送';
            let count = 60;
            let timer = setInterval(() => {
              count--;
              if(count === 0) {
                this.verificationStatus = '发送验证码';
                clearInterval(timer);
              }
              this.verificationStatus = '已发送' + count;
            }, 1000);
          }
        })
      }
    }
  }
}

</script>
