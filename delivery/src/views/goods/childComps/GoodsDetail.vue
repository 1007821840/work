<template>
    <div id="detail">
        <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
        <div @click="back" class="detail-back">o</div>
       <div class="detail-img">
        <img :src="goodnew[first].foods[item].image">
       </div>
            <div class="rights-2">{{goodnew[first].foods[item].name}}</div>
            <div class="detail-h">
                <div class="rights-3">月售:{{goodnew[first].foods[item].sellCount}}</div>
                <div class="rights-6">好评率{{goodnew[first].foods[item].rating}}%</div>
            </div>
            <div class="rights-5">￥{{goodnew[first].foods[item].price}}</div>
            <div class="xk"></div>
            <h2>商品评价</h2>
            <div class="detail-tab">
                <div class="detail-tab1">全部</div>
                <div class="detail-tab2">推荐</div>
                <div class="detail-tab3">吐槽</div>
            </div>
            
            <div class="detail-foot">
                <span class="span1">只看有评论的内容</span>
            </div>
            <goods-details/>
            <div v-for="it in goodnew[first].foods[item].ratings" >
                <div class="left-it">
                <div>{{it.rateTime | formatDate}}</div>
                <div>{{it.text}}</div>
                </div>
                <div class="right-it">
                <div>
                    <img :src="it.avatar">
                </div>
                <div>{{it.username}}</div>
                </div>
            </div>
       </scroll>
    </div>
</template>

<script>
    import {formatDate} from '@/common/utils.js'
    import GoodsDetails from './GoodsDetails.vue'
     import Scroll from '@/components/common/scroll/Scroll'
    export default {
        name: "GoodsDetail",
        filters:{
      formatDate(time) {
        let date = new Date(time); 
        return formatDate(date, 'yyyy-MM-dd hh:mm');
    }

  },
        data() {
            return {

            };
        },
        created(){
},
        computed:{
            
            item(){
                return this.$store.state.i;
            },
            first(){
                return this.$store.state.z;
            },
            goodnew(){
                return this.$store.state.goods;
            }

        },
        created(){
            console.log(this.item);

        },
        components: {
            Scroll,
            GoodsDetails
        },
        mounted() {
          
          
        },
        methods: {
            contentScroll(position) {
    },
    
    loadMore() {
      this.$refs.scroll.scroll.refresh()
    },
            back(){
                this.$router.go(-1);
                
            }
        }
    }
</script>

<style scoped>
    h2{
        margin-left: 20px;
        margin-top: 10px;
        font-size: 15px;

    }
    .detail-tab3{
        background: rgba(77,85,93,0.2);
    }
    .detail-tab>div{
        margin: 5px;
        width: 57px;
        text-align: center;
        line-height: 32px;
        height: 32px;
        display: inline-block;
    }
    .detail-tab1,.detail-tab2{
        background: rgba(0,160,220,0.2);
    }
    .detail-tab{
        margin-top: 15px;
      margin-left: 15px;
    }

   
     .wrapper {
         background-color: #ffffff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
   
  }
    #detail{
        font-size: 14px;
    }
    .rights-6{
        margin-left: 20px;
    }
    .detail-h{
        color: #93999f;
        margin-top: 5px;
        display: flex;
        margin-left: 20px;
    }
    .rights-2,.rights-4,.rights-5{
        margin-left: 20px;
    }
    .rights-2{
        margin-top: 15px;
    }
    .rights-5{
        margin-top: 20px;
        font-size: 16px;
    color: #f01414;
    }
       

    .detail-img img{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
    .detail-foot{
        border-bottom: 1px solid rgba(7,17,27,0.1);
    color: #93999f;
       margin-top: 10px;
        width: 100%;
        height: 59px;
    }
    .span1{
        border-top: 1px solid rgba(7,17,27,0.1);
        margin: auto;
        width: 90%;
        height: 59px;
        display: block;
        line-height:59px ;
    }
    .detail-img {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
   
}
    .detail-back{
        z-index: 99;
        position: fixed;
        top: 10px;
        width: 50px;
        height: 50px;
        background-color: royalblue;
    }
    .right-it{
        display: inline-block;
        
    }
    .right-it img{
        width: 12px;
        height: 12px;
    }
    .xk{
        margin-top: 15px;
        width: 100%;
        height: 18px;
    border-top: 1px solid rgba(7,17,27,0.1);
    border-bottom: 1px solid rgba(7,17,27,0.1);
    background: #f3f5f7;
    }
    #detail {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100vw;
        height: 100vh;

    }
</style>