<template>
  <div id="goodsfoot">
    <div class="left">
      <div class="ico"><i class="iconfont">&#xe70b;</i></div>
      <div class="yuan">￥0元</div>
    </div>
    <div class="center">另需配送费￥4元</div>
    <div class="right">￥20元起送</div>
  </div>
</template>

<script>
export default {
  name:"GoodsFoot",
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>
<style scoped>
     @import '../../../assets/font_seudn08q78/iconfont.css';
    #goodsfoot{
      text-align: center;
      line-height: 56px;
      justify-content: space-between;
      display: flex;
        width: 100%;
        height: 56px;
        background-color: aqua;
        z-index: 1;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .iconfont{
      font-size: 50px;
    }
    .yuan{
      margin-left: 15px;
      font-size: 18px;
      font-weight: 600;
    }
    .left{
      display: flex;
      width: 130px;
      background: #141d27;
      font-size: 15px;
    color: rgba(255,255,255,0.4);
      
    }
    .center{
      background: #141d27;
    color: rgba(255,255,255,0.4);
      flex: 1;
      font-size: 15px;
    }
    .right{
      background: #00b43c;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
      width: 105px;
    }
    .ico{
      width: 56px;
      height: 56px;
      background: #2b343c;
      border-radius: 100px;
      position: relative;
      top: -12px;
      left: 15px;
    }

</style>