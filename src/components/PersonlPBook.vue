<template>
  <div class="container">
    <div class="item header">
      <div class="logo">标志</div>
      <div class="nav">
        导航
        <div class="subNav">子导航</div>
      </div>
      <div class="loginBar">登陆条</div>
    </div>
    <div class="main">
      <div class="sideBar_lf">左侧栏</div>
      <div class="main_center">
        <div class="search">搜索</div>
        <div class="scroll">
          滚动
          <div class="banner">
            滚动图片
            <div class="scroll_lf">左滚动</div>
            <div class="scroll_rt">右滚动</div>
          </div>
        </div>
      </div>
      <div class="sideBar_rt">右侧栏</div> 
       <div class="content"> 
         内容
        <div class="contentItem contentItem_one">
          1
        </div>
        <div class="contentItem contentItem_two">
          2
        </div>
        <div class="contentItem contentItem_three">
          3
        </div>
        <div class="contentItem_four">
          4
        </div>
      </div>
    </div>
    <div class="singleInfo" v-for="(singleInfo,index) in allTelInfo" :key="index">
      <!-- <label for>ID:</label> -->
      <!-- <span>{{ singleInfo.id }}</span> -->
      <!-- <label for>名字:</label> -->
      <!-- <span>{{ singleInfo.completed }}</span> -->
      <!-- <label for>账户:</label> -->
      <span>{{ singleInfo.title }}</span>
      <!-- <label for>邮箱:</label> -->
      <!-- <span>{{ singleInfo.userId }}</span> -->
      <!-- <label for>地址:</label>
      <span>{{ singleInfo.address }}</span>
      <label for>网页:</label>
      <span>{{ singleInfo.website }}</span>
      <label for>公司:</label>
      <span>{{ singleInfo.company }}</span> -->
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  .singleInfo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
}
@media (max-width: 500px) {
  .singleInfos {
    grid-template-columns: 1fr;
  }
}
</style>
