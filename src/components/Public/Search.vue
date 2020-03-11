<template>
 <div class="search">
   <input v-model="message" placeholder="edit me">
   <div class="searchBtn">搜索</div>
 </div>
</template>
<script>
/* eslint-disable no-new */
export default {
  name: 'Search',
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped>
.search{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  padding:8px 0;
  background: #03b7ec;
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
</style>
