<template>
  <div class="tab-bar-item" @click='itemClick'>
    <!-- <div v-if="!isActive">
      <slot name="item-ico"></slot>
    </div>
    <div v-else>
      <slot name="item-ico-active"></slot>
    </div> -->
    <div :class="{active:isActive}">
      <slot name="item-text1"></slot>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String
    },
    data() {
      return {
        // isActive:true
      };
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    components: {},
    mounted() { },
    methods: {
      itemClick() {
        this.$router.replace(this.path).catch(err => { err })

      }
    }
  }
</script>
<style>
  .tab-bar-item {
    font-size: 15px;
    height: 38px;
    line-height: 38px;
    flex: 1;
    text-align: center;
  }

  .active {
    color: red;
  }
</style>