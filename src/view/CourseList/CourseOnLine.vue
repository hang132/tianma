<template>
  <div>
    <mt-header title="课程内容" class="heard">
      <router-link to slot="left">
        <mt-button icon="mintui mintui-xiaoyuhao goback" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <div class="mui-card">
      <!--页眉，放置标题-->
      <div class="mui-card-header mui-card-media" style="height:40vw"></div>
      <!--内容区-->
      <div class="mui-card-content">
        <div class="courise-info">
          课程基本信息
          <br />课程名称：
          <span>新人入职培训</span>
          <br />培训老师：
          <span>张三老师</span>
        </div>
        <div class="courise-content">
          课程描述：
          <br />
          <p>课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述</p>
        </div>
        <h3>素材列表</h3>
        <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-media">
            <router-link to="/home/courselist/CourseOnLine" class="course-list">
              <img class src="../../assets/tu.png" />
              <div class="course-content">
                <h5>2019年车载模组厂及cpt培训</h5>
                <p>考试第一季度第一场模拟试卷</p>
                <span>教材类型: PPT &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp大小: 3M</span>
              </div>
              <span class="mintui mintui-jiantou1"></span>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media">
            <router-link to="/home/courselist/CourseOnLine" class="course-list">
              <img class src="../../assets/tu.png" />
              <div class="course-content">
                <h5>2019年车载模组厂及cpt培训</h5>
                <p>考试第一季度第一场模拟试卷</p>
                <span>教材类型: PPT &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp大小: 3M</span>
              </div>
              <span class="mintui mintui-jiantou1"></span>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media">
            <router-link to="/home/courselist/CourseOnLine" class="course-list">
              <img class src="../../assets/tu.png" />
              <div class="course-content">
                <h5>2019年车载模组厂及cpt培训</h5>
                <p>考试第一季度第一场模拟试卷</p>
                <span>教材类型: PPT &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp大小: 3M</span>
              </div>
              <span class="mintui mintui-jiantou1"></span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!--页脚，放置补充信息或支持的操作-->
    <div class="start-study">
      <button type="button" class="mui-btn mui-btn-primary">点击开始学习</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CourseOnLine"
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
.mui-card {
  margin: 0;
  .mui-card-media {
    background: url("../../assets/tu.png") no-repeat center;
    background-size: cover;
  }
  .mui-card-content {
    .courise-info {
      padding: 10px;
      font-size: 24px;
      border-bottom: 1px solid #eee;
    }
    .courise-content {
      padding: 10px;
      font-size: 24px;
      border-bottom: 1px solid #eee;
      p {
        font-size: 20px;
        text-indent: 2em;
        color: #666;
      }
    }
    h3 {
      padding: 30px;
    }
  }
  .mui-table-view {
    padding: 10px;
    li {
      height: 80px;
      margin-top: 10px;
      padding: 0;
      background-color: #fff;
      .course-list {
        display: flex;
        margin: 0;
        height: 100%;
      }
      img {
        flex: 3;
        height: 100%;
      }
      .course-content {
        display: flex;
        flex: 5;
        padding-left: 10px;
        overflow: hidden;
        flex-direction: column;
        justify-content: space-around;
        h5 {
          font-size: 16px;
          color: #000;
        }
        p {
          overflow-wrap: break-word;
          word-wrap: break-word;
          font-size: 16px;
          color: #000;
        }
        span {
          font-size: 16px;
          color: #000;
        }
      }
      .mintui-jiantou1 {
        flex: 2;
        font-size: 50px;
        text-align: center;
        color: #999;
      }
    }
  }
}
.start-study {
  padding: 20px;
  button {
    float: right;
    width: 190px;
    height: 50px;
    font-size: 20px;
    background-color: #3c81bc;
    border-radius: 10px;
  }
}
</style>

