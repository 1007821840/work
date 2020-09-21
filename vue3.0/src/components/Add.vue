<template>
  <div @click="adds">++
      {{count}}
  </div>
</template>

<script>
    import {mapState} from 'vuex'
export default {
  name:"Add",
  data () {
    return {
      
    };
  },
  computed:{
      ...mapState(['count'])

  },
  components: {},
  mounted () {},
  methods: {
      adds(){
          console.log('1');
        //   this.$store.commit('add')
      }
  }
}
</script>
<style scoped>
</style>