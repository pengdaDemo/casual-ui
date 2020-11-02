<template>
  <div>
    <el-form ref="form"  :rules="rules" :model="form" label-width="80px" style="width: 400px;margin: auto;">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="再次输入" prop="retryPassword">
        <el-input placeholder="请输入密码" v-model="form.retryPassword" show-password></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="mobile">
        <el-input v-model="form.mobile"></el-input>
      </el-form-item>
      <el-form-item label="邮箱地址" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="出生日期" prop="birthday">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"
                          value-format="yyyy-MM-dd HH:mm:ss" v-model="form.birthday" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/javascript">
  export default {
    name : "register",
    data() {
      var validatePass = (rule, value, callback) => {
        if (value.length < 4) {
          callback(new Error('密码太短'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        form: {
          username: '',
          password: '',
          retryPassword: '',
          mobile: '',
          email: '',
          birthday: '',
          sex: '男',
        },
        rules: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'},{validator: validatePass, trigger: 'blur'}],
          retryPassword: [{required: true, message: '请再次输入密码', trigger: 'blur'},{validator: validatePass2, trigger: 'blur'}],
          mobile: [{required: true, message: '请输入手机号', trigger: 'blur'}],
          email: [{required: true, message: '请输入邮箱', trigger: 'blur'}],
          birthday: [{required: true, message: '请输入出生日期', trigger: 'blur'}]
        }
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          this.$axios.post(`/api/userRegister`, this.qs.stringify(this.form)).then(body => {
            if (body.data.code === 200) {
              this.$cookies.set("userId", body.data.data.user_id, "1h")
              this.$cookies.set("username", body.data.data.username, "1h")
              this.$router.push({path: '/stockMenu'})
              this.common.success(body.data.msg);
            } else {
              this.common.error(body.data.msg);
            }
            this.$refs[formName].resetFields();
          });

        });
      }
    }
  }

</script>
