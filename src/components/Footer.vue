<style lang="less">
@import url('../assets/style/variable.less');
.component-page-footer { width: 100%; min-width: 1280px; height: 40px; line-height: 40px; background: rgba(255,255,255,.8); border-top: solid 1px #ccc; position: fixed; bottom: 0; text-align: center;
  .footer-ul { width: auto; height: 100%;
    .footer-item { display: inline; list-style: none; position: relative;
      a {
        &:hover { color: #fff; background: @c-blue; }
      }
      a.em { color: @c-red;
        &:hover { color: #fff; background: @c-red; }
      }
    }
  }
  .footer-ul.left-section { float: left; margin-left: 5%; }
  .footer-ul.right-section { float: right; margin-right: 5%; }

  .popup-container { width: 200px; height: 260px; position: absolute; top: -285px; left: 50%; transform: translateX(-50%); z-index: 200; background: rgba(255, 255, 255, 1); box-shadow: 1px 1px 10px 1px #ddd;
    &::after { content: ''; width: 20px; height: 20px; position: absolute;  left: 50%; bottom: -10px; transform: translateX(-50%) rotate(45deg); z-index: 150; background: rgba(255, 255, 255, 1); }
    .tab-wrap { width: 100%; height: 60px;
      .tab { width: 50%; height: 100%; float: left; cursor: pointer;
        &.active-tab { border-bottom: solid 5px @c-blue; }
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
  <div class="component-page-footer clearfix">
    <ul class="footer-ul left-section">
      <li class="footer-item"><a target="_blank" href="http://www.autopiano.cn"><span style="font-weight: bold;">autopiano.cn</span> &copy; 2019~2020</a></li>
      &nbsp;|&nbsp;
      <li class="footer-item"><a target="_blank" href="http://www.beian.miit.gov.cn/">粤ICP备19061906号-1</a></li>
    </ul>
    <ul class="footer-ul right-section">
      <!--<li class="footer-item"><a href="//crystalworld.xin/apple/#/iphone_music" target="_blank">iPhone Music Player</a></li>-->
      <li class="footer-item"><a target="_blank" href="https://www.marsden.cn/">Marsden-马斯登</a></li>
      &nbsp;|&nbsp;
      <li class="footer-item"><a target="_blank" href="https://i.loli.net/2019/05/15/5cdaf0d79ceef22845.jpg">地铁图小程序</a></li>
      &nbsp;|&nbsp;
      <li class="footer-item"><a target="_blank" href="https://www.yuque.com/lnexttickl/sfsqc5/ifz93n" class="info-txt em">用户使用指南</a></li>
      &nbsp;|&nbsp;
      <li class="footer-item">
        <a href="javascript:;" @click="toggleSupportShow()" class="support-txt em">赞赏支持</a>
        <div class="popup-container" v-show="supportShow">
          <div class="tab-wrap">
            <div class="tab" :class="{'active-tab': payType=='WXPAY'}" @click="togglePayType('WXPAY')">
              <i class="icon icon-wxpay"></i>
            </div>
            <div class="tab" :class="{'active-tab': payType=='ALIPAY'}" @click="togglePayType('ALIPAY')">
              <i class="icon icon-alipay"></i>
            </div>
          </div>
          <div class="qrcode-wrap">
            <div class="money">¥1.0 即可</div>
            <img class="qrcode wxpay" v-show="payType=='WXPAY'" :src="wxPaySrc"/>
            <img class="qrcode alipay" v-show="payType=='ALIPAY'"  :src="aliPaySrc"/>
          </div>
        </div>
      </li>
      &nbsp;|&nbsp;
      <li class="footer-item"><a href="mailto:zhoujh29@mail2.sysu.edu.cn" class="info-txt">邮件联系</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
  data() {
    return {
      supportShow: false,
      payType: 'WXPAY',
      aliPaySrc: require('../assets/images/aliqr.png'),
      wxPaySrc: require('../assets/images/wxqr.png')
    }
  },
  mounted() {},
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
