<style lang="less">
@import url('../assets/style/variable.less');
.page-footer { width: 100%; min-width: 1024px; height: 50px; line-height: 50px; background: rgba(255,255,255,0.8); border-top: solid 1px #ccc; position: fixed; bottom: 0; left: 0; right: 0; text-align: center;
  .record-info { font-weight: bold; font-size: 14px; }
  .footer-ul { height: 100%; position: absolute; right: 5%; top: 0;
    .footer-item { display: inline; list-style: none; position: relative; }
  }
  // a.support-txt { font-style: italic; }
  a.info-txt { color: @pred; }
  a {
    &:hover { color: #fff; background: @pblue; }
  }
  .support-container { width: 200px; height: 260px; position: absolute; top: -300px; left: 50%; transform: translateX(-55%); z-index: 200; background: rgba(255, 255, 255, 1); box-shadow: 1px 1px 10px 1px #ddd;
    &::after { content: ''; width: 20px; height: 20px; position: absolute;  left: 50%; bottom: -10px; transform: translateX(-50%) rotate(45deg); z-index: 150; background: rgba(255, 255, 255, 1); }
    .tab-wrap { width: 100%; height: 60px;
      .tab { width: 50%; height: 100%; float: left; cursor: pointer;
        &.active-tab { border-bottom: solid 5px @pblue; }
        .icon { transform: scale(.5); transform-origin: 50% 0; margin-top: 14px; }
      }
    }
    .qrcode-wrap { width: 100%; padding: 12px 18px;
      .money { width: 100%; height: 14px; line-height: 14px; font-size: 14px; margin: 0; }
      .qrcode { width: 100%; }
    }
  }
}
</style>

<template>
  <div class="page-footer">
    <!--<a href="http://www.miitbeian.gov.cn/" target="_blank" class="record-info">粤ICP备17147231号</a>
    |-->
    <a target="_blank" href="//www.autopiano.cn" class="record-info">AutoPiano &copy; 2018~2019</a>
    <ul class="footer-ul">
      <!--<li class="footer-item"><a href="//crystalworld.xin/apple/#/iphone_music" target="_blank">iPhone Music Player</a></li>-->
      <li class="footer-item"><a target="_blank" href="https://www.yuque.com/lnexttickl/sfsqc5/ifz93n" class="info-txt">使用指南</a></li>
      &nbsp;|&nbsp;
      <li class="footer-item"><a target="_blank" href="https://i.loli.net/2019/05/15/5cdaf0d79ceef22845.jpg">查地铁小程序</a></li>


      &nbsp;|&nbsp;
      <li class="footer-item">
        <a href="javascript:;" @click="toggleSupportShow()" class="support-txt">赞赏支持</a>
        <div class="support-container" v-show="supportShow">
          <div class="tab-wrap">
            <div class="tab" :class="{'active-tab': payType=='WXPAY'}" @click="togglePayType('WXPAY')">
              <i class="icon icon-wxpay"></i>
            </div>
            <div class="tab" :class="{'active-tab': payType=='ALIPAY'}" @click="togglePayType('ALIPAY')">
              <i class="icon icon-alipay"></i>
            </div>
          </div>
          <div class="qrcode-wrap">
            <div class="money">自由钢琴，感谢有你</div>
            <img class="qrcode wxpay" v-show="payType=='WXPAY'" src="/static/imgs/wxqr.png"/>
            <img class="qrcode alipay" v-show="payType=='ALIPAY'"  src="/static/imgs/aliqr.jpg"/>
          </div>
        </div>
      </li>
      &nbsp;|&nbsp;
      <li class="footer-item"><a href="mailto:249662605@qq.com">邮件联系</a></li>
    </ul>


  </div>
</template>

<script>
export default {
  name: 'PageFooter',
  data() {
    return {
      supportShow: false,
      payType: 'ALIPAY'
    }
  },
  methods: {
    togglePayType (type) {
      this.payType = type
    },
    toggleSupportShow() {
      this.supportShow = !this.supportShow
    }
  }
}
</script>
