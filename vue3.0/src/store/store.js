import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:0

    },
    //修改数据
    mutations:{
        add(state){
            state.count++
        }

    },
    actions:{

    }
})