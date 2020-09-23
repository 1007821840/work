<template>
    <div>
        <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
            <div v-for="(item,i) in wtl" class="foots">
                <div class="img">
                    <img :src="item.image">
                </div>
                <div>{{item.name}}</div>
                <div class="sum">
                    <div class="sub" @click="sub(i)">-</div>
                    <!-- <div class="count" ref="val" value="item.count">
                    </div> -->
                    <input :value="item.count" class="count" :ref="`list${i}`">
                    <div class="add" @click="add(i)" >+</div>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>
    import Scroll from '@/components/common/scroll/Scroll'
    export default {
        name: "GoodsFoots",
        data() {
            return {
                count:0


            };
        },
        props: {
            wtl: Array,
            default() {
                return []
            }


        },

        //   wacth:{
        //       wtl(){
        //         return this.$store.state.cartList
        //       }

        //   },
        components: {
            Scroll
        },
        mounted() { },

        computed:{
           

        },
        methods: {
            contentScroll(position) {
            },

            loadMore() {
                this.$refs.scroll.scroll.refresh()
            },

            add(i){
                console.log(this.wtl);
                let total=0;
                this.wtl.forEach((count)=> {
                    total=count.count
                });
                console.log(total);

                this.$refs[`list${i}`][0].value++;
                this.$store.commit('add');
            },

            sub(i){
                if(this.$refs[`list${i}`][0].value==0){
                    this.$refs[`list${i}`][0].value=0
                }else{
                    this.$refs[`list${i}`][0].value--
                }
                

            }


        }
    }
</script>
<style scoped>
    .sum {
        position: absolute;
        right: 10px;
        font-size: 20px;
    }

    .foots {
        display: flex;
    }

    .img img {
        width: 60px;
        height: 60px;
    }

    .wrapper {
        position: absolute;
        width: 100%;
        top: 0px;
        bottom: 0px;
        right: 0;
        overflow: hidden;
    }
    .count{
        width: 100px;
    }

    .sum {
        display: flex;
    }

    .sub,
    .add {
        width: 30px;
        height: 30px;
        background-color: aqua;
        margin: auto;
        text-align: center;
        line-height: 30px;
        border-radius: 50px;
        margin: 10px;
    }
</style>