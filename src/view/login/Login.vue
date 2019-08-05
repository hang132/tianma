<template>
  <div class="login">
    <div class="login-logo">天马Logo</div>
    <form class="mui-input-group">
      <div class="mui-input-row">
        <label class="mintui mintui-yonghu hint"></label>
        <input type="text" class="mui-input-password" placeholder="请输入账号" />
      </div>
      <div class="mui-input-row">
        <label class="mintui mintui-suo hint"></label>
        <input type="password" class="mui-input-password" placeholder="请输入密码" />
        <router-link to="/login/retrievepassword" class="forget-password">忘记密码?</router-link>
      </div>
      <button
        type="button"
        class="mui-btn mui-btn-primary mui-btn-block login-button"
        @click="login"
      >登入</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  methods: {
    login() {
      this.$router.push({ path: "home" });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  margin: 20px;
  .login-logo {
    height: 70px;
    line-height: 70px;
    margin-top: 120px;
    margin-bottom: 80px;
    font-size: 60px;
    text-align: center;
  }
  .mui-input-group {
    &:before,
    &:after {
      height: 0;
    }
    .mui-input-row {
      margin-bottom: 40px;
      .hint {
        width: 20%;
        height: 40px;
        line-height: 40px;
        padding-top: 0;
        padding-bottom: 0;
        font-size: 20px;
        color: #999;
      }
      input {
        width: 80%;
        &:-webkit-input-placeholder {
          color: #999;
        }
      }
      .forget-password {
        position: absolute;
        right: 10px;
        bottom: 5px;
        color: #999;
        font-size: 12px;
      }
    }
    .login-button {
      background-color: #3c81bc;
    }
  }
}
</style>


