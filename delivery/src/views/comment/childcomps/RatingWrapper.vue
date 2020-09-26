<!--  -->
<template>
  <div class="rating-wrapper">
    <ul>
      <li
        v-for="(item, index) in comment"
        :key="index"
        v-show="needShow(item.rateType, item.text)"
        class="rating-item"
      >
        <div class="avatar">
          <img width="28" height="28" :src="item.avatar" />
        </div>
        <div class="content">
          <span class="name">{{ item.username }}</span>
          <div class="star-wrapper">
            <span class="delivery" v-show="item.deliveryTime"
              >配送时间：{{ item.deliveryTime }}</span
            >
          </div>
          <p class="text">{{ item.text }}</p>
          <div
            class="recommend"
            v-show="item.recommend && item.recommend.length"
          >
            <span class="icon-thumb_up"></span>
            <span
              class="item"
              v-for="(i, index) in item.recommend"
              :key="index"
              >{{ i }}</span
            >
          </div>
          <div class="time">
            {{ item.rateTime | formatDate }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatDate } from "@/common/utils";
const ALL = 2;
const POSITIVE = 1;
const NEGATIVE = 0;
export default {
  name: "RatingWrapper",
  props: {
    comment: {
      type: Array,
      default() {
        return [];
      },
    },
    selectType: {
      type: Number,
     
    },
    onlyContent:{
      type:Boolean,
      
    }
  },
  data() {
    // data 用来观测数据变化
    return {
      ratings: [], // 存放评价
      // selectType: ALL, // 继续对ratingselect组件变量的跟踪
      // onlyContent: true,
    };
  },
  methods: {
    needShow(type, text) {
      // 需要显示的评价类型
      if (this.onlyContent && !text) {
        // 如果需要显示有内容，并且内容为空则返回
        return false;
      }
      if (this.selectType === ALL) {
        return true;
      } else {
        return type === this.selectType;
      }
    },
  },

  filters: {
    formatDate(time) {
      // 将评价的时间戳转换成 年月日，时分
      let date = new Date(time); // 先把时间戳转换成date格式
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
  },
};
</script>
<style  scoped>
.rating-wrapper {
  margin-top: 4vw;
  padding: 0 4vw;
}
.rating-item {
  display: flex;
  border-bottom: 1px solid #cccccc;
  padding: 4vw 0;
}
.avatar img {
  vertical-align: middle;
  margin-right: 2vw;
  border-radius: 50%;
}
.content {
  font-size: 3vw;
}
.name {
  color: #000;
}
.star-wrapper {
  margin-top: 1vw;
  font-size: 3vw;
}
.text {
  margin: 4vw 0;
}
.recommend {
  margin: 2vw 0;
}
.item {
  padding: 0 6px;
  border: 1px solid rgba(7, 17, 27, 0.1);
  border-radius: 1px;
  color: #93999f;
  background: #fff;
  display: inline-block;
  margin: 0 8px 4px 0;
  font-size: 9px;
}
</style>