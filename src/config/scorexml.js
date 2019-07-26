/**
 * 所有的XML乐谱文件列表
 */
// const base = '/static/xmlscore/'
const ext = '.json'

let scorexml = [
  {
    name: '成都',
    url: '/static/xmlscore/成都.json',
    degree: 5
  },
  {
    name: '千与千寻 - Always With Me',
    url: '/static/xmlscore/千与千寻.json',
    degree: 4
  },
  {
    name: '后来',
    url: '/static/xmlscore/后来.json',
    degree: 3
  },
  {
    name: '告白气球',
    url: '/static/xmlscore/告白气球.json',
    degree: 2
  },
  {
    name: '蒲公英的约定',
    url: '/static/xmlscore/蒲公英的约定.json',
    degree: 5
  },
  {
    name: '时间煮雨',
    url: '/static/xmlscore/时间煮雨.json',
    degree: 4
  },
  {
    name: '下一个天亮',
    url: '/static/xmlscore/下一个天亮.json',
    degree: 2
  },
  {
    name: '海角七号 1945',
    url: '/static/xmlscore/海角七号.json',
    degree: 3
  }
]

scorexml.forEach(score => {
  score.playing = false
})

export default scorexml
