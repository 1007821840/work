<template>
  <tab-bar>
    <tab-bar-item path="/goods">
      <div slot="item-text">商品</div>
    </tab-bar-item>
    <tab-bar-item path="/comment">
      <div slot="item-text">评论</div>
    </tab-bar-item>
    <tab-bar-item path="/store">
      <div slot="item-text">商家</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar'
  import TabBarItem from '@/components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
</style>