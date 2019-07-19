<style lang="less">
@import url('../assets/style/variable.less');
.page-footer { width: 100%; min-width: 1280px; padding: 10px 0 15px; background: rgba(255,255,255,0.8); border-top: solid 1px #ccc;
  .section { height: 25px; line-height: 25px; padding: 0 5%;
    .section-title { display: inline-block; font-weight: bold; }
    .footer-ul { display: inline;
      .footer-item { display: inline-block; list-style: none; position: relative;
        a {
          &:hover { color: #fff; background: @c-blue; }
        }
        a.em { color: @c-red;
          &:hover { color: #fff; background: @c-red; }
        }
      }
    }
  }
  .support-container { width: 200px; height: 260px; position: absolute; top: -285px; left: 50%; transform: translateX(-50%); text-align: center; z-index: 200; background: rgba(255, 255, 255, 1); box-shadow: 1px 1px 10px 1px #ddd;
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
  <div class="page-footer">
    <div class="section business-section">
      <span class="section-title">为你推荐：</span>
      <ul class="footer-ul">
        <!--<li class="footer-item"><a href="//crystalworld.xin/apple/#/iphone_music" target="_blank">iPhone Music Player</a></li>-->
        <li class="footer-item"><a target="_blank" href="https://yeah.qq.com/?q=284486">搜狗网址导航</a></li>
        &nbsp;|&nbsp;
        <li class="footer-item"><a target="_blank" href="https://i.loli.net/2019/05/15/5cdaf0d79ceef22845.jpg">查地铁小程序</a></li>
      </ul>
    </div>
    <div class="section autopiano-section">
      <ul class="footer-ul">
        <li class="footer-item"><a target="_blank" href="http://www.autopiano.cn" class="record-info">autopiano.cn &copy; 2019~2020</a></li>
        &nbsp;|&nbsp;
        <!--<li class="footer-item"><a href="http://www.miitbeian.gov.cn/" target="_blank" class="record-info">粤ICP备17147231号</a></li>
        &nbsp;|&nbsp;-->
        <li class="footer-item"><a target="_blank" href="https://www.yuque.com/lnexttickl/sfsqc5/ifz93n" class="info-txt em">用户使用指南</a></li>
        &nbsp;|&nbsp;
        <li class="footer-item">
          <a href="javascript:;" @click="toggleSupportShow()" class="support-txt em">赞赏支持</a>
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
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
  data() {
    return {
      supportShow: false,
      payType: 'ALIPAY',
      aliPaySrc: require('../assets/images/aliqr.png'),
      wxPaySrc: require('../assets/images/wxqr.png')
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
