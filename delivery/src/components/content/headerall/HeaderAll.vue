<template>
  <div id="header">
    <div class="header-1">
      <div class="avatar">
        <img :src="mults.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ mults.name }}</span>
        </div>
        <div class="fz">
          {{ mults.description }}/{{ mults.deliveryTime }}分钟送达
        </div>
        <div v-if="mults.supports" class="support">
          <span class="icon"></span>
          <span class="text">{{ mults.supports[0].description }}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper" >
      <span class="bulletin-title"></span><span class="bulletin-text">{{ mults.bulletin }}</span>
    </div>
    <div class="background">
      <img :src="mults.avatar" width="100%" height="100%">
    </div>
      <div v-if="mults.supports" class="support-count">
        <span class="count">{{ mults.supports.length }}个</span>
      </div>
    
  </div>
</template>

<script>

  export default {
    name: "HeaderAll",
    props: {
      mults: Object,
      default() {
        return []
      }

    },
    data() {
      return {

      };
    },

    components: {},
    mounted() { },
    methods: {}
  }
</script>
<style scoped>
  .header-1 {
    color: #ffff;
    padding: 24px 12px 18px 24px;
    display: flex;
    
  }


  .avatar {
    display: inline-block;
    vertical-align: top;
  }

  .avatar img {
    width: 64px;
    height: 64px;
    border-radius: 2px;
  }

  .content {
    display: inline-block;
    margin-left: 16px;
  }

  .title {
    margin: 2px 0 8px 0
  }


  .name {
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;

  }

  .description {
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
  }
  .support-count{
    width: 49px;
    height: 24px;
    background-color: #ffff;
    line-height: 24px;
    font-size: 14px;
    border-radius: 25px;
    text-align: center;
    position: fixed;
    top: 70px;
    right: 15px;

   
  }
  
  .fz,.support{
    font-size: 14px;
  }
  .bulletin-wrapper {
    font-size: 14px;
    position: relative;
      height: 28px;
      line-height: 28px;
      padding: 0 22px 0 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background: rgba(7,17,27,.2);
    
  }
  .background {
    position: absolute;
      top: 0;
      left: 0;
      width: 100%;
     height: 134px;
      z-index: -1;
      filter: blur(10px) ;
  } 
     
     
</style>