<template>
  <div class="box-list">
    <mt-header title="课程列表" class="heard">
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
    <!-- 过滤加载 -->
    <filter-box></filter-box>

    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/courselist/CourseOnLine" class="course-list">
          <img class src="../../assets/tu.png" />
          <div class="course-content">
            <h5>培训课程1</h5>
            <p>课程描叙：描叙课程内容课描叙课程：叙：描叙课程内容课程：叙：描叙课程内容</p>
            <span>共五课</span>
          </div>
          <span class="mintui mintui-jiantou1"></span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to class="course-list">
          <img class src="../../assets/tu.png" />
          <div class="course-content">
            <h5>培训课程1</h5>
            <p>课程描叙：描叙课程内容课描叙课程：叙：描叙课程内容课程：叙：描叙课程内容</p>
            <span>共五课</span>
          </div>
          <span class="mintui mintui-jiantou1"></span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to class="course-list">
          <img class src="../../assets/tu.png" />
          <div class="course-content">
            <h5>培训课程1</h5>
            <p>课程描叙：描叙课程内容课描叙课程：叙：描叙课程内容课程：叙：描叙课程内容</p>
            <span>共五课</span>
          </div>
          <span class="mintui mintui-jiantou1"></span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to class="course-list">
          <img class src="../../assets/tu.png" />
          <div class="course-content">
            <h5>培训课程1</h5>
            <p>课程描叙：描叙课程内容课描叙课程：叙：描叙课程内容课程：叙：描叙课程内容</p>
            <span>共五课</span>
          </div>
          <span class="mintui mintui-jiantou1"></span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to class="course-list">
          <img class src="../../assets/tu.png" />
          <div class="course-content">
            <h5>培训课程1</h5>
            <p>课程描叙：描叙课程内容课描叙课程：叙：描叙课程内容课程：叙：描叙课程内容</p>
            <span>共五课</span>
          </div>
          <span class="mintui mintui-jiantou1"></span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to class="course-list">
          <img class src="../../assets/tu.png" />
          <div class="course-content">
            <h5>培训课程1</h5>
            <p>课程描叙：描叙课程内容课描叙课程：叙：描叙课程内容课程：叙：描叙课程内容</p>
            <span>共五课</span>
          </div>
          <span class="mintui mintui-jiantou1"></span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to class="course-list">
          <img class src="../../assets/tu.png" />
          <div class="course-content">
            <h5>培训课程1</h5>
            <p>课程描叙：描叙课程内容课描叙课程：叙：描叙课程内容课程：叙：描叙课程内容</p>
            <span>共五课</span>
          </div>
          <span class="mintui mintui-jiantou1"></span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to class="course-list">
          <img class src="../../assets/tu.png" />
          <div class="course-content">
            <h5>培训课程1</h5>
            <p>课程描叙：描叙课程内容课描叙课程：叙：描叙课程内容课程：叙：描叙课程内容</p>
            <span>共五课</span>
          </div>
          <span class="mintui mintui-jiantou1"></span>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to class="course-list">
          <img class src="../../assets/tu.png" />
          <div class="course-content">
            <h5>培训课程1</h5>
            <p>课程描叙：描叙课程内容课描叙课程：叙：描叙课程内容课程：叙：描叙课程内容</p>
            <span>共五课</span>
          </div>
          <span class="mintui mintui-jiantou1"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import filter from "../../components/Filter";
export default {
  name: "CourseList",
  components: {
    "filter-box": filter
  }
};
</script>
<style lang="scss" scoped>
.box-list {
  background-color: #eee;
}
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
.mui-table-view {
  position: absolute;
  top: 154px;
  // bottom: 0;
  left: 0;
  right: 0;
  // height: 100%;
  padding: 10px;
  background-color: #eee;
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
</style>

