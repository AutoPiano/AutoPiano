### 新鲜出炉 AutoPiano QQ交流群： 600270908

[原文链接](https://github.com/WarpPrism/Blog/issues/42)

[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE) [![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)

Hate 996? Come Here & Relax~


最近用Vue + Tone.js做了一款钢琴类web应用，名字定为自由钢琴（AutoPiano），人生如音乐，欢快且自由。

此文权当作该项目的总结和分享~

## 项目简介
自由钢琴（AutoPiano）是利用HTML5技术开发的在线钢琴应用，致力于为钢琴爱好者、音乐爱好者以及其他所有的创造者提供一个优雅、简洁的平台，在学习工作之余可以享受钢琴、音乐的美好。就类似于多年前Flash开发的钢琴游戏，自由钢琴只是换了H5的技术，同时支持了钢琴曲的**自动播放**功能。

AutoPiano支持键盘按键和鼠标点击播放，同时琴键上会有按键和音名提示。另外，AutoPiano还有教学的功能，一种方式是``快速入门``，通过简易的谱子按键进行演奏，另一种是``演奏示例``，通过钢琴曲的自动播放来达到演示的目的。目前这两个功能都在持续完善中，如下图所示：

![autopiano.png](https://i.loli.net/2019/05/24/5ce7c48ce8c1093923.png)

> 体验地址： http://www.autopiano.cn

> 项目地址： https://github.com/WarpPrism/AutoPiano

## 开发这样的应用需要乐理知识吗？

当然。基本的乐理知识还是要知道的，比如 CDEFGAB 音名、五线谱、调式、节奏等等还是要懂一点的。篇幅所限，这里就不展开讨论了，推荐两个网站：

- https://www.bilibili.com/video/av12168119/
- https://www.cnblogs.com/devymex/p/3385179.html

其他的就是编程知识了，以及如何将乐理知识转化为程序逻辑。AutoPiano目前采用的技术架构是vue框架 + tone.js。

## 钢琴界面效果是怎么写的？

可以用CSS或贴图。笔者这里直接用css实现了，考虑到钢琴有黑键和白键，且黑键和白键有序地排列成 7:5的模式，所以实现起来并不复杂。

~~~html
<div class="piano-key-wrap">
  <div class="piano-key wkey" v-for="note in Notes" :key="note.keyCode" :data-keyCode = "note.keyCode" v-if="note.type=='white'" @click="clickPianoKey($event, note.keyCode)"></div>
  <div class="bkey-wrap bkey-wrap1">
    <div class="piano-key bkey" v-for="note in Notes" :key="note.keyCode" :data-keyCode = "note.keyCode" v-if="note.type=='black' && note.id >= 36 && note.id <= 40" @click="clickPianoKey($event, note.keyCode)"></div>
  </div>
</div>
~~~

~~~css
.piano-wrap { width: 90%; margin: 20px auto;
  .piano-key-wrap {
    width: 100%;
    background: @c-black;
    overflow: hidden;
    position: relative;
    .wkey {
      display: inline-block;
      width: 2.775%;
      height: 100%;
      margin: 0 auto;
      background: linear-gradient(white 10%, rgb(251, 251, 251) 92%, rgb(220, 220, 220) 93%, white 97%);
      border: solid 1px @c-black;
      border-radius: 0 0 5px 5px;
      position: relative;
      &:active {
        background: linear-gradient(#eee 10%, #ddd 60%, #bbb 93%, #ccc 97%);
      }
    }
    .wkey-active {
      background: linear-gradient(#eee 10%, #ddd 60%, #bbb 93%, #ccc 97%);
    }
    .bkey-wrap {
      width: 20%;
      height: 0;
      position: absolute;
      top: 0;
    }
    .bkey-wrap1 {left: 0;}
    .bkey-wrap2 {left: 19.5%;}
    .bkey-wrap3 {left: 39%;}
    .bkey-wrap4 {left: 58.3%;}
    .bkey-wrap5 {left: 77.7%;}
    .bkey {
      display: inline-block;
      width: 10%;
      height: 70%;
      background: linear-gradient(#000 10%, rgb(86, 86, 86) 85%, #000 90%);
      border-radius: 0 0 3px 3px;
      position: absolute;
      top: 0;
      overflow: hidden;
      &:active {
        background: linear-gradient(rgb(86, 86, 86) 10%, #000 90%, #222 100%);
      }
    }
    .bkey-active {
      background: linear-gradient(rgb(86, 86, 86) 10%, #000 90%, #222 100%);
    }
    .bkey:nth-child(1) {left: 9%;}
    .bkey:nth-child(2) {left: 23%;}
    .bkey:nth-child(3) {left: 50%;}
    .bkey:nth-child(4) {left: 65%;}
    .bkey:nth-child(5) {left: 79%;}
  }
}
~~~

codepen上也有很多这样的例子供参考，不一定采用上述实现：

https://codepen.io/search/pens?q=piano&page=1&order=popularity&depth=everything

相信只要合理地控制css变量和数值，大家能做出更好的 Piano 界面。

## 如何实现单个音符的播放？
实现音频播放，最简单的就是利用HTML5 中的 ``audio`` 标签，通过触发audio的play和pause方法，实现对音频的控制，笔者一开始就是这么实现的。

~~~js
// <div class="audios-wrap" id="audios-wrap">
//   <audio src="" id="preloadAudio" ref="preloadAudio"></audio>
// </div>

// 预先为每个音符都建立一个audio元素
initAudioDom() {
  var vm = this
  for (let i = 0; i< vm.Notes.length; i++) {
    var note = vm.Notes[i]
    $('.audios-wrap').append(`<audio src='${note.url}' hidden='true' data-id='audio${i}' class='audioEle'>`);
  }
},
// 触发某个audio元素的播放
playNote(url) {
  var vm = this
  if (!url || typeof url != 'string') return;
  var audios = $('.audioEle');
  for (let i = 0; i< audios.length; i++) {
    let audio = audios[i];
    if (audio.src.indexOf(url) > -1) {
      var cloneAudioNode = audio.cloneNode()
      cloneAudioNode.play()
      cloneAudioNode.remove()
      break;
    }
  }
}
~~~

上述是我的第一种实现方式，即不同音符触发不同audio的播放。之后也许是出于好奇，尝试了 [Tone.js](https://github.com/Tonejs/Tone.js)，通过Tone.js + 内置采样器实现对音频播放更有效的控制，当然，其提供的很多复杂功能都还没用上。。。

~~~js
// 初始化合成器
this.synth = SmapleLibrary.load({
  instruments: "piano"
}).toMaster()

// 合成器触发音频释放
playNote(notename = 'C4', duration = '2n') {
  if (!this.synth) return
  this.synth.triggerAttackRelease(notename, duration);
}
~~~

嗯，现在的代码就符合音乐美学和代码美学了，美滋滋。当然笔者也期望Tone.js能快点完善中文文档，不然上手还是很吃力的，感兴趣的小伙伴可以先去其官网研究一番。

## 关于钢琴曲的自动播放
这一部分应该是开发整个应用最难的地方了，因为音乐或者说乐谱本身是相当复杂的，根据百度百科的描述，五线谱起源于希腊，历经上千年不断完善才成为现在的乐谱标准。而简谱的出现则要晚的多，但依然五脏俱全，可以说，简谱也不简单。

笔者的实现思路是，以一种乐谱格式为载体，将乐谱转换为一种程序可识别的格式，然后导入到程序中进行播放，这种可识别格式如下所示，也是目前所采用的：

~~~
  {
    name: '小星星',
    step: 'C',
    speed: '100',
    playState: '',
    mainTrack: ['1(1)',' 1(1)',' 5(1)',' 5(1)',' 6(1)',' 6(1)',' 5(2)',' 4(1)',' 4(1)',' 3(1)',' 3(1)',' 2(1)',' 2(1)',' 1(2)',' 5(1)',' 5(1)',' 4(1)',' 4(1)',' 3(1)',' 3(1)',' 2(2)',' 5(1)',' 5(1)',' 4(1)',' 4(1)',' 3(1)',' 3(1)',' 2(2)',' 1(1)',' 1(1)',' 5(1)',' 5(1)',' 6(1)',' 6(1)',' 5(2)',' 4(1)',' 4(1)',' 3(1)',' 3(1)',' 2(1)',' 2(1)',' 1(2)',
                '1<(1)', '1<(1)', '5<(1)', '5<(1)', '6<(1)', '6<(1)', '5<(2)', '4<(1)', '4<(1)', '3<(1)', '3<(1)', '2<(1)', '2<(1)', '1<(2)', '5<(1)', '5<(1)', '4<(1)', '4<(1)', '3<(1)', '3<(1)', '2<(2)', '5<(1)', '5<(1)', '4<(1)', '4<(1)', '3<(1)', '3<(1)', '2<(2)', '1<(1)', '1<(1)', '5<(1)', '5<(1)', '6<(1)', '6<(1)', '5<(2)', '4<(1)', '4<(1)', '3<(1)', '3<(1)', '2<(1)', '2<(1)', '1<(2)'],
    backingTrack: ['1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '1>(0.5)', '6>(0.5)', '4>(0.5)', '6>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '1>(0.5)', '6>(0.5)', '4>(0.5)', '6>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '7>>(0.5)', '5>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)',' 1(0.5)', '1>(0.5)', '4>(0.5)', '6>(0.5)',' 1(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)',' 1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)',
                  '1>(0.5)', '3>(0.5)', '5>(0.5)',' 1(0.5)', '1>(0.5)', '4>(0.5)', '6>(0.5)',' 1(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)',' 1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '1>(0.5)', '6>(0.5)', '4>(0.5)', '6>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '1>(0.5)', '6>(0.5)', '4>(0.5)', '6>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '7>>(0.5)', '5>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)',

                  '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '1(0.75)', '6(0.25)', '4(0.5)', '6(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '1(0.75)', '6(0.25)', '4(0.5)', '6(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '7>(0.75)', '5(0.25)', '2(0.5)', '5(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '1(0.75)', '3(0.25)', '5(0.5)', '1<(0.5)', '1(0.75)', '4(0.25)', '6(0.5)', '1<(0.5)', '1(0.75)', '3(0.25)', '5(0.5)', '1<(0.5)', '5>(0.75)', '7>(0.25)', '2(0.5)', '5(0.5)',
                  '1(0.75)', '3(0.25)', '5(0.5)', '1<(0.5)', '1(0.75)', '4(0.25)', '6(0.5)', '1<(0.5)', '1(0.75)', '3(0.25)', '5(0.5)', '1<(0.5)', '5>(0.75)', '7>(0.25)', '2(0.5)', '5(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '1(0.75)', '6(0.25)', '4(0.5)', '6(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '1(0.75)', '6(0.25)', '4(0.5)', '6(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '7>(0.75)', '5(0.25)', '2(0.5)', '5(0.5)', '1>(2)']
  }
~~~

额，是不是很复杂，很臃肿。。。它以简谱为载体，通过特殊符号来标记音高和时长，从而产生mainTrack和backingTrack两个音轨，然后同步播放即可。这种实现虽然简单，但有很多致命缺点：

1. 不兼容通用的计算机乐谱格式，如musicxml
2. 不能完全表示音乐的所有维度，比如很多钢琴谱不止有两个音轨
3. 过于抽象和复杂，不实用，很难制作这种识别格式
4. 音乐专业人士： what are you 弄啥嘞？

所以笔者转向另一种实现思路，**解析musicxml**，但奈何这个过程耗时耗力，目前只完成了一半，部分细节还没有完全解析正确，如果读者有好的想法，可以在评论区留言探讨。

## 欢迎贡献协作

- 贡献代码，直接PR
- 贡献首页展示的随机歌词： https://github.com/WarpPrism/AutoPiano/issues/12
- 贡献快速入门的弹奏方法： https://github.com/WarpPrism/AutoPiano/issues/9

没想到短时间内能有这么多star(｀・ω・´)，吓得晚上下班回去又继续码代码。。。不过此项目仍不完善，还在不断更新中，特别是入门弹奏谱子比较少，目前只有：

- 小星星
- 新年好
- 因为爱情
- 隐形的翅膀
- 蒲公英的约定
- 纸短情长
- 同桌的你
- 晴天
- 千与千寻主题曲
- 明天你好
- 青花瓷
- ...

都是笔者一个一个手打出来的T_T，能力有限，会的就这么多，所以是时候见证``社区的力量``了。

> FORK时，请遵循GPL开源协议。

## 最后

> 最后再贴一下体验地址： > 体验地址： http://www.autopiano.cn

欢迎体验，分享。

解析musicxml的过程仍在进行中，如果某一天成功了，那么**示例演奏**里面就会加入海量的歌曲，以供学习，如果失败了，额，那就是因为生活阻挡了我奋进的脚步。。。

![1554105945684.jpg](https://user-gold-cdn.xitu.io/2019/4/1/169d81ff4a3c573b?w=240&h=240&f=png&s=45396)


原创不易，转载分享时请注明出处~
