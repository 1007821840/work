<template>
  <div id="goodsleft">
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
      <!-- <div v-for="item in wtl">
        {{item.count}}
      </div> -->
      <div ref="foods">
        <div v-for="(item,i) in goods" @click="rightss(i)" class="foods-list">
          <div class="goods">{{item.name}}</div>
          <goods-rights :item="item" />
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>

  import GoodsRights from './GoodsRights.vue'
  import Scroll from '@/components/common/scroll/Scroll'
  export default {
    name: "GoodsRight",
    props: {
      goods: Array,
      default() {
        return []
      }
    },
    data() {
      return {
        count:[],
        food: '',
        listHeight: [],
        scrold: {},
        ix: ''
      };
    },
    computed:{
        wtl(){
          return this.$store.state.cartLists
        }
    },

    created() {
      this.$nextTick(() => {
        this.$store.commit('scrol', this.$refs.scroll);
      })
      this.$store.commit('list', this.listHeight);
    },

    mounted() {
         
    },

    updated() {
      
     
      
      // this.$store.commit('scrol',this.$refs.scroll);

    },

    components: {
      Scroll,
      GoodsRights
    },

    mounted() {
      
      setTimeout(() => {
        this.food = this.$refs.foods.getElementsByClassName('foods-list');
        let height = 0;
        this.listHeight.push(height)
        for (let i = 0; i < this.food.length - 1; i++) {
          let item = this.food[i]
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      }, 500);
    },

    methods: {
      
      rightss(i) {
        this.$store.commit('first', i)
        
      },

      contentScroll(position) {
        let lengths = this.listHeight.length;
        for (let i = 0; i < lengths - 1; i++) {
          if (this.$store.state.index !== i && ((-position.y) >= this.listHeight[i] && (-position.y) < this.listHeight[i + 1])) {
            this.$store.state.index = i;
          }
        }
        this.ix = this.$store.state.index;
        this.$store.commit('ixmore', this.ix);
        // console.log(this.ix);
      },

      loadMore() {
        this.$refs.scroll.scroll.refresh()
      },
    }
  }
</script>
<style scoped>
  .goods {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: #93999f;
    background: #f3f5f7;
  }
  .wrapper {
    position: absolute;
    width: 75%;
    top: 176px;
    bottom: 56px;
    right: 0;
    overflow: hidden;
  }
</style>