<template>
<div class="content">
  <Top  v-bind:htmlTitle="'首页'" v-bind:isShow="false"/>
  <div class="main">
    <mt-swipe :auto="4000" class="imgswiper" style="height:150px;">
      <mt-swipe-item v-for="item in swipeimgs" :key="item.goodsId">
        <img :src="item.image" alet=" " />
      </mt-swipe-item>
    </mt-swipe>
    <ul class="ulIco">
      <li v-for="item in category" :key="item.mallCategoryId">
        <a>
          <img :src="item.image" alt="" />
          <p>{{ item.mallCategoryName }}</p>
        </a>
      </li>
    </ul>
    <div class="ad-banner">
      <img :src="adBanner.PICTURE_ADDRESS" width="100%" />
    </div>
    <div class="tjshoop">推荐商品</div>
    <ul class="tjUlimg">
      <li v-for="item in recommendGoods" :key="item.goodsId">
        <img :src="item.image" alt="" />
        <p>{{ item.goodsName }}</p>
        <p>价格：{{ item.price }}元</p>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
/* eslint-disable no-new */
import Top from '../../components/Public/Top'
export default {
  name: 'Home',
  components: {Top},
  data() {
    return {
      swipeimgs: [], // 轮播图
      category: [], // ico
      adBanner: '', // bananer
      recommendGoods: []
    }
  },
  created() {
    this.$axios
      .get('user')
      .then(res => {
        this.swipeimgs = res.data.data.slides
        this.category = res.data.data.category
        this.adBanner = res.data.data.advertesPicture
        this.recommendGoods = res.data.data.recommend
      })
      .catch(err => {
        console.log('轮播图异常' + err)
      })
  }
}
</script>

<style scoped>
.content{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow: hidden;;
    height: 0;
}
.mint-swipe {
  overflow: initial;
}
.imgswiper img {
  width: 100%;
}
.ulIco,
.tjUlimg {
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
}
.ulIco li {
  width: 20%;
}
.tjUlimg li {
  width: 50%;
  text-align: center;
  margin-bottom:20px;
}
.ulIco li img {
  width: 50px;
}
.tjUlimg li img {
  width:70%;
}
.tjUlimg li p{
  font-size: 12px;
}
.ulIco li p {
  font-size: 12px;
  margin-top: 5px;
}
.ad-banner {
  margin: 10px 0;
}
.tjshoop {
  padding: 10px 0 10px 10px;
  font-size: 16px;
  text-align: left;
  background: #eaeaea;
  color: #3899ec;
}
</style>
