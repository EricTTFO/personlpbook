<template>
  <header class="header">
    <h1>MM影视</h1>
    <!-- <div id="nav">
      <router-link to='/'>首页</router-link>
      <router-link to='/about'>关于</router-link>
    </div> -->
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>
<style scoped lang="scss">
  .header{
    // width: 100%;
    background: #333;
    color: #fff;
    text-align: center;
    padding: 20px;
  }
  .header a{
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>
