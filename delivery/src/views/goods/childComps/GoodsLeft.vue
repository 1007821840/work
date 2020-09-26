<template>
  <div>
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
      <div class="goods">
        <div v-for="(item,index) in goods" class="goodsleft" :key="index" :class="{active:index==$store.state.ix}" @click="isActive(index)" >
          <span>
            {{item.name}}
          </span>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  import Scroll from '@/components/common/scroll/Scroll'
  export default {
    name: "GoodsLeft",
    props: {
      goods: Array,
      default() {
        return []
      }

    },
    data() {
      return {
        currentIndex:0

      };
    },
    created(){
      

    },
    components: {
      Scroll
    },
   
    mounted() { },
    methods: {
      ...mapMutations(['list']),
      
      isActive(index) {
        // console.log(this.currentIndex);

        this.$store.state.scrol.scrollTo(0,-this.$store.state.list[index],100);
        this.currentIndex = index;
        this.$store.commit('index',this.currentIndex);
        // console.log(this.currentIndex);

      },
      contentScroll(position) {
        // console.log( this.currentIndex);
      },

      loadMore() {
        this.$refs.scroll.scroll.refresh()
      },
     
    }
  }
</script>
<style scoped>
  .goodsleft {
    width: 75%;
    height: 54px;
    margin: auto;
    font-size: 3.5vw;
    color: #000;

    text-align: center;
    border-bottom: 1px solid #cccc;
  }

  .goodsleft span {
    position: relative;
    top: 15px;



  }

  .wrapper {
    background-color: #F3F5F7;
    position: absolute;
    width: 25%;
    top: 176px;
    bottom: 56px;
    left: 0;
    right: 0;
    overflow: hidden;

  }
  .active {
    color: red
  }
</style>