<template>
  <div class="store">
    <scroll
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <top-view :seller="seller"> </top-view>
      <news :seller="seller"/>
      <pics :seller="seller"/>
      <store-news :seller="seller"/>
    </scroll>
  </div>
</template>

<script>
import TopView from "./childstore/TopView";
import News from "./childstore/News"
import Pics from "./childstore/Pics"
import StoreNews from "./childstore/StoreNews"
import Scroll from "@/components/common/scroll/Scroll";
import { getSYMultidata } from "@/network/data.js";
export default {
  name: "Store",
  components: {
    TopView,
    News,
    Pics,
    StoreNews,
    Scroll,
  },
  data(){
    return {
      seller: {},
    }
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