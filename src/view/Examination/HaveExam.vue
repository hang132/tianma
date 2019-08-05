<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="sheet">
      <!-- slides -->
      <swiper-slide>
        <mt-radio title="试题1" v-model="value" :options="['选项一', '选项二', '选项三']"></mt-radio>
      </swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      <!-- Optional controls -->

      <div class="swiper-button-prev" slot="button-prev">上一题</div>
      <div class="swiper-button-next" slot="button-next">下一题</div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HaveExam",
  data() {
    return {
      value: "",
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>
<style lang="scss" scoped>
.sheet {
  width: 100%;
  height: 500px;
}
.swiper-button-prev {
  background-image: none;
  top: 90%;
  width: 50%;
  font-size: 20px;
  background-color: red;
}
.swiper-button-next {
  background-image: none;
  top: 90%;
  width: 50%;
  font-size: 20px;
  background-color: blue;
}
</style>


