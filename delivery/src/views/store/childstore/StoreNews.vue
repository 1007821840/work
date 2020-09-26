<!--  -->
<template>
  <div class="store-news">
    <h2 class="title">商家信息</h2>
    <ul>
      <li v-for="(item, index) in seller.infos" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StoreNews",
  props: {
    seller: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style  scoped>
.store-news {
  position: relative;
  padding: 18px 18px 0 18px;
}
.title {
  font-weight: normal;
  font-size: 5vw;
}
ul li {
  padding: 16px 12px;
  position: relative;
  border-bottom: 1px solid #cccccc;
  font-size: 3.5vw;
  color: #000;
}
</style>