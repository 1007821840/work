<template>
  <div id="app">
    <header-all :mults="mult"/>
    <main-tab-bar/>
    <router-view/>
    
  </div>
</template>

<script>
  import { getSYMultidata } from '@/network/data.js'
  import MainTabBar from '@/components/content/mainTabbar/MainTabBar'
  import HeaderAll from '@/components/content/headerall/HeaderAll'

export default {
  name: 'App',
  data(){
    return{
      mult:{}

    }

  },
  created(){
    getSYMultidata().then(res => {
     this.mult=res.seller;
    })
},
  components: {
    MainTabBar,
    HeaderAll
  }
}
</script>

<style>
 @import "./assets/base.css";
 body {  
  width: 100vw;  
  overflow: hidden;  
  padding-left: calc(100vw - 100%);  
}  
</style>
