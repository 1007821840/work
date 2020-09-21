<template>
  <div>
    <goods-left/>
    <goods-right/>
  </div>
</template>

<script>
  import GoodsLeft from './childComps/GoodsLeft'
  import GoodsRight from './childComps/GoodsRight'
export default {
  name:"Goods",
  data () {
    return {
      
    };
  },
  components: {
    GoodsRight,
    GoodsLeft
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped>
</style>