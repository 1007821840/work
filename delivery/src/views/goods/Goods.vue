<template>
  <div>
    <goods-left/>
    <goods-right/>
    <goods-foot/>
    
  </div>
</template>

<script>
  import GoodsLeft from './childComps/GoodsLeft'
  import GoodsRight from './childComps/GoodsRight'
  import GoodsFoot from './childComps/GoodsFoot'
export default {
  name:"Goods",
  data () {
    return {
      
    };
  },
  components: {
    GoodsRight,
    GoodsLeft,
    GoodsFoot
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped>
</style>