<template>
  <div class="count">
    <span>{{time.h}}</span>:
    <span>{{time.m}}</span>:
    <span>{{time.s}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isEnd: false, //倒计时是否结束
      endTime: "2019-8-29 08:00:00", //应为接口获取到的结束时间
      time: {
        h: 0,
        m: 0,
        s: 0
      }
    };
  },
  mounted() {
    this.countTime();
  },
  methods: {
    countTime: function() {
      //获取当前时间
      var date = new Date();
      var now = date.getTime();
      //设置截止时间
      var endDate = new Date("2019-8-22 23:23:23");
      var end = endDate.getTime();
      //时间差
      var leftTime = end - now;
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        // d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        this.time.h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        this.time.h = this.time.h < 10 ? "0" + this.time.h : this.time.h;
        this.time.m = Math.floor((leftTime / 1000 / 60) % 60);
        this.time.m = this.time.m < 10 ? "0" + this.time.m : this.time.m;
        this.time.s = Math.floor((leftTime / 1000) % 60);
        this.time.s = this.time.s < 10 ? "0" + this.time.s : this.time.s;
      }
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countTime, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.count {
  display: inline-block;
  span {
    display: inline-block;
    font-size: 16px;
    // padding: 5px;
    padding-left: 5px;
    padding-right: 5px;
    background-color: #000;
    color: #fff;
  }
}
</style>


