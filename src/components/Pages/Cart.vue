<template>
<div class="content">
  <Top  v-bind:htmlTitle="'购物车'" v-bind:isShow="false"/>
  <div class="main">
      <ul class="cartcont">
        <li v-for="(item,index) in cartList" :key="item.goodsId">
          <div class="li-top">
           <mt-switch v-model="item.isOpen" @click="isopenClick(index,item.isOpen)"></mt-switch>
            <img :src="item.img" />
            <p>{{item.name}}</p>
          </div>
          <div class="li-bottom">
            <div class="libtitle"> 价格：{{item.price}}</div>
            <div class="priceDiv">
              <div class="priceBtn" @click="reduceBtn(index,item.num)">-</div>
              <input class="priceInput" v-model="item.num" placeholder="1" type="number" />
              <div class="priceBtn" @click="addBtn(index,item.num)">+</div>
            </div>
          </div>
        </li>
      </ul>

  </div>
  <div class="settlementdiv">
        <mt-switch v-model="checkeds"></mt-switch>
        <p>合计:￥{{total}}元</p>
  </div>
</div>
</template>
<script>
/* eslint-disable no-new */
import Top from '../../components/Public/Top'
export default {
  name: 'Cart',
  components: {Top},
  data() {
    return {
      checkeds: false,
      cartList: [],
      total: 0,
      totalNumber: 0
    }
  },
  computed: {
    totalClick() {
      return this.total
    }
  },
  watch: {
    // 计算属性的 getter
    totalClick(newName, oldName) {
      console.log(newName)
      this.cartList.forEach(element => {
        if (element.isOpen) {
          this.total = element.price * element.num
          console.log(this.total)
          this.$forceUpdate()
        }
      })
    },
    deep: true
  },
  created() {
    if (this.$store.state.goodLists.length > 0) {
      this.cartList = this.$store.state.goodLists
    }
  },
  methods: {
    reduceBtn: function(index, number) {
      this.totalNumber = 0
      number--
      if (number <= 1) {
        number = 1
      }
      this.cartList[index].num = number
      this.cartList.forEach(element => {
        if (element.isOpen) {
          this.totalNumber = this.totalNumber + element.num
        }
      })
      this.$store.commit('acrtClick', this.totalNumber)
    },
    addBtn: function(index, number) {
      this.totalNumber = 0
      number++
      this.cartList[index].num = number
      this.cartList.forEach(element => {
        if (element.isOpen) {
          this.totalNumber = this.totalNumber + element.num
        }
      })
      this.$store.commit('acrtClick', this.totalNumber)
    },
    isopenClick: function(index, boole) {
      let ispen = !boole
      this.cartList[index].isOpen = ispen
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
.li-top,.li-bottom,.priceDiv{
  display: flex;
  align-content: center;
}
.li-bottom{
  justify-content: flex-end;
  padding-right:20px;
}
.li-top img{
  width:80px;
}
.li-top p{
  font-size: 12px;
  margin-left:10px;
  display: flex;
  align-items: center;
}
.li-bottom{
  margin-top:5px;
}
.li-bottom div{
  font-size: 12px;
}
.li-bottom div.libtitle{
  color:#f00;
  font-size: 14px;
  margin-right:20px;
}
.priceBtn{
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
.priceInput{
  width:40px;
  text-align: center;
  border:1px solid #c7c7c7;
  margin:0px 5px;
}
.mint-switch{
    transform: scale(0.6);
}
.settlementdiv{
  display: flex;
  padding:10px 10px;
  border-top:1px solid #e4e4e4;
  border-bottom:1px solid #e4e4e4;
  align-items: center;
}
.settlementdiv p{
  font-size: 16px;
  color:#f00;
}
</style>
