<template>
  <div id="app">
    <!--路由组件-->
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Public/Footer.vue'
export default {
  name: 'App',
  data() {
    return {
      selected: ''
    }
  },
  components: {Footer}

}
</script>

<style scoped>
#app {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}

</style>
