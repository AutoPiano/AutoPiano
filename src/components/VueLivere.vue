<style lang="less">
// 伪隐身状态，待livere加载完后会自动显示
.livere-container { display: block; width: 80%; height: 0; margin: 0; padding: 0; visibility: hidden; background: rgba(255, 255, 255, .6); border-radius: 5px;
  iframe[title="livere"] { width: 100%; padding: 20px 15px; }
  a { color: #1296db; text-decoration: underline; }
  .discuss-title { font-size: 26px; padding-left: 25px; }
  .discuss-loading { padding-left: 15px; margin-top: 15px; color: #aaa; font-size: 14px; }
}
</style>

<template>
  <div id="lv-container" class="livere-container responsive-section-a" data-id="city" data-uid="MTAyMC80MzU0My8yMDA4Mg==">
    <!-- <h2 class="discuss-title">讨论区、歌谱贡献区</h2> -->
    <!-- <div class="discuss-loading">若加载失败，请&nbsp;<a href="//www.autopiano.cn/">刷新</a></div> -->

    <!-- www.autopiano.cn -->
    <!-- <iframe
      title="livere"
      src="https://was.livere.me/comment/city?id=city&refer=www.autopiano.cn%2F&uid=MTAyMC80MzU0My8yMDA4Mg%3D%3D&site=http%3A%2F%2Fwww.autopiano.cn%2F&title=%2525u81EA%2525u7531%2525u94A2%2525u7434%252520%25257C%252520AutoPiano&titleLength=16"
      scrolling="no"
      frameborder="0"
      id="lv-comment-688"
      style="min-width: 100%; width: 100px; height: 2553px; overflow: hidden; border: 0px; z-index: 124212;">
    </iframe> -->

    <!-- crystalworld.gitee.io/qpiano -->
    <!-- <iframe
      id="comment"
      name="comment"
      title="livere"
      src="https://was.livere.me/comment/city?id=city&refer=crystalworld.gitee.io%2Fqpiano%2F&uid=MTAyMC80MzU0My8yMDA4Mg%3D%3D&site=http%3A%2F%2Fcrystalworld.gitee.io%2Fqpiano%2F&title=%2525u81EA%2525u7531%2525u94A2%2525u7434%252520%25257C%252520AutoPiano&titleLength=16"
      scrolling="no"
      frameborder="0"
    >
    </iframe> -->
  </div>

</template>

<script>
export default {
  name: 'VueLivere',
  props: [ 'nodeBelowSelector' ],
  data() {
    return {
      mountTimer: null
    }
  },
  // 监听,当路由发生变化的时候执行
  watch:{
    $route(to,from){
      clearTimeout(this.mountTimer)
      this.mountTimer = null
      let lv = $('.livere-container')
      
      if (lv.css('visibility') == 'hidden') {
        this.delayChangeLiverePos()
      }
    }
  },
  created() {
    if (window.isMobile || window['__PRERENDER_INJECTED'] || typeof window.LivereTower === 'function') {
      return
    }
    this.setScript()
  },
  mounted() {
    this.delayChangeLiverePos()
  },
  methods: {
    setScript() {
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
    },
    delayChangeLiverePos() {
      let lv = $('.livere-container')
      let domBelow = $(`${this.nodeBelowSelector}`)
      if (!lv || !domBelow || lv.css('visibility') == 'visible') {
        return
      }
      this.mountTimer = setTimeout(() => {
        lv.insertBefore(domBelow)
        lv.css({
          margin: '50px auto 0',
          height: 'auto',
          visibility: 'visible'
        })
      }, 3000)
    }
  }
}
</script>

