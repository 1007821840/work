<!--  -->
<template>
  <div class="top-view">
    <div class="top">
      <div class="top-left">
        <span class="name">{{ seller.name }}</span>
        <div class="score">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTRGNkRGNzA2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTRGNkRGNzE2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NEY2REY2RTZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NEY2REY2RjZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpQH5+oAAAHMSURBVHjaxJe/TgJBEMY5pVBrQAspiVpoAY2CxEJ7CxJDZbkJBVpowxvYQGJiI6WNIYRXIDERHsCOQKGxIIJUFKhB1283gyHk0Lu5O5zkxy7772N2Z+cOQ177uLanP4W840z2+/h2QiVLeI4pGgaHmqIRnqVwBswTGc4CBuOMF8AzCND3V70DQr557XF6TNRH9fQstjprsc1V4TiImrRHEWRxL4WzzD5HwhGQ+qU/Ba8jdqJ6G2UILIMg1UNUH7UF6epYsU/QJV6o7BCjto6fksENXRM3TP3AFWLTpF9du2O11WVwAHo+762ntYQsj864BnZAy0PRltYQsjYZXE26LnUPROt6bSGb06K6S9tecVG0Qtvb/es6DcARyLsgmtdrCTmw+jz+AufgEVwyEo2afwrBK24CKYIPhqfvNJeduaLM+704JadbFk46ON9dJ8IJB8KJ/xJme7w+8aYxbg90DEmqm1kAT6s1jrCZt31wBmLgnohRW9+O13M2tqoElAcFMPxpFXIICtRXsnpUVjxugH16oWtPHS1kG6RpbIPrsXoBWAU5sAWqlkNKyCrNyek1ikbIzl8YlQA2wBMrnoVU2e4Corcol8yGfAswAGyVaSErvYjsAAAAAElFTkSuQmCC"
            alt=""
            v-for="i in star"
            :key="i"
          />
          <span class="count">({{ seller.ratingCount }})</span>
          <span class="sell">月售{{ seller.sellCount }}单</span>
        </div>
      </div>
      <div class="top-right">
         <img src="@/assets/img/tick.svg" alt="" />
        <span>收藏</span>
      </div>
    </div>
    <div class="goods">
      <ul class="remark">
        <li>
          <span>起送价</span>
          <p>
            <span>{{ seller.minPrice }}</span
            >元
          </p>
        </li>
        <li>
          <span>商家配送</span>
          <p>
            <span>{{ seller.deliveryPrice }}</span
            >元
          </p>
        </li>
        <li>
          <span>平均配送时间</span>
          <p>
            <span>{{ seller.deliveryTime}}</span
            >分钟
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopView",
  props: {
    seller: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      star: 5,
    };
  },
};
</script>
<style  scoped>
.top-view {
  position: relative;
  padding: 18px 18px 0 18px;
  border-bottom: 20px solid rgba(7,17,27,0.1);
}
.top {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
}
.top-left {
  margin: 2vw 2vw 4vw;
}
.top-right {
  margin: 4vw;
  text-align: center;
}
.top-right img {
  background-color: pink;
  width: 6vw;
  height: 6vw;
  border-radius: 50%;
}
.top-left img {
  width: 4vw;
  height: 4vw;
}
.name {
  padding-bottom: 3vw;
  display: block;
  font-size: 4vw;
  color: #000;
}

.sell {
  font-size: 3.5vw;
  padding-left: 2vw;
}
.count {
  font-size: 3.5vw;
  padding-left: 2vw;
}
.top-right span {
  display: block;
  font-size: 4vw;
  margin-top: 1vw;
}
ul {
  display: flex;
  padding: 18px;
}
li {
  flex: 1;
  text-align: center;
  border-right: 1px solid rgba(7, 17, 27, 0.1);
}
ul li:nth-child(3){
  border: 0;
}
li>span {
  font-size: 3vw;
}
li p {
  margin-top: 2vw;
}
li p span {
  font-size: 8vw;
  color: #000;
  /* font-weight: 700; */
}
</style>