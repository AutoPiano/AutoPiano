<style lang="less">
@pblue: #1296db;
.page-footer { width: 100%; min-width: 1024px; height: 50px; line-height: 50px; background: rgba(255,255,255,0.5); position: fixed; bottom: 0; left: 0; right: 0; text-align: center;
  a {
    &:hover { color: #fff; background: @pblue; }
  }
  .record-info { font-weight: bold; font-size: 14px; }
  .footer-ul { height: 100%; position: absolute; right: 5%; top: 0;
    .footer-item { display: inline; list-style: none; position: relative; }
  }
  .support-container { width: 200px; height: 250px; position: absolute; top: -280px; left: 50%; transform: translateX(-60%); z-index: 200; background: rgba(255, 255, 255, 1);
    &::after { content: ''; width: 20px; height: 20px; position: absolute;  left: 50%; bottom: -10px; transform: translateX(-50%) rotate(45deg); z-index: 150; background: rgba(255, 255, 255, 1); }
    .tab-wrap { width: 100%; height: 60px;
      .tab { width: 50%; height: 100%; float: left; cursor: pointer;
        &.active-tab { border-bottom: solid 5px @pblue; }
        .icon { transform: scale(.5); transform-origin: 50% 0; margin-top: 14px; }
      }
    }
    .qrcode-wrap { width: 100%; padding: 12px 18px;
      .qrcode { width: 100%; }
    }
  }
}
</style>

<template>
  <div class="page-footer">
    <a href="http://www.miitbeian.gov.cn/" target="_blank" class="record-info">粤ICP备17147231号</a>
    |
    <a href="javascript:;" class="record-info">&copy;晶体世界 2018~2019</a>
    <ul class="footer-ul">
      <!--<li class="footer-item"><a href="//crystalworld.xin/apple/#/iphone_music" target="_blank">iPhone Music Player</a></li>-->
      <li class="footer-item"><a target="_blank" href="https://user-gold-cdn.xitu.io/2019/3/29/169c7b1d96fe33db?w=344&h=344&f=jpeg&s=75488">查地铁小程序</a></li>

      &nbsp;|&nbsp;
      <li class="footer-item"><a href="mailto:249662605@qq.com">邮件联系</a></li>
      &nbsp;|&nbsp;
      <li class="footer-item">
        <a href="javascript:;" @click="toggleSupportShow()">赞赏</a>
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
            <img class="qrcode wxpay" v-show="payType=='WXPAY'" src="static/imgs/wxqr.png"/>
            <img class="qrcode alipay" v-show="payType=='ALIPAY'"  src="static/imgs/aliqr.jpg"/>
          </div>
        </div>
      </li>
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
