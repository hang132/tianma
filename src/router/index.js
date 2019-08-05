import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/view/home/Home.vue'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/view/login/Login.vue'], resolve)
    },
    {
      path: '/login/retrievepassword',
      name: 'RetrievePassword',
      component: resolve => require(['@/view/login/RetrievePassword.vue'], resolve)
    },
    {
      path: '/home/courselist',
      name: 'CourseList',
      component: resolve => require(['@/view/CourseList/CourseList.vue'], resolve)
    },
    {
      path: '/home/courselist/CourseOnLine',
      name: 'CourseOnLine',
      component: resolve => require(['@/view/CourseList/CourseOnLine.vue'], resolve)
    },
    {
      path: '/home/performance',
      name: 'Performance',
      component: resolve => require(['@/view/performance/Performance.vue'], resolve)
    },
    {
      path: '/home/examination',
      name: 'Examination',
      component: resolve => require(['@/view/Examination/Examination.vue'], resolve)
    },
    {
      path: '/home/examination/examinationdetails',
      name: 'ExaminationDetails',
      component: resolve => require(['@/view/Examination/ExaminationDetails.vue'], resolve)
    },
    {
      path: '/home/examination/haveexam',
      name: 'HaveExam',
      component: resolve => require(['@/view/Examination/HaveExam.vue'], resolve)
    },
    {
      path: '*',
      redirect: {
        name: 'Login'
      }
    }
  ]
})
