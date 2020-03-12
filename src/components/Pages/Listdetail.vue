<template>
<div class="content">
  <Top  v-bind:htmlTitle="'商品详情'" v-bind:isShow="true"/>
  <div class="main detailDiv">
   <img :src="hotGoodsDetail.image" />
   <h2>商品标题</h2>
   <p>{{hotGoodsDetail.name}}</p>
   <h2 style="margin-top:10px;">商品详情</h2>
   <p>{{hotGoodsDetail.name}}</p>
   <h2 style="margin-top:10px;color:#f00">价格:￥{{hotGoodsDetail.price}}元</h2>
   <div class="jisuanDiv">
     数量：
     <div class="btnClick" @click="reduce()">-</div>
     <input v-model="number" placeholder="1"  type="number">
     <div class="btnClick" @click="add()"> +</div>
     <transition v-on:after-enter="afterEnter" name="bounce">
       <div class="call" v-if="isBall"></div>
     </transition>

   </div>
   <div class="addCart" @click="addCart()">添加购物车</div>
  </div>
</div>
</template>
<script>
/* eslint-disable no-new */
import Top from '../../components/Public/Top'
export default {
  name: 'Listdetail',
  components: {Top},
  data() {
    return {
      hotGoodsDetail: {},
      number: 1,
      isBall: false
    }
  },
  created() {
    this.hotGoodsDetail = this.$route.query.obj
  },
  watch: {

  },
  methods: {
    // 数量--
    reduce: function() {
      this.number--
      if (this.number === 1) {
        this.number = 1
      }
    },
    // 数量++
    add: function() {
      this.number++
    },
    afterEnter: function() {
      this.isBall = false
    },
    addCart: function() {
      this.isBall = true
      this.$store.commit('cartnumberClick', this.number)
      var obj = {}
      obj.id = this.hotGoodsDetail.goodsId
      obj.img = this.hotGoodsDetail.image
      obj.name = this.hotGoodsDetail.name
      obj.price = this.hotGoodsDetail.price
      obj.isOpen = true
      obj.num = this.number
      this.$store.commit('goolists', obj)
      // let objnew = Object.keys(this.$store.state.goodLists)获取属性
    }
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
.detailDiv{
  text-align: center;
  padding:0px 10px;
}
.detailDiv img{
   width:70%;
   margin:20px auto;

}
.detailDiv h2{
  text-align: left;
  font-size: 14px;
}
.detailDiv p{
  text-align: left;
  font-size: 12px;
}
.btnClick{
    font-size:14px;
    border: 1px solid #c7c7c7;
    color: #a4a7a4;
    height: 20px;
    line-height: 20px;
    width: 25px;
    text-align: center;
    background: #ffffff;
    border-radius: 3px;
}
.jisuanDiv{
  text-align: left;
  margin-top:10px;
  display: flex;
  position: relative;
}
.jisuanDiv input{
  width:40px;
  text-align: center;
  border:1px solid #c7c7c7;
  margin:0px 5px;
}
.addCart{
  background:#26a2ff;
  font-size: 14px;
  color:#fff;
  width:80%;
  height:40px;
  line-height: 40px;
  margin:30px auto;
  border-radius: 4px;
}
.call{
  position: absolute;
  width:16px;
  height:16px;
  border-radius: 8px;
  background: crimson;
  left:95px;
  top:2px;
}
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
   animation: bounce-out 1s;
}
@keyframes bounce-in {
  0% {
    transform: translate(0px,20px);
  }
  50% {
    transform: translate(100px,100px);
  }
  100% {
    transform: translate(200px,200px);
  }
}
@keyframes bounce-out {
  0% {
    transform: translate(200px,200px);
  }
  100% {
    transform: translate(200px,400px);
  }
}
</style>
