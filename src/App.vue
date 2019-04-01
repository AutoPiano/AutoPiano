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
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="less">
@import url('./assets/style/normalize.css');
@import url('./assets/style/icon.css');

@pblue: #1296db;
@textdark: #2c3e50;

::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background-color: #F5F5F5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
