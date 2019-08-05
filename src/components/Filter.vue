<template>
  <div class="filter">
    <div class="filter-date" @click="showDateList">
      <icon class="mintui mintui-paixu1"></icon>
      <span v-text="fliterDate"></span>
      <div class="triangle"></div>
    </div>
    <div class="filter-content" @click="showTypeList">
      <span class="mintui mintui-filter"></span>
      筛选
      <div class="triangle"></div>
    </div>

    <div class="down-datelist" v-show="flagDate">
      <mt-radio v-model="fliterDate" :options="order" @change="check"></mt-radio>
    </div>

    <div class="down-typelist" v-show="flagType">
      <div class="classify">
        <ul>
          <li>课程分类</li>
        </ul>
      </div>
      <div class="checked-type">
        <mt-checklist v-model="value" :options="classify"></mt-checklist>
      </div>
      <button type="button" class="mui-btn mui-btn-danger reset">重置</button>
      <button type="button" class="mui-btn mui-btn-primary confirm">确定</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flagDate: false,
      flagType: false,
      fliterDate: "日期",
      value: [],
      order: [
        {
          label: "由近及远",
          value: "由近及远"
        },
        {
          label: "由远及近",
          value: "由远及近"
        }
      ],
      classify: [
        {
          label: "不限",
          value: "值F"
        },
        {
          label: "电测",
          value: "选中禁用的值"
        },
        {
          label: "附件",
          value: "值A"
        },
        {
          label: "封装",
          value: "值B"
        }
      ]
    };
  },
  methods: {
    showDateList() {
      this.flagDate = !this.flagDate;
      this.flagType = false;
    },
    showTypeList() {
      this.flagType = !this.flagType;
      this.flagDate = false;
    },
    check() {
      console.log(this.fliterDate);
      this.flagDate = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  position: relative;
  display: flex;
  height: 40px;
  // line-height: 40px;
  text-align: center;
  font-size: 16px;
  background-color: #fff;
  .filter-date {
    margin-top: 5px;
    height: 30px;
    line-height: 30px;
    position: relative;
    flex: 1;
    border-right: 1px solid #999;
  }
  .filter-content {
    margin-top: 5px;
    height: 30px;
    line-height: 30px;
    flex: 1;
    position: relative;
  }
  .triangle {
    content: "";
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    height: 0;
    width: 0;
    border: 8px solid #999;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: none;
  }
}

.down-datelist {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  z-index: 999;
  text-align: left;
}

.down-typelist {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 999;
  right: 0;
  background-color: #999;
}
.classify {
  width: 40%;
  height: 100%;
  li {
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    background-color: #fff;
    text-align: center;
    border-bottom: 1px solid #eee;
  }
}
.mui-btn {
  width: 50%;
  height: 45px;
}
.confirm {
  background-color: #3c81bc;
}
.reset {
  background-color: #c7505b;
}
.checked-type {
  width: 60%;
  height: 100%;
}
/deep/ .mint-checklist-title,
/deep/ .mint-radiolist-title {
  margin: 0;
}
</style>
