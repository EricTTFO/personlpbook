<template>
  <div class="container">
    <!-- <div class="item header">
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
      <div class="sideBar_rt">右侧栏</div> -->
      <!-- <div class="content"> -->
        <!-- 内容 -->
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
      <!-- </div>
    </div>
    <div class="singleInfo" v-for="(singleInfo,index) in allTelInfo" :key="index">
      <label for>ID:</label>
      <span>{{ singleInfo.id }}</span>
      <label for>名字:</label>
      <span>{{ singleInfo.name }}</span>
      <label for>账户:</label>
      <span>{{ singleInfo.username }}</span>
      <label for>邮箱:</label>
      <span>{{ singleInfo.email }}</span>
      <label for>地址:</label>
      <span>{{ singleInfo.address }}</span>
      <label for>网页:</label>
      <span>{{ singleInfo.website }}</span>
      <label for>公司:</label>
      <span>{{ singleInfo.company }}</span>
    </div> -->
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
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  .contentItem_one{
    grid-area: a;
    background: red;
  }
  .contentItem_two{
    grid-area: b;
    background: deepskyblue;
  }
  .contentItem_three{
    grid-area: c;
    background: deeppink;
  }
  .contentItem_four{
    grid-area: d;
    background: deeppink;
  }
  grid-template-areas: 
    "a a a a"
    "b b . c"
    "d d d d";
}
// .container {
//   display: grid;
//   // grid-template-columns: repeat(4 1fr);
//   // grid-template-columns: 25% 25% 25% 25% ;
//   // grid-template-rows: auto;
//   grid-template-areas:
//   // 'a b c'，
//   // 'a a a'，
//   // "a a a b b c c c"
//   ". a . b b . c .";
//   .contentItem_one{
//     grid-area: a;
//     background: red;
//   }
//   .contentItem_two{
//     grid-area: b;
//     background: deepskyblue;
//   }
//   .contentItem_three{
//     grid-area: c;
//     background: deeppink;
//   }
  
//   .singleInfo {
//     border: 1px solid #ccc;
//     background: #41b883;
//     padding: 1rem;
//     border-radius: 5px;
//     text-align: center;
//     position: relative;
//     cursor: pointer;
//   }
// }
// @media (max-width: 500px) {
//   .singleInfos {
//     grid-template-columns: 1fr;
//   }
// }
</style>
