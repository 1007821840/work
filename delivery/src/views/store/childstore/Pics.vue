<!--  -->
<template>
  <div class="pics">
    <p>商家实景</p>
    <ul class="pic-list" >
      <li class="pic-item" v-for="(item, index) in seller.pics" :key="index">
        <img :src="item"  alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pics",
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
.pics {
  position: relative;
  padding: 18px 18px 0 18px;
  border-bottom: 20px solid rgba(7, 17, 27, 0.1);
}
ul  {
  display: flex;
  margin: 4vw 0;
}
ul li {
  flex: 1;
  text-align: center;
}
ul li img {
  height : 18vw;
  padding: 0 1vw;
}
</style>