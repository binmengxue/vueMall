<template>
<div class="content">
  <div class="search">
   <input v-model.trim="message" placeholder="输入搜索文字"/>
   <div class="searchBtn" @click="inputClick()">搜索</div>
  </div>
  <mt-navbar v-model="selecteds">
    <mt-tab-item v-for="item in category" :key="item.mallCategoryId" v-bind:mallCategoryId="item.mallCategoryId"  v-bind:id="item.mallCategoryId">{{item.mallCategoryName}}</mt-tab-item>
  </mt-navbar>
  <div class="main">
    <div class="left">
       <ul class="left-Ul">
         <li :key="-1" :class='{ active:-1===number}' @click="navbarChildClick(-1,'','')"><p>全部</p></li>
         <li v-for="(item,index) in categoryChild" :key="item.mallSubId"   :class='{ active:index===number}' v-bind:mallCategoryId="item.mallCategoryId"  @click="navbarChildClick(index,item.mallCategoryId,item.mallSubId)"  >
            <p>{{item.mallSubName}}</p>
         </li>
      </ul>
    </div>
    <div class="right">
      <div class="rightMain" style="height:1100px">
        <ul class="navbarCont">
           <li  v-for="item in hotGoods" :key="item.goodsId" @click="detailClick(item)" >
             <img :src="item.image" />
             <div class="navbarCont-div">
              <p>商品名称：{{item.name}}</p>
              <p>价格：￥{{item.price}}元</p>
             </div>
           </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script>
/* eslint-disable no-new */
var listAry = []
export default {
  name: 'List',
  data() {
    return {
      message: '',
      selecteds: '1',
      category: [],
      categoryChild: [],
      hotGoods: [],
      number: -1
    }
  },
  components: {},
  created() {
    this.$axios
      .get('user')
      .then(res => {
        this.category = res.data.data.category
        this.categoryChild = res.data.data.category[0].bxMallSubDto
        listAry = res.data.data.hotGoods
        this.hotGoods = listAry
      })
      .catch(err => {
        console.log('轮播图异常' + err)
      })
  },
  watch: {
    selecteds: function (val, oldVal) {
      let newArr = this.category.filter(function (obj) {
        return obj.mallCategoryId == val
      })
      this.categoryChild = newArr[0].bxMallSubDto
      this.number = -1
    }
  },
  methods: {
    inputClick: function() {
      console.log(this.message)
    },
    navbarChildClick: function(index, narId, id) {
      this.number = index
      if (this.number == -1) {
        this.hotGoods = listAry
      } else {
        if (narId == 1) {
          let newArr = listAry.filter(function (obj) {
            return obj.mallCategoryId == narId
          })
          this.hotGoods = newArr
        } else {
          this.hotGoods = listAry
        }
      }
    },
    detailClick: function(item) {
      this.$router.push({ name: 'listdetail', query: {obj: item}})
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
.search{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  padding:8px 0;
  background: #03b7ec;
  position: relative;
  width: 100%;
}
.search input{
  width:70%;
  height: 30px;
  background: #fff;
  line-height:30px;
  padding-left:10px;

}
.searchBtn{
  height: 30px;
  line-height: 30px;
  padding:0px 10px;
  background: #fff;
  margin-left:10px;
  border-radius: 3px;
  font-size:14px;
  color:#03b7ec;
  text-align: center;
}
.main{
flex-direction:row;
overflow: hidden;
border-top:1px solid #f3f3f3;
}
.left{
  width:100px;
 background: #f1f1f1;
  position: relative;
}
.right{
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
    width:0;
    overflow: hidden;
}
.rightMain{
  overflow: scroll;

}
.mint-navbar .mint-tab-item.is-selected{
   margin-bottom:0px;
   border-bottom: 1px solid #26a2ff;
}
.left-Ul li{
  text-align: center;
  font-size: 12px;
  height:30px;
  line-height:30px;
}
.left-Ul li.active{
   background: #d4d4d4;
}
.navbarCont{
  margin-top:10px;
}
.navbarCont li{
  display: flex;

}
.navbarCont li img{
  width:60px;

}
.navbarCont li div{
  padding:0 10px;
}
.navbarCont li div p{
  font-size: 12px;
}
.navbarCont li div p:last-child{
  color:#ff0000;
}
</style>
