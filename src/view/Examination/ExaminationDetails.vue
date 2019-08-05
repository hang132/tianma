<template>
  <div>
    <mt-header title class="heard">
      <router-link to slot="left">
        <mt-button icon="mintui mintui-xiaoyuhao goback" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <div class="exam-info">
      <h3>
        <i class="mintui mintui-kaoshi"></i> 电测考试0729-A场考试
      </h3>
      <p>
        60min
        <span>50题</span>
      </p>
    </div>
    <div class="exam-time">
      <p>考试时间：2019-07-29 10:00</p>
      <countDown></countDown>
    </div>
    <input type="button" value="开始考试" class="exam-start" />
  </div>
</template>
<script>
import countDown from "../../components/CountDown";
export default {
  name: "ExaminationDetails",
  components: {
    countDown
  }
};
</script>
<style lang="scss" scoped>
// @import "../../assets/icon/iconfont.css";
.heard {
  height: 64px;
  font-size: 16px;
  background-color: #3c81bc;
  /deep/ .goback {
    margin: 0;
    font-size: 20px;
  }
}
.exam-info {
  padding: 60px;
  h3 {
    text-align: center;
  }
  p {
    text-align: center;
    span {
      padding-left: 10px;
    }
  }
}
.exam-time {
  text-align: center;
  p {
    margin-bottom: 20px;
  }
}
.exam-start {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #3c81bc;
  font-size: 28px;
  text-align: center;
  color: #fff;
}
</style>
