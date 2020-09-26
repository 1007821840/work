<template>
  <div class="comment">
    <scroll
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <top-view :comment="comment" :seller="seller" />
      <rating-select
        :comment="comment"
        @select="selectRating"
        @toggle="toggleContent"
      ></rating-select>
      <rating-wrapper
        :comment="comment"
        :selectType="selectType"
        :onlyContent="onlyContent"
        ref="rating-wrapper"
      ></rating-wrapper>
    </scroll>
  </div>
</template>

<script>
import { getSYMultidata } from "@/network/data.js";
import Scroll from "@/components/common/scroll/Scroll";
import TopView from "./childcomps/TopView";
import RatingSelect from "./childcomps/RatingSelect";
import RatingWrapper from "./childcomps/RatingWrapper";
const ALL = 2;
export default {
  name: "Comment",
  components: {
    Scroll,
    TopView,
    RatingSelect,
    RatingWrapper,
  },

  data() {
    return {
      comment: [],
      seller: {},
      selectType: ALL,
      onlyContent: true,
    };
  },
  created() {
    getSYMultidata().then((res) => {
      this.comment = res.ratings;
      this.seller = res.seller;
    });
  },
  methods: {
    contentScroll(position) {},
    loadMore() {
      this.$refs.scroll.scroll.refresh();
    },

    selectRating(type) {
      this.selectType = type;
      this.$nextTick(() => {
        this.$refs.scroll.scroll.refresh();
      });
    },
    toggleContent() {
      this.onlyContent = !this.onlyContent;
      this.$nextTick(() => {
        this.$refs.scroll.scroll.refresh();
      });
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
<style scoped>
.wrapper {
  position: absolute;
  width: 100%;
  top: 176px;
  bottom: 0px;
  right: 0;
  overflow: hidden;
}
</style>