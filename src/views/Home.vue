<template>
  <!-- <PersonlPBook/> -->
  <div class="Home">
    <!-- <ul>
      <li v-for="(name, index) in svgName" :key="index">
        <svg-icon :iconClass="name"></svg-icon>
      </li>
    </ul> -->
    <PersonlPBook/>
  </div>
</template>

<script>
// @ is an alias to /src
import PersonlPBook from "@/components/PersonlPBook.vue";
export default {
  name: "Home",
  data() {
    return {
      svgName: ["user", "password", "email"]
    };
  },
  components: {
    // PersonlPBook
    // Footer,
  }
};
</script>
<style lang="scss" scoped>
.Home {
  text-align: center;
  background: red;
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 2;
  }
}
</style>

