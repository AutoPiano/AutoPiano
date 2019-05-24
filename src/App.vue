<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="less">
@import url('./assets/style/normalize.css');
@import url('./assets/style/icon.css');
@import url('./assets/style/variable.less');

::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background-color: #F5F5F5;
  display: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-touch-callout: none;  /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早期浏览器*/
  -moz-user-select: none;/*火狐*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

html, body {
  width: 100%;
  height: 100%;
  user-select: none;
  position: relative;
}
a {
  text-decoration: none;
  color: @textdark;
}

</style>
