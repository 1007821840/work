<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>
<style>
  .tab-bar-item {
    height: 38px;
    flex: 1;
    text-align: center;


  }

  #tab-bar {
    z-index: 1;
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    top: 138px;
    left: 0;
    right: 0;
   
    box-shadow: 10px 10px 10px rgba(red, green, blue, alpha);
  }
</style>