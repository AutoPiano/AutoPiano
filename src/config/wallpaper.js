// 201904 微博图床开始禁用外链访问
// const WEIBO_IMG_BASE = 'ws1.sinaimg.cn/large/'
// let wallpaper = [
//   'e3e8443aly1g1uivpx7a5j20xc0m5ju8.jpg', // 埃菲尔铁塔
//   'e3e8443aly1g1uivolorpj20nm0e6ac0.jpg', // girl
//   'e3e8443aly1g1ujogn4hrj21hc0xcdlm.jpg', // night
//   'e3e8443aly1g1ujkcqf73j20yi0n0whh.jpg', // 油菜花地
//   'e3e8443aly1g1uji6k1jyj20xc0kxwlt.jpg', // 珠海
//   'e3e8443aly1g1ujb5rm88j215o0rsq6p.jpg', // 雪梅
//   'e3e8443aly1g1uj9oqa09j21400p0q8o.jpg', // 沙滩
//   'e3e8443aly1g1ws0i5ozsj20rs0fmafg.jpg' // Canton
// ]

// SMMS图床
// let wallpaper = [
//   'https://i.loli.net/2019/04/28/5cc5bbb48ec38.jpg', // girl 80kb
//   'https://i.loli.net/2019/04/28/5cc5bbb4b1c63.jpeg', // 油菜花地
//   'https://i.loli.net/2019/04/28/5cc5bbb4c3a7b.jpg', // 埃菲尔铁塔
//   'https://i.loli.net/2019/04/28/5cc5bbb4e98e5.png', // Canton
//   'https://i.loli.net/2019/04/28/5cc5bbb516fd0.jpg', // 雪梅
//   'https://i.loli.net/2019/04/28/5cc5bbb51b445.jpeg', // night car light 218kb
//   'https://i.loli.net/2019/04/28/5cc5bbb538f26.jpg', // 沙滩 216kb
//   'https://i.loli.net/2019/04/28/5cc5bbb549722.jpg', // 珠海香炉湾
//   'https://i.loli.net/2019/06/13/5d0217492c38e35552.jpg', // 珠海爱情邮局 73kb
//   'https://i.loli.net/2019/06/13/5d021b676914120632.jpg', // 珠海拱北夜景 134kb
//   'https://i.loli.net/2019/06/13/5d021b672060777880.jpg', // headphone
//   'https://i.loli.net/2019/06/13/5d021b672dc3294541.jpg' // 雪国列车 70kb
// ]

let wallpaper = [
  'bg_beach.jpg',
  'bg_carlight.jpeg',
  'bg_default.jpg',
  'bg_eiffel.jpg',
  'bg_girl.jpg',
  'bg_gongbei.jpg',
  'bg_gz.png',
  'bg_headphone.jpg',
  'bg_tower.jpg',
  'bg_winter.jpg',
  'bg_yflower.jpeg',
  'bg_zh.jpg'
]

wallpaper = wallpaper.map(item => {
  return 'https://cdn.jsdelivr.net/gh/warpprism/cdn@latest/autopiano/static/images/' + item
})

export default wallpaper
