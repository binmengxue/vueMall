<template>
 <div class="header-top">
    <!--顶部-->
    <mt-header v-bind:title=htmlTitle >
      <router-link to="" slot="left" v-show=isShow >
        <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
      </router-link>
    </mt-header>
 </div>
</template>
<script>
/* eslint-disable no-new */
export default {
  name: 'Top',
  data() {
    return {

    }
  },
  props: {
    isShow: Boolean,
    htmlTitle: String
  },
  created() {

  }

}
</script>

<style scoped>
.header-top {
  height: 40px;
  position: relative;
  width: 100%;
}
</style>
