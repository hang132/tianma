<template>
  <div>
    <mt-header title="天马电子" class="heard">
      <mt-button icon="mintui mintui-yonghu" slot="left"></mt-button>
      <mt-button icon="mintui mintui-add" slot="right"></mt-button>
    </mt-header>
    <div class="background">
      <mt-swipe :show-indicators="false" class="swipe">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 内容区域 -->

    <div class="content">
      <vue-seamless-scroll
        :data="listData"
        :class-option="optionSingleHeight"
        class="seamless-warp"
        v-show="flag"
      >
        <ul class="item">
          <li v-for="item in listData" :key="item.id" class="seamless-content">
            <span class="mintui mintui-shengyinkai"></span>
            <span class="date" v-text="item.title"></span>
            <span class="mintui mintui-guanbi scroll-closs" @click="flag=!flag"></span>
          </li>
        </ul>
      </vue-seamless-scroll>

      <ul class="info-list">
        <li>
          <router-link to="/home/courselist">
            <div>
              <i class="mintui mintui-biaodanzujian-biaoge"></i>
            </div>
            <span>课程</span>
          </router-link>
        </li>
        <li>
          <router-link to="/home/examination">
            <div>
              <i class="mintui mintui-ceshishenqing"></i>
            </div>
            <span>考试</span>
          </router-link>
        </li>
        <li>
          <router-link to="/home/performance">
            <div>
              <i class="mintui mintui-chaxun"></i>
            </div>
            <span>我的成绩</span>
          </router-link>
        </li>
        <li>
          <div>
            <i class="mintui mintui-peiwangyindao"></i>
          </div>
          <span>我的试卷</span>
        </li>
        <li>
          <div>
            <i class="mintui mintui-icon_shiyongwendang"></i>
          </div>
          <span>我的教材</span>
        </li>
        <li>
          <div>
            <i class="mintui mintui-daibanshixiang"></i>
          </div>
          <span>我的练习</span>
        </li>
        <li>
          <div>
            <i class="mintui mintui-zhanghaoquanxianguanli"></i>
          </div>
          <span>我的证书</span>
        </li>
      </ul>
    </div>

    <!-- 底部导航 -->
    <mt-tabbar v-model="selected" class="foot-bar">
      <mt-tab-item id="首页">
        <!-- <img slot="mintui mintui-shebeizhuangtai" /> -->
        <i class="mintui mintui-shebeizhuangtai"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="消息">
        <i class="mintui mintui-xiaoxi"></i>
        消息
      </mt-tab-item>
      <mt-tab-item id="设置">
        <i class="mintui mintui-gongnengdingyi"></i>
        设置
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      selected: "首页",
      listData: [
        {
          id: 0,
          title: "无缝滚动第一行无缝滚动第一行"
        },
        {
          id: 1,
          title: "无缝滚动第二行无缝滚动第二行"
        },
        {
          id: 2,
          title: "无缝滚动第三行无缝滚动第三行"
        },
        {
          id: 3,
          title: "无缝滚动第四行无缝滚动第四行"
        },
        {
          id: 4,
          title: "无缝滚动第五行无缝滚动第五行"
        }
      ],
      flag: true
    };
  },
  computed: {
    optionSingleHeight() {
      return {
        singleHeight: 30,
        hoverStop: true,
        switchSingleStep: 1
      };
    }
  },
  watch: {
    selected: (val, oldVal) => {
      console.log(val);
    }
  },
  methods: {
    closs: () => {
      console.log(111);
      // this.flag = true;
    }
  }
};
</script>
<style scoped>
.heard {
  height: 64px;
  font-size: 16px;
  background-color: #3c81bc;
}
.background {
  height: 90px;
  background-color: #3c81bc;
}
.foot-bar {
  height: 45px;
  font-size: 20px;
}
.foot-bar i {
  display: block;
}
.background {
  position: relative;
}
.swipe {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 120px;
  background-color: DeepSkyBlue;
}
.content {
  position: absolute;
  padding-left: 10px;
  padding-right: 10px;
  top: 154px;
  bottom: 45px;
  left: 0px;
  right: 0px;
}
.seamless-warp {
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 60px;
  width: 80%;
  height: 30px;
  overflow: hidden;
  background-color: rgba(238, 238, 238, 0.5);
}
.seamless-content {
  height: 30px;
  line-height: 30px;
}
.item {
  margin: 0;
}
.scroll-closs {
  float: right;
}
.info-list {
  margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
}

.info-list li {
  padding: 10px;
  margin-bottom: 20px;
  width: 25%;
  height: 80px;
  text-align: center;
}
.info-list li div {
  height: 50px;
  line-height: 50px;
  background-color: rgba(60, 129, 188, 0.8);
  border-radius: 50%;
}
.info-list li i {
  color: #fff;
  display: block;
  font-size: 40px;
}
.info-list li span {
  font-size: 14px;
}
</style>

