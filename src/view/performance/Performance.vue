<template>
  <div class="box">
    <mt-header title="我的成绩" class="heard">
      <router-link to slot="left">
        <mt-button icon="mintui mintui-xiaoyuhao goback" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>

    <div class="search">
      <div class="searc-on">
        <span class="mintui mintui-search"></span>
        <input type="search" placeholder="搜索" />
      </div>
    </div>
    <ul class="grade-list">
      <li>
        <p>
          2019年车载模组厂培训及CTP检验科实操考试
          <br />第一季度第一场模拟试卷
          <br />
          <span class="time">考试时间：2019-02-03 09：30-11：00</span>
        </p>
        <div class="grade">92分</div>
      </li>
      <li>
        <p>
          2019年车载模组厂培训及CTP检验科实操考试
          <br />第一季度第一场模拟试卷
          <br />
          <span class="time">考试时间：2019-02-03 09：30-11：00</span>
        </p>
        <div class="grade">92分</div>
      </li>
      <li>
        <p>
          2019年车载模组厂培训及CTP检验科实操考试
          <br />第一季度第一场模拟试卷
          <br />
          <span class="time">考试时间：2019-02-03 09：30-11：00</span>
        </p>
        <div class="grade">92分</div>
      </li>
      <li>
        <p>
          2019年车载模组厂培训及CTP检验科实操考试
          <br />第一季度第一场模拟试卷
          <br />
          <span class="time">考试时间：2019-02-03 09：30-11：00</span>
        </p>
        <div class="grade">92分</div>
      </li>
      <li>
        <p>
          2019年车载模组厂培训及CTP检验科实操考试
          <br />第一季度第一场模拟试卷
          <br />
          <span class="time">考试时间：2019-02-03 09：30-11：00</span>
        </p>
        <div class="grade">92分</div>
      </li>
      <li>
        <p>
          2019年车载模组厂培训及CTP检验科实操考试
          <br />第一季度第一场模拟试卷
          <br />
          <span class="time">考试时间：2019-02-03 09：30-11：00</span>
        </p>
        <div class="grade">92分</div>
      </li>
      <li>
        <p>
          2019年车载模组厂培训及CTP检验科实操考试
          <br />第一季度第一场模拟试卷
          <br />
          <span class="time">考试时间：2019-02-03 09：30-11：00</span>
        </p>
        <div class="grade">92分</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Performance"
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
.search {
  height: 50px;
  background-color: #eee;
  overflow: hidden;
  .searc-on {
    overflow: hidden;
    margin: 9px auto;
    height: 35px;
    width: 90%;
    border-radius: 30px;
    background-color: #fff;
    input[type="search"] {
      margin-bottom: 0px;
      width: 80%;
      background-color: #fff;
      ::-webkit-input-placeholder {
        color: red;
        text-align: left;
      }
    }
    span {
      display: inline-block;
      font-size: 22px;
      color: #aaa;
    }
  }
}
.grade-list {
  position: absolute;
  top: 114px;
  // bottom: 0px;
  left: 0;
  right: 0;
  padding: 10px;
  // height: 100%;
  width: 100%;
  background-color: #eee;
  li {
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    background-color: #fff;
    height: 110px;
    overflow: hidden;
    p {
      display: flex;
      flex: 7;
      font-size: 12px;
      flex-direction: column;
      justify-content: space-between;
      color: #000;
    }
    .grade {
      flex: 3;
      font-size: 20px;
      font-weight: 700;
      line-height: 90px;
      text-align: center;
      color: #999;
    }
  }
}
</style>


