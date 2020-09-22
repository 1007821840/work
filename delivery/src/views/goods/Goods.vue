<template>
  <div>
    <goods-left :goods="good" class="goods-left"/>
    <goods-right :goods="good"/>
    <goods-foot/>
    
  </div>
</template>

<script>
  import { getSYMultidata } from '@/network/data.js'
  import GoodsLeft from './childComps/GoodsLeft'
  import GoodsRight from './childComps/GoodsRight'
  import GoodsFoot from './childComps/GoodsFoot'
export default {
  name:"Goods",
  data () {
    return {
      good:[]
      
    };
  },
  created(){
    getSYMultidata().then(res => {
    
      this.good=res.goods;
      this.$store.commit('goodsValue',this.good)
    
    })
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