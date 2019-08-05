<template>
  <div>
    <mt-header title="我的考试" class="heard">
      <router-link to slot="left">
        <mt-button icon="mintui mintui-xiaoyuhao goback" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">待考试</mt-tab-item>
      <mt-tab-item id="2">已考试</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="search">
          <div class="searc-on">
            <span class="mintui mintui-search"></span>
            <input type="search" placeholder="搜索" />
          </div>
        </div>
        <filter-box></filter-box>
        <ul class="examination-list">
          <li>
            <router-link to="/home/examination/examinationdetails">
              <div class="list-content">
                <span>培训课程001</span>
                <span>考试时间: 2019-07-29 10:00</span>
                <span>
                  考试倒计时:
                  <countDown></countDown>
                </span>
              </div>
            </router-link>
            <div class="exam-start">
              <button type="button" class="mui-btn" @click="startExam">开始考试</button>
            </div>
          </li>
          <li>
            <div class="list-content">
              <span>培训课程001</span>
              <span>考试时间: 2019-07-29 10:00</span>
              <span>
                考试倒计时:
                <countDown></countDown>
              </span>
            </div>
            <div class="exam-start">
              <button type="button" class="mui-btn">开始考试</button>
            </div>
          </li>
          <li>
            <div class="list-content">
              <span>培训课程001</span>
              <span>考试时间: 2019-07-29 10:00</span>
              <span>
                考试倒计时:
                <countDown></countDown>
              </span>
            </div>
            <div class="exam-start">
              <button type="button" class="mui-btn">开始考试</button>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">哈哈哈哈</mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import filter from "../../components/Filter";
import countDown from "../../components/CountDown";
export default {
  name: "Examination",
  data() {
    return {
      selected: "1"
    };
  },
  components: {
    "filter-box": filter,
    countDown
  },
  methods: {
    startExam() {
      this.$router.push("/home/examination/haveexam");
    }
  }
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
.examination-list {
  padding: 10px;
  li {
    margin-bottom: 15px;
    padding: 10px;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
    .list-content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border-bottom: 1px solid #eee;
      span {
        font-size: 16px;
        margin-bottom: 5px;
      }
    }
    .exam-start {
      margin-top: 10px;
      overflow: hidden;
      button {
        float: right;
        background-color: #3c81bc;
      }
    }
  }
}
</style>


