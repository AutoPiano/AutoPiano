/**
 * 所有的XML乐谱文件列表
 */
// const base = '/static/xmlscore/'
const ext = '.json'

let scorexml = [
  {
    name: '成都',
    url: 'http://lc-SAs97Sjr.cn-n1.lcfile.com/d3d3e2c531b1f5a19e17.json',
    degree: 5
  },
  {
    name: '千与千寻 - Always With Me',
    url: 'http://lc-SAs97Sjr.cn-n1.lcfile.com/168cbbcb378003f9f4ac.json',
    degree: 4
  },
  {
    name: '后来',
    url: 'http://lc-sas97sjr.cn-n1.lcfile.com/bf6dae5bbe2dd01bd823.json',
    degree: 3
  },
  {
    name: '告白气球',
    url: 'http://lc-sas97sjr.cn-n1.lcfile.com/69cf61d81d9ef8c1874e.json',
    degree: 2
  },
  {
    name: '蒲公英的约定',
    url: 'http://lc-SAs97Sjr.cn-n1.lcfile.com/b0ed88bc534211093308.json',
    degree: 5
  },
  {
    name: '时间煮雨',
    url: 'http://lc-SAs97Sjr.cn-n1.lcfile.com/66d7ce69a0d80c07e605.json',
    degree: 4
  },
  {
    name: '下一个天亮',
    url: 'http://lc-SAs97Sjr.cn-n1.lcfile.com/15ec926e2e6ea1e101a6.json',
    degree: 2
  },
  {
    name: '海角七号 1945',
    url: 'http://lc-SAs97Sjr.cn-n1.lcfile.com/45f7633c6415bdea92ba.json',
    degree: 3
  }
]

scorexml.forEach(score => {
  score.playing = false
})

export default scorexml
