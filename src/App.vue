<template>
  <div id="app">
    <Header/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Footer/>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
  #app{
    width: 100%;
  }
</style>
