<template>
  <div>
    <scroll
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <div v-for="(item, i) in wtl" class="foots" :key="i">
        <div class="img">
          <img :src="item.image" />
        </div>
        <div>{{ item.name }}</div>
        <div class="sum">
          <div class="sub" @click="sub(i)">-</div>
          <!-- <div class="count" ref="val" value="item.count">
                    </div> -->
          <input :value="item.count" class="count" :ref="`list${i}`" />
          <div class="add" @click="add(i)">+</div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import {mapMutations} from "vuex"
export default {
  name: "GoodsFoots",
  data() {
    return {
      count: 0,
    };
  },
  props: {
    wtl: Array,
    default() {
      return [];
    },
  },
  components: {
    Scroll,
  },
  mounted() {},
  computed: {},
  methods: {
      ...mapMutations(["updateCounts"]),
    contentScroll(position) {},
    loadMore() {
      this.$refs.scroll.scroll.refresh();
    },
    add(i) {
      let total = 0;
      this.wtl.forEach((count) => {
        total = count.count;
      });
      this.updateCounts({ item: this.product, number: 1 });
      this.$refs[`list${i}`][0].value++;
      this.$store.commit("add");
    },

    sub(i) {
      if (this.$refs[`list${i}`][0].value == 0) {
        this.$refs[`list${i}`][0].value = 0;
      } else {
        this.$refs[`list${i}`][0].value--;
      }
    },
  },
};
</script>
<style scoped>
.sum {
  position: absolute;
  right: 10px;
  font-size: 20px;
}

.foots {
  display: flex;
}

.img img {
  width: 8vw;
  height: 8vw;
  vertical-align: middle;
  margin: 0 2vw;
}

.wrapper {
  position: absolute;
  width: 100%;
  top: 0px;
  bottom: 0px;
  right: 0;
  overflow: hidden;
}
.count {
  width: 20vw;
  height: 10vw;
  margin-top: 2vw;
}

.sum {
  display: flex;
}

.sub,
.add {
  width: 6vw;
  height: 6vw;
  background-color: aqua;

  text-align: center;
  line-height: 6vw;
  border-radius: 50px;
  margin: 4vw 2vw;
}
</style>