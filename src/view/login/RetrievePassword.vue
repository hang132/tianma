<template>
  <div>
    <mt-header title="找回密码" class="heard">
      <router-link to slot="left">
        <mt-button icon="mintui mintui-xiaoyuhao goback" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <div class="findForm">
      <input type="text" class="staff-number" placeholder="请输入员工号" />
      <input type="text" class="staff-number" placeholder="请输入员工号" />
    </div>
    <button type="button" class="mui-btn mui-btn-primary mui-btn-block next">下一步</button>
  </div>
</template>
<script>
export default {
  name: "RetrievePassword"
};
</script>
<style lang="scss" scoped>
.heard {
  height: 64px;
  font-size: 16px;
  background-color: #3c81bc;
  /deep/ .goback {
    margin: 0;
    font-size: 20px;
  }
}
.findForm {
  background: #eee;
  .staff-number {
    height: 90px;
    margin-top: 20px;
    font-size: 30px;
    border: none;
    outline: none;
    border-radius: 0;
    ::-webkit-input-placeholder {
      font-size: 30px;
      color: #eee;
    }
  }
}
.next {
  width: 80%;
  margin: 30px auto 0;
  background-color: #3c81bc;
}
</style>

