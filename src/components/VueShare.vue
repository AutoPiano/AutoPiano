<style lang="less">
#share-section { display: inline-block; height: 50px; line-height: 50px; position: absolute; left: 1%;
  .social-share { display: inline-block;
    a { vertical-align: middle; }
  }
}
</style>

<template>
  <div id="share-section">
    <div
      class="social-share"
      data-title="自由钢琴 - AutoPiano"
      data-description="人生如音乐，欢快且自由。自由钢琴(AutoPiano)，让你听见内心的声音。"
      data-weibo-title="人生如音乐，欢快且自由。自由钢琴(AutoPiano)，让你听见内心的声音。"
      data-url="http://www.autopiano.cn"
      data-image="http://ws1.sinaimg.cn/large/e3e8443aly1g1vmo65ubnj20j60cs0td.jpg"
      data-wechat-qrcode-title="微信 Wechat"
      data-wechat-qrcode-helper="<p>微信扫一扫，打开网页</p><p>点击右上角，分享到朋友圈</p>"
    ></div>
  </div>
</template>

<script>
import { CDN_JSDELIVR_STATIC } from '@/config'
export default {
  name: 'VueShare',
  mounted() {
    window.refer = this.refer
    if (typeof window.socialShare === 'function') return
    if (window['__PRERENDER_INJECTED']) return

    setTimeout(() => {
      let d = document
      let e = d.getElementsByTagName('script')[0];
      let s = d.createElement('script')
      s.type = "text/javascript"
      s.async = true
      s.src = CDN_JSDELIVR_STATIC + 'js/social-share.min.js'
      e.parentNode.insertBefore(s, e);
    }, 0)
  }
}
</script>
