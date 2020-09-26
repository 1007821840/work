<!--  -->
<template>
  <div class="rating-select">
    <div class="rating-type border-1px">
      <span
        @click="select(2, $event)"
        class="block positive"
        :class="{ active: selectType === 2 }"
        >全部{{ comment.length }}</span
      >
      <span
        @click="select(0, $event)"
        class="block positive"
        :class="{ active: selectType === 0 }"
        >满意{{ positives.length }}</span
      >
      <span
        @click="select(1, $event)"
        class="block negative"
        :class="{ active: selectType === 1 }"
        >不满意{{ negatives.length }}</span
      >
    </div>
    <div class="switch">
      <img src="@/assets/img/tick.svg" alt="" />
      <span>只看有评论的内容</span>
    </div>
  </div>
</template>

<script>
const POSITIVE = 0; // 好评
const NEGATIVE = 1; // 差评
const ALL = 2; // 所有评价
export default {
  name: "RatingSelect",
  data() {
    return {
      selectType:2
    };
  },
  props: {
    comment: {
      type: Array,
      default() {
        return [];
      },
    },
    
    onlyContent: {
      // 是否只看有内容的评价
      type: Boolean,
      default: false,
    },
  },
  methods: {
    select(type, event) {
      if(type == 2){
        this.selectType = type
      }
      if(type == 0){
        this.selectType = type
      }
      if(type == 1){
        this.selectType = type
      }
     
      // 改变查看的评价内容和评价样式
      if (!event._constructed) {
        return;
      }
      // 子组件派发事件，改变父组件(food)的 ratingType 状态
      this.$emit("select", type);
      
    },
    toggleContent(event) {
      if (!event._constructed) {
        return;
      }
      // 子组件派发事件，改变父组件（food)的 ratingType 状态
      this.$emit("toggle");
    },
  },

  computed: {
    positives() {
      // 计算好评条数 使用过滤器拦截，data.json 里面的 rateType 正好是 0 或 1
      return this.comment.filter((item) => {
        return item.rateType === POSITIVE;
      });
    },
    negatives() {
      // 计算差评条数
      return this.comment.filter((item) => {
        return item.rateType === NEGATIVE;
      });
    },
  },
};
</script>
<style  scoped>
.rating-select {
  padding: 18px 0;
  margin: 0 18px;
  position: relative;
  border-bottom: 1px solid #cccccc;
}

.rating-type span {
  display: inline-block;
  text-align: center;
  background: rgba(0, 160, 220, 0.2);
  width: 18vw;
  height: 8vw;
  line-height: 8vw;
  margin-left: 2vw;
  font-size: 3vw;
  color: #000;
}
.rate-type .negative {
  background-color: #4d555d;
  color: #ffffff;
}
.switch {
  margin-top: 4vw;
  margin-left: 2vw;
  font-size: 3vw;
  color: #999999;
  padding-top: 4vw;
  border-top: 1px solid #f2f2ff;
}
.switch img {
  background-color: #00c850;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 2vw;
}
.rating-type .active {
  color: #fff;
  background-color: #00a0dc;
}
</style>