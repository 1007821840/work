<template>
    <div class="goodsrights">
        <div v-for="(item,i) in item.foods" class="rights" :key="i">
            <div class="rightss">
            <div class="rights-1"  @click="show(i)">
                <img :src="item.image">
            </div>
            <div class="main">
                <div class="rights-2">{{item.name}}</div>
                <div class="rights-4">{{item.description}}</div>
                <div class="main-1">
                    <div class="rights-3">月售:{{item.sellCount}}</div>
                    <div class="rights-6">好评率{{item.rating}}%</div>
                </div>
                <div class="rights-5">￥{{item.price}}</div>
            </div>
            <div class="add" @click="rights(i)">+</div>
            <!-- <div v-for="item in $store.state.cartList">
                <div>{{item.count}}</div>
            </div> -->
            </div>
        </div>
    </div>
</template>
<script>
    import GoodsDetail from './GoodsDetail.vue'
    import {mapMutations} from 'vuex'
    export default {
        name: "GoodsRights",
        props: {
            item: Object,
            default() {
                return {}
            }

        },
        data() {
            return {
                list:[]
              

            };
        },
        created(){
            for(let j=0;j<this.item.foods.length;j++){
                this.list.push(this.item.foods[j])
            }
        },
        updated(){
           
        },
        components: {
            GoodsDetail
        },
        mounted() { 
            // for(let i=0;i<this.item.foods.length;i++){
            //     this.list.push(this.item.foods[i])
            // }
        },
        methods: {
         
            ...mapMutations(['setValue']),
            show(i){
                // console.log(i);
                this.$store.commit('setValue',i)
                this.$router.push('./detail');

            },
            rights(i){
                this.$store.commit('addCart',this.list[i])
            },
            // addCart(){
            //     const product={}
            //     product.name=this.list

            // }
        }
    }
</script>
<style scoped>
    .add{
        position: absolute;
        top: 68px;
        right: 20px;
        width: 25px;
        height: 25px;
        background-color: #00a0dc;
        border-radius: 100px;
        line-height: 25px;
        text-align: center;
    }
    .rights-6{
        margin-left: 8px;
    }
    .rights-5{
        margin-top: 5px;
        font-size: 18px;
        color: red;
    }
    
    .rights-1 img {
       margin-top: 15px;
        width: 57px;
        height: 57px;
    }
    .rights{
        position: relative;
        width: 100%;
        height: 110px;
    }
    .rights-4{
        margin-top: 6px;
        font-size: 12px;
        color: #cccc;
    }

    .rightss {
        height: 110px;
       margin-left: 10px;
       margin-right: 10px;
       vertical-align: middle;
       border-bottom: 1px solid #ccc;
        
        display: flex;
    }
    .rights-2{
        font-size: 14px;
    }
    .main{
        margin-top: 15px;
        margin-left: 10px;
    }

    .main-1 {
        margin-top: 6px;
        font-size: 12px;
        display: flex;
        color: #cccc;
    }
</style>