<!--  -->
<template>
  <div class="news">
    <div class="top-news">
      <h3 class="title">公告与信息</h3>
      <p>{{ seller.bulletin }}</p>
    </div>
    <ul v-if="seller.supports" class="supports">
      <li
        class="supports-item border-1px"
        v-for="(item, index) in seller.supports"
        :key="index"
      >
        <!--根据每一个的索引和下标去取对应的样式-->
         <img src="@/assets/img/tick.svg" alt="" />
        <span class="text">{{ seller.supports[index].description }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  props: {
    seller: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    // 这里样式名称的是根据supports的type来的
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
  },
};
</script>
<style  scoped>
.news {
  position: relative;
  padding: 18px 18px 0 18px;
  border-bottom: 20px solid rgba(7, 17, 27, 0.1);
}
.top-news {
  border-bottom: 1px solid #cccccc;
}
.top-news h3 {
  font-weight: 400;
  color: #000;
}
.top-news p {
  padding-left: 2vw;
  margin: 2vw 0 4vw;
  line-height: 24px;
  font-size: 3.5vw;
  color: #f01414;
}

ul li {
      padding: 16px 12px;
      position: relative;
      border-bottom: 1px solid #cccccc;
      font-size: 3.5vw;
      color: #000;
}
ul li img {
  background-color: green;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 2vw;
}
</style>