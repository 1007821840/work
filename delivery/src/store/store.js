import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

Vue.use(vuex)

export default new vuex.Store({
    state:{
        count:0,
        i:0,
        z:0,
        goods:[],
        scrol:{},
        list:[],
        index:0,
        ix:0,

    },
    mutations:{
        add(state){
            state.count++
        },
        setValue(state,i){
            state.i=i;
        },
        first(state,i){
            state.z=i;
        },
        goodsValue(state,sum){
            state.goods=sum;
        },
        scrol(state,scrol){
            state.scrol=scrol;
        },
        list(state,list){
            state.list=list;
        },
        index(state,index){
            state.index=index;
        },
        ixmore(state,ix){
            state.ix=ix;
            console.log(state.ix);
        }
        


    },
    actions:{

    }
})

