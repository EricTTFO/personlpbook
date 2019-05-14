<template>
  <div class="container">
    <div class="singleInfo" v-for="(singleInfo,index) in allTelInfo" :key="index">
        <label for="">ID:</label>
        <span>{{ singleInfo.id }}</span>
        <label for="">名字:</label>
        <span>{{ singleInfo.name }}</span>
        <label for="">账户:</label>
        <span>{{ singleInfo.username }}</span>
        <label for="">邮箱:</label>
        <span>{{ singleInfo.email }}</span>
        <label for="">地址:</label>
        <span>{{ singleInfo.address }}</span>
        <label for="">网页:</label>
        <span>{{ singleInfo.website }}</span>
        <label for="">公司:</label>
        <span>{{ singleInfo.company }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PersonlPBook",
  computed: mapGetters(["allTelInfo"]),
  methods: {
    ...mapActions(["pullInterface"])
  },
  created() {
    this.pullInterface();
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  .singleInfo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    label{
        display: inline-block;
        width: 100%;
    }
    span{
        display: inline-block;
        width: 100%
    }
  }
}
@media (max-width: 500px) {
  .singleInfos {
    grid-template-columns: 1fr;
  }
}
</style>
