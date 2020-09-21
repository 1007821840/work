<template>
  <div id="app">
    <div @click="apps">
    {{$store.state.count}}
    </div>
    <add/>
    <sub-new/>
    
  </div>
</template>
<script>
  import Add from '@/components/Add.vue';
  import SubNew from '@/components/SubNew.vue';
  
 

export default {
  name: 'App',
  components: {
    Add,
    SubNew
  },
  methods:{
    apps(){
      this.$store.commit('add')
    }

  }
}
</script>

<style>

</style>
