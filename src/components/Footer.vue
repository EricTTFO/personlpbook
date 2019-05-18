<template>
  <footer class="footer">
    <router-link v-for="(subNav, index) in nav" :key="index" exact>
      <icon :name="subNav.icon"></icon>
      <p>{{ subNav.name }}</p>
    </router-link>
  </footer>
</template>

<script>
// import
export default {
  data() {
    return {
      svgName: ["user", "password", "email"]
    };
  }
};
</script>

<style scoped lang="scss" >
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1001;
  background-color: #ffffff;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #f8f8f8;
  padding: 0 40px;
  padding-top: 4px;
  box-shadow: 0 0 5px 0 hsla(0, 6%, 78%, 0.3);

  .subNav {
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    a {
      font-size: 24px;
      color: #333;
      padding: 10px 0;

      svg {
        font-size: 38px;
      }

      p {
        margin-top: 10px;
      }
    }
  }

  .router-link-active {
    svg,
    p {
      color: red;
    }
  }
}
</style>
