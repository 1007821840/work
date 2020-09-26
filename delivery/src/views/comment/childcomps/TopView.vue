<!--  -->
<template>
  <div class="top-view">
    <div class="top-left">
      <h2>{{ seller.score }}</h2>
      <div class="title">综合评分</div>
      <div class="rank">高于周边商家{{ seller.rankRate }}%</div>
    </div>
    <div class="top-right">
      <div class="service">
        <span>服务态度</span>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTRGNkRGNzA2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTRGNkRGNzE2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NEY2REY2RTZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NEY2REY2RjZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpQH5+oAAAHMSURBVHjaxJe/TgJBEMY5pVBrQAspiVpoAY2CxEJ7CxJDZbkJBVpowxvYQGJiI6WNIYRXIDERHsCOQKGxIIJUFKhB1283gyHk0Lu5O5zkxy7772N2Z+cOQ177uLanP4W840z2+/h2QiVLeI4pGgaHmqIRnqVwBswTGc4CBuOMF8AzCND3V70DQr557XF6TNRH9fQstjprsc1V4TiImrRHEWRxL4WzzD5HwhGQ+qU/Ba8jdqJ6G2UILIMg1UNUH7UF6epYsU/QJV6o7BCjto6fksENXRM3TP3AFWLTpF9du2O11WVwAHo+762ntYQsj864BnZAy0PRltYQsjYZXE26LnUPROt6bSGb06K6S9tecVG0Qtvb/es6DcARyLsgmtdrCTmw+jz+AufgEVwyEo2afwrBK24CKYIPhqfvNJeduaLM+704JadbFk46ON9dJ8IJB8KJ/xJme7w+8aYxbg90DEmqm1kAT6s1jrCZt31wBmLgnohRW9+O13M2tqoElAcFMPxpFXIICtRXsnpUVjxugH16oWtPHS1kG6RpbIPrsXoBWAU5sAWqlkNKyCrNyek1ikbIzl8YlQA2wBMrnoVU2e4Corcol8yGfAswAGyVaSErvYjsAAAAAElFTkSuQmCC" alt="" v-for="i in star" :key="i">

      </div>
      <div class="goods">
        <span>产品评分</span>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTRGNkRGNzA2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTRGNkRGNzE2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NEY2REY2RTZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NEY2REY2RjZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpQH5+oAAAHMSURBVHjaxJe/TgJBEMY5pVBrQAspiVpoAY2CxEJ7CxJDZbkJBVpowxvYQGJiI6WNIYRXIDERHsCOQKGxIIJUFKhB1283gyHk0Lu5O5zkxy7772N2Z+cOQ177uLanP4W840z2+/h2QiVLeI4pGgaHmqIRnqVwBswTGc4CBuOMF8AzCND3V70DQr557XF6TNRH9fQstjprsc1V4TiImrRHEWRxL4WzzD5HwhGQ+qU/Ba8jdqJ6G2UILIMg1UNUH7UF6epYsU/QJV6o7BCjto6fksENXRM3TP3AFWLTpF9du2O11WVwAHo+762ntYQsj864BnZAy0PRltYQsjYZXE26LnUPROt6bSGb06K6S9tecVG0Qtvb/es6DcARyLsgmtdrCTmw+jz+AufgEVwyEo2afwrBK24CKYIPhqfvNJeduaLM+704JadbFk46ON9dJ8IJB8KJ/xJme7w+8aYxbg90DEmqm1kAT6s1jrCZt31wBmLgnohRW9+O13M2tqoElAcFMPxpFXIICtRXsnpUVjxugH16oWtPHS1kG6RpbIPrsXoBWAU5sAWqlkNKyCrNyek1ikbIzl8YlQA2wBMrnoVU2e4Corcol8yGfAswAGyVaSErvYjsAAAAAElFTkSuQmCC" alt="" v-for="i in star" :key="i">
      
      </div>
      <div class="delivery-wrapper">
        <span class="title">送达时间</span>
        <span class="delivery">{{ seller.deliveryTime }}分钟</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopView",
  components:{
  },
  props: {
    comment: {
      type: Array,
      default() {
        return [];
      },
    },
    seller: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data(){
    return {
      star:5
    }
  }
};
</script>
<style  scoped>
.top-view {
  display: flex;
  border-bottom: 20px solid rgba(7,17,27,0.1);
  
}
.top-left {
  margin: 4vw 0 0 4vw;
  text-align: center;
  border-right: 1px solid #cccccc;
  padding-right: 4vw;
}
.top-left h2 {
  color: orange;
  padding: 2vw;
}
.top-left .title {
  margin-bottom: 2vw;
  font-size: 4vw;
  color: #000;
}
.top-left .rank {
  font-size: 3vw;
}
.service img  {
width: 15px;
height: 15px;
}
.service {
  margin: 4vw 6vw;
}
.service span {
  margin-right: 2vw;
  color: #000;
  font-size: 3.5vw;
}
.goods {
  margin:0 6vw;
}
.goods span {
  margin-right: 2vw;
  color: #000;
  font-size: 3.5vw;
}
.goods img {
  width: 15px;
  height: 15px;
}
.delivery-wrapper {
  margin: 4vw 6vw;
}
.title {
  margin-right: 2vw;
  color: #000;
  font-size: 3.5vw;
}
.delivery {
  font-size: 3vw;
}
</style>