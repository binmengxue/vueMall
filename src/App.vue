<template>
  <div id="app">
    <div class="header-top">
      <!--顶部-->
      <mt-header title="首页">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>

    <!--路由组件-->
    <router-view />
    <!--底部栏-->
    <div class="footer">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="home">
          <img slot="icon" src="./assets/img/index/whitebar1.png" />
          首页
        </mt-tab-item>
        <mt-tab-item id="list">
          <img slot="icon" src="./assets/img/index/whitebar2.png" />
          列表
        </mt-tab-item>
        <mt-tab-item id="shopcart">
          <img slot="icon" src="./assets/img/index/whitebar3.png" />
          购物车
        </mt-tab-item>
        <mt-tab-item id="my">
          <img slot="icon" src="./assets/img/index/whitebar4.png" /> 我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selected: ''
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
#app {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
.header-top {
  height: 40px;
  position: relative;
  width: 100%;
}
.footer {
  width: 100%;
  height: 55px;
  position: relative;
}
</style>
