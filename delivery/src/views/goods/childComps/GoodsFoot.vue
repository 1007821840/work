<template>
  <div id="goodsfoot">
    <div class="left">
      <div class="ico" @click="ico">
        <div class="count" :class="{ show: color }">{{ totalCount }}</div>
        <i class="iconfont" :class="{ active: color }">&#xe70b;</i>
      </div>
      <div class="yuan" :class="{ pink: color }">￥{{ totalPrice }}元</div>
    </div>
    <div class="center">另需配送费￥4元</div>
    <div class="right">￥20元起送</div>
    <transition name="plus-icon">
      <goods-foots
        class="goods-foots"
        ref="goods-foots"
        :cartList="cartList"
         v-if="show"
      />
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import GoodsFoots from "./GoodsFoots";
export default {
  name: "GoodsFoot",
  data() {
    return {
      show: false,
    };
  },
  components: {
    GoodsFoots,
  },

  computed: {
    ...mapState(["cartList"]),
    // ...mapState(["newCartList"]),
    totalPrice() {
      return this.cartList.reduce((preValue, item) => {
       
          return item.price * item.counts + preValue;
     
      }, 0);
    },
    totalCount() {
      let count = 0;
      for (let i = 0; i < this.cartList.length; i++) {
       
        count += this.cartList[i].counts;
      }
      return count;
    },
    color() {
      if (this.totalPrice) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {},
  methods: {
    ico() {
      this.show = !this.show;
    },
  },
};
</script>
<style scoped>
@import "../../../assets/font_seudn08q78/iconfont.css";
#goodsfoot {
  text-align: center;
  line-height: 56px;
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 56px;
  background-color: aqua;
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.goods-foots {
  position: absolute;
  top: -250px;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 250px;
  background-color: #ffffff;
}
.iconfont {
  font-size: 50px;
}
.yuan {
  margin-left: 15px;
  font-size: 18px;
  font-weight: 600;
}
.left {
  display: flex;
  width: 130px;
  background: #141d27;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.4);
}
.center {
  background: #141d27;
  color: rgba(255, 255, 255, 0.4);
  flex: 1;
  font-size: 15px;
}
.right {
  background: #00b43c;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  width: 105px;
}
.ico {
  z-index: 999;
  width: 56px;
  height: 56px;
  background: #2b343c;
  border-radius: 100px;
  position: relative;
  top: -12px;
  left: 15px;
}
.plus-icon-enter-active {
  transition: opacity 0.5s;
}
.plus-icon-enter {
  opacity: 0;
}
.plus-icon-leave-active {
  transition: opacity 0.5s;
}
.plus-icon-leave-to {
  opacity: 0;
}
.active {
  color: aqua;
}
.pink {
  color: #ff627b;
}
.count {
  position: absolute;
  top: -2vw;
  right: 4.8vw;
  width: 5vw;
  height: 5vw;
  z-index: 99;
  color: #fff;
  background-color: #ff627b;
  line-height: 5vw;
  border-radius: 50%;
  display: none;
}
.show {
  display: block;
}
</style>