<template>
  <div>
    <goods-left :goods="good" class="goods-left" />
    <goods-right :goods="good" />
    <goods-foot />
  </div>
</template>

<script>
import { getSYMultidata } from "@/network/data.js";
import GoodsLeft from "./childComps/GoodsLeft";
import GoodsRight from "./childComps/GoodsRight";
import GoodsFoot from "./childComps/GoodsFoot";
export default {
  name: "Goods",
  components: {
    GoodsRight,
    GoodsLeft,
    GoodsFoot,
  },
  data() {
    return {
      good: [],
      list: [],
    };
  },
  created() {
    getSYMultidata().then((res) => {
      this.good = res.goods;
      for (let i = 0; i < this.good.length; i++) {
        this.list.push(this.good[i].foods);
      }
      this.$store.commit("goodsValue", this.good);
    });
  },
 
};
</script>
<style scoped>
</style>