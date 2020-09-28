import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

Vue.use(vuex)

export default new vuex.Store({
    state: {
        i: 0,
        z: 0,
        goods: [],
        scrol: {},
        list: [],
        index: 0,
        ix: 0,
        cartList: [],
        cartLists: [],
        payload: [],
        count: [],
        newCartList: []
    },
    mutations: {
        setValue(state, i) {
            state.i = i;
        },
        first(state, i) {
            state.z = i;
        },
        goodsValue(state, sum) {
            state.goods = sum;
        },
        scrol(state, scrol) {
            state.scrol = scrol;
        },
        list(state, list) {
            state.list = list;
        },
        index(state, index) {
            state.index = index;
        },
        ixmore(state, ix) {
            state.ix = ix;
        },
        add(state, product) {
            product.count++
        },
        sub(state, product) {
            product.count--
        },
        addCart(state, payload) {
            // let oldProduct = null;
            // for (let item of state.cartList) {
            //     if (item.name == payload.name) {
            //         oldProduct = item;
            //     }
            // }
            let oldProduct = state.cartList.find(item => item.name === payload.name)

            if (oldProduct) {
                oldProduct.count += 1
                Vue.set(oldProduct, 'counts', oldProduct.count)
            } else {
                payload.count = 1;
                Vue.set(payload, 'counts', payload.count)
                state.cartList.push(payload)
            }
            var newArr = state.newCartList
            state.newCartList = null
            state.newCartList = newArr
                // for (let i = 0; i < state.cartList.length; i++) {
                //     if (state.cartList.length > 1) {
                //         if (state.cartList[i].name == state.cartList[i + 1].name) {
                //             state.cartList[i].count++
                //                 state.newCartList.push(state.cartList[i])
                //         } else {
                //             state.cartList[i].count = 1
                //             state.cartList[i + 1].count = 1
                //             state.newCartList.push(state.cartList[i], state.cartList[i + 1])
                //         }
                //     }

            // }

            console.log(state.cartList);
        },
        addCurrentCounts(state, payload) {
            payload.oldProduct.currentCounts += payload.payload.currentCounts;
        },
        updateCounts(state, payload) {
            //1、查找到当前要修改的商品
            let oldProduct = state.shoppingCartGoods.find(item => {
                    return item.name === payload.item.name
                })
                //2、改变checked值
            oldProduct.count += payload.number;
        },


    },
    actions: {
        // addN(context, step) {
        //     setTimeout(() => {
        //         context.commit('addCart', step)
        //     }, 100)
        // }
    }
})