// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import "./assets/icon/iconfont.css";
import 'mint-ui/lib/style.css'
import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// 无缝滚动
import scroll from 'vue-seamless-scroll'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.use(scroll)
Vue.use(Mint)
Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
