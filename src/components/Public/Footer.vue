<template>
     <!--底部栏-->
  <div class="footer">
    <mt-tabbar v-model="selected">
        <mt-tab-item id="home">
          <img slot="icon" src="../../assets/img/index/whitebar1.png" />
          首页
        </mt-tab-item>
        <mt-tab-item id="list">
          <img slot="icon" src="../../assets/img/index/whitebar2.png" />
          列表
        </mt-tab-item>
        <mt-tab-item id="cart">
          <img slot="icon" src="../../assets/img/index/whitebar3.png" />
          购物车
        </mt-tab-item>
        <mt-tab-item id="my">
          <img slot="icon" src="../../assets/img/index/whitebar4.png" /> 我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
export default {
  name: 'Top',
  data() {
    return {
      selected: 'home'
    }
  },
  watch: {
    selected: function(newV, oldV) {
      this.$router.push({ name: newV })
    }
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 55px;
  position: relative;
}
</style>
