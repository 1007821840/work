<template>
  <div id="goodsleft">
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
        <div>
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
        </scroll>
  </div>
</template>

<script>
    import Scroll from '@/components/common/scroll/Scroll'
export default {
  name:"GoodsRight",
  data () {
    return {
      
    };
  },
  components: {
    Scroll
  },
  mounted () {},
  methods: {
    contentScroll(position) {
    },
    
    loadMore() {
      this.$refs.scroll.scroll.refresh()
    },
  }
}
</script>
<style scoped>
   
     .wrapper {
    position: absolute;
    width: 75%;
    top: 138px;
    bottom: 49px;
    right: 0;
    overflow: hidden;
    background-color:blue;
  
  }
  
</style>