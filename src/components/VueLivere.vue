<style lang="less">
// 伪隐身状态，待livere加载完后会自动显示
#lv-container { width: 80%; height: auto; margin: 35px auto; padding: 0; background: rgba(255, 255, 255, .6); border-radius: 5px; border: none;
  iframe[title="livere"] { padding: 20px 15px; }
  a { color: #1296db; text-decoration: underline; }
  .discuss-title { font-size: 26px; padding-left: 10px; }
  .discuss-loading { padding-left: 15px; margin-top: 15px; color: #aaa; font-size: 14px; }
}
</style>

<template>
  <div id="lv-container" data-id="city" data-uid="MTAyMC80MzU0My8yMDA4Mg==">
    <!-- <h2 class="discuss-title">讨论区、歌谱贡献区</h2> -->
    <!-- <div class="discuss-loading">若加载失败，请&nbsp;<a href="//www.autopiano.cn/">刷新</a></div> -->
  </div>
</template>

<script>
export default {
  name: 'VueLivere',
  mounted() {
    if (isMobile) return
    if (typeof window.LivereTower === 'function') return
    if (window['__PRERENDER_INJECTED']) return
    setTimeout(() => {
      let d = document;
      let e = d.getElementsByTagName('script')[0];
      let s = d.createElement('script');
      s.type = "text/javascript";
      s.async = true;
      s.src = '//cdn-city.livere.com/js/embed.dist.js';
      // s.src = '/static/js/livere.min.js';
      e.parentNode.insertBefore(s, e);
    }, 0)
  }
}
</script>

