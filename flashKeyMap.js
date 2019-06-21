let flashNoteMap = {
  ' ': ' ',
  '\n': '</br>',
  ',': ' ',
  'A': '8',
  'B': '9',
  'C': '0',
  'D': 'Q',
  'E': 'W',
  'F': 'E',
  'G': 'R',
  
  'H': 'T', // C4  middle do
  'I': 'Y', // D4
  'J': 'U',
  'K': 'I',
  'L': 'O',
  'M': 'P',
  'N': 'A',

  'O': 'S',
  'P': 'D',
  'Q': 'F',
  'R': 'G',
  'S': 'H',
  'T': 'J',
  'U': 'K',

  'V': 'L',
  'W': 'Z',
  'X': 'X',
  'Y': 'C',
  'Z': 'V'
}

let songs = [
  {
    name: `《童话》`,
    content: `LONOL LONOL LONO OOMMLLONOL LQPPO LONOM MMOTS PPRRQQ QQNPOONO ONOR LSRQPPPRRQQ QQVUTUV VPOT TTSSSLSRQQRQ QRQ RQPOOQST TTSPPRQ OQST TTSPPRQRQPO PQMMOONO`
  },
  {
    name: `《婚礼进行曲》`,
    content: `HKKK HLJK HKNNMLKJKL HKKK HLJK HKMOMKILMKNMLII JKLL NMLII JKLL HKKK HLJK HKMOMKILMKILMKK `
  },
  {
    name: `《遇见》`,
    content: `LJ LI JIH HGFGHGHIJ 
    LJ LP ONO HGFGHGHIH 
    LMNONONMLML HIJKJKLHIJ 
    LMNONONPOPOQL HIJKJKJIHGH 
    LMNONOPONML HIJKJKLHHML 
    LMNONOPOPQL, HIJKJKLHHML 
    LMNONOPOPQL, HIJIJILHIJH 
    LMNONOMNLKL 
    JJJKLJEE IIIJKIEE 
    HHHIJIGH GFGHG 
    FEFML IKJIH 
    HGFIIHFFGH `
  },
  {
    name: `《菊花台》`,
    content: `JJIJ JLJIJ HHIJLJ IIHI 
    J LJML MLLJL EJIILJIIIHI 
    JJIJ JLJIJ HHIJLJ IIHI 
    J LJML MLLJL JIJLJIIH 
    HIJJLM MQQPOML MLJIH FHIIHI 
    HIJJLM MQPOOPO LLJNOHIJIH `
  },
  {
    name: `《北京欢迎你》`,
    content: `QSQPQPQQPMO QP 
    POMOPQSPQTSSPO 
    POMOPQSPQTSSQ 
    PQPOSTQMQPPO 
    QSVSTTS QQ SS QS TV WV SQ P S Q Q 
    QS VS TV WV SQ SVT QP QS XW VV 
    `
  },
  {
    name: `致爱丽斯`,
    content: `QPQPQNPOMHJMNJLNOJQPQPQNPOMHJMNJONMNOPQLRQPKQPOJPONNJQQQQPQPQNPOMHJMNJLNOJQPQPQNPOMHJMNJONMORQQPPRTSRQPONMMLMNOPPQRMOPNOPQSPNOPQSPNQQQQQP `
  },
  {
    name: `《约定》`,
    content: `LOPQPOQPLL JMNONMONJL MLLKKOJJPO 
    PQRQQPOMP LOPQPOQPNL QMNONMONJL 
    MLLKKOPQO MNOMOTSS POSQ QPONOMJM 
    OPOTR RQRMNOP QRSSSTO 
    SNPO PQMORQRSP POSQ QPONOMJM 
    OPOTR RQRMNOP QRSSSTO 
    SNPO PQRMRQOPO `
  },
  {
    name: `《美丽的神话》`,
    content: `MQN MOPOQ MTSTSPRQ 
    MTSPQRQ O MQPNM 
    MQNMOPOQ MTSTSPRQ 
    MTSPQRQPO MPONM 
    MNOPQONL MOPQQ 
    MNOPQONLMOPOO MPONM 
    MNOPQONL MOPQQ 
    MNOPQONLMOPOO OOPQONLONMNT`
  },
  {
    name: `《有没有人告诉你》`,
    content: `JMMMMMMMMJKLK JLLLLLLLMNNJ 
    JMMMMMMMMQQP NNNNNJONON 
    JMMMMMMMMJKLK ILLLLLLLMNNJ 
    JMMMMMMMMQQP NNNNNNNMNM 
    QTQQQQOMJJQP JSSSSSSSTUUQ 
    QTQQQQOMJJQP PPPPPJNNM `
  },
  {
    name: ``,
    content: ``
  },
  {
    name: `《好好恋爱》`,
    content: `JKLLLLLKJIIL NNONOOOPQNNL 
    HMMMJMOLLLLJH KKKJKLMMMOML 
    JKJJKLLLLJIHHO NMLML 
    JHHMMLLLKJ OOOONOPP 
    LRQLLRPLRQRQRQPO ONMMQMQMLLQLQL 
    RQRQOP LRQLLRSPLRQQQRQPQ 
    ONMMQMQMLLQLQPOM OPNMNMNQPOO`
  },
  {
    name: `《安静》-周杰伦`,
    content: `QQQQPONPPPO LQPOOOLQPOOP 
    QQQQPONPPPO LQPOOOLQPOOPPQR 
    RRRRQPOOOPP LSSSRQPPPQQ 
    MRQRQPOONOL QRQRQPOPS 
    LQRSRQSLQRSRQS LQRSRQOPPPQO 
    SSOONOOSSOONOO RRQQPPORRQQPPO 
    LQRSRQSLQRSRQS LQRSRQOPPPQO 
    SSOONOOSSOONOO RRQQPPOORQPOMOO`
  },
  {
    name: `《月亮代表我的心》`,
    content: `LOQSONQS STUVTS QPOOO QPOOO PQPOMPQP LOQSONQS STUVTS 
    POOO QPOOO PQPMNOPO QSQPOSN MNMNMLQ SQPOSN MNOOOPQP LOQSONQS STUVTS 
    QPOOO QPOOO PQPMNOPO`
  },
  {
    name: `《卡农》　(括号是一起按) `,
    content: `H-JLO E-ILN F-HJM C-GIL 
    D-FHK A-EHJ D-FHK E-GIL 
    (HQ)-JLO (EP)-GIL (OF)-HJM (NC)-GJL 
    (MD)-FHK (LA)-CEH (MD)-FHK (NE)-GIL 
    ONOH (G B )LIJ (CH)ONM (CN)QST 
    (DR)QPR (QA)PON (DM)LKJ (EI)KJI 
    (EH)IJK (EG)ILK (FJ)MLK (CL)KJI 
    (DH)FMN (AO)NML (DK)JIM LML 
    (SJ)QRS-QR(SE)LMNOPQR 
    (FQ)OPQ-JK(GL)MLKLJKL 
    (FK)MLK-JI(JE)IHIJKLM 
    (FK)MLM-NO(GL)MNOPQRS 
    (SI)QRS-QR(SE)LMNOPQR 
    (FQ)OPQ-JK(GL)MLKLJKL 
    (FK)MLK-JI(EJ)IHIJKLM 
    (FK)MLM-NO(GL)MNOPQRS 
    (HQ)-JLO (EP)-GIL (OF)-HJM (NC)-GJL 
    (MD)-FHK (LA)-CEH (MD)-FHK (NE)-`,
    degree: 5
  },
  {
    name: `《不能说的秘密》`,
    content: `EHHH EGGG EHHH EIII EHHH EGGG EHHH EIII EKKKK KJJ KKKLJIHGGH 
    ELLLL LKK LLLLLKKJJI EKKKK KJJ KKKLJIHGGIH FHLMH LLLLLKKJJI 
    HONOOLLLLKKJ HONOOLLLLPPO HONONMHNMNML HMLMLKKJKLMML 
    HONOOLLLLKKJ HONOOLLLLPPO HONONM HNMNML HMLMLKKJKLMML HLHKJ HHLHKJH`
  },
  {
    name: `《往事难忘》`,
    content: `H HIJ JKL MLJ LKJI KJIH 
    H HIJ JKL MLJ LKJI JIH 
    LKJI EEKJIH LKJI KJIH 
    H HIJ JKL MLJ LKJI JIH`
  },
  {
    name: `《梁祝》`,
    content: `LJIH IGFE 
    NMNLMKJL IJLIJKJIH 
    LGIFHE FHE 
    CEFHI FHE 
    LOMLJLI 
    IJGFEFHICHFEFHE 
    JLGIFHE CECEFGIF 
    EFHILJIJIHFECH FHFECEFHE 
    JLIJIHGFE`
  },
  {
    name: `《大海》`,
    content: `FEHHHH EFHHIH FHIIII HFIIJI 
    JLMMLM LJIJIHF EFHHHHIH 
    JLMMMMOMLLML JIHHHHIJ 
    JIHHHHOMLLML JLMOOML 
    JLMMMMOMLLML JIHHHHLJ 
    JIHHHHIJLLJL JLM FJIHH`
  },
  {
    name: `《虫儿飞》`,
    content: `jjjkljii hhhijjgg fji fji fjihh 
    jjjkljii hhhijjgg fji fji fjihh 
    jil kji lkjklji hfji hfih kjkjh hkjkjhih`
  },
  {
    name: `《雪绒花》`,
    content: `CEI HED CCCDEFE 
    CEI HED CEEFGHH 
    I EEGFECEH 
    FHIHGE 
    CEI HED 
    CEEFGHH`
  },
  {
    name: `《画心》`,
    content: `LJJ IHIILJ LJJIHILmJ LJJIHIHGHIGEF CEF FJIHGEF EEFFHGFEBC CCEFGHEHIJ 
    LJJ IHIHGHIGEF CEFFJIHGEF CEFHGFEFC CEFFGHEHIJ LJJ IHIHGHIGEF CEFFJIHGEF 
    LJJ IHIHGHIGEF CEFFJIHGEF LJJIHIILJ LJJIHILmJ LJJIHIHGHIGEF CEFFJIHGEF`
  },
  {
    name: `《痴心绝对》`,
    content: `OPQQQRQPPOPPSP ONOOOQQOOMNNQN 
    MLMMMRRQSO MLMMMRROOMP 
    OOPQQQRQPPOPPSP ONOOOQQOOMNNQN 
    MLMMRRQSO MLMMMRROOONO`
  },
  {
    name: `《蜗牛》`,
    content: `J JJKJIJIH HHK KIHHIJ HHL LMLKJK GH EEJ JKJIJH EEH HEHIJKL HONN NONMMNLHKLM MNOPQL EFLK KLKJIHI EEH HEHIJKL HONN NONMMNL HKLM MNOPQL EFLK KJIHHGH
    `
  },
  {
    name: `《神秘园》`,
    content: `jmno no opnmn nomlm lj jmno no opnmn nomlm lm nost tusrs noqr rsqpq nost tusrs strqr rsqpq jmno no opnmn nomlm lj jmno no opnmn nomlm lm`
  },
  {
    name: `《轨迹》`,
    content: `qeee reee weewqe qwee eweq hqewqw qeee reee weewqte qwee eweq hqewqw qjqjwq jwqjq q ttqqt qgqrewe ee rewqj wewq qtrewqwet g r eee ereww weqq ett qttrr ewreq qq wEwqw gr eee ereww weqq ett qttrr ewreq qerw jq
    `
  },
  {
    name: `《无赖》`,
    content: `HIJJIJKJIGE FGHHIJJMLJL JLMMMLK JKLLKJ JKKLKHI HIJJIJKJIGE FGHHIJJMLJL JLMMMLK JKLLKJ JKJHIH HHEFGHHIJHE EDDFEDE EFFGJIIHGH HHFEFG EEEJIHHIJHL JJLMMNOLJ JJLMMMKMNMLKLJ JKJKLMLL EJIHHIJHL JJLMMNONJ JJLMMMKMNMLJIH JKJKLMLLJIHH`
  },
  {
    name: `《海阔天空》`,
    content: `QPO PQSSSSTS TUVVVVVVUTST 
    TSS SQPO QRQPPQPP QPPPOOOO POO 
    TUVVVVVVUTSSSQPO 
    VVVVWWWVWX XWV 
    VVVVWW SSXWV 
    VVVVWWWWVUV 
    TTUTUV VVWVWX XWXV`
  },
  {
    name: `《下一站天后》`,
    content: `QQQSP PSOOOQM RQRTQ RSPPMOP QPQSSPQVUSST RQRSMOQPO 
    QSUVUTSS QRSTRRQP POPQSS QTQPOP MOQPPQS 
    VUTUT SSOQSS TTTRQP PPUS QQSO QQPPP TQS VUTUTSS OQSS TTTTVUTUVSSQSTSSRMNO`
  },
  {
    name: `《红河谷》`,
    content: `ehjjjjijih 
    ehjhjlkji 
    lkjjihijlk 
    ffeghijih 
    lhjjjijih 
    ehjjjlkji 
    lkjjihijlkk 
    ffegijih`
  },
  {
    name: `《一千年以后》`,
    content: `OHIJML KJHJI OHIJMNL JM NNNOPON ONOQQ
    NMNL MMNOPOPRQPPQO ONOQ NMNLMO
    
    OOOPQRQOQP LOP QPOLP QPONMJN
    
    ONMNOPLQQ QRQOPP LOP QPOLP PQPONMPN
    
    ONMLMOLPO QQRQP OPQPOPOLPO`
  },
  {
    name: `《男儿当自强》`,
    content: `MOMOMLM
    MOMOLMP
    QOPS QPQO
    PQOPM
    OPMOL
    MOPOML MOL
    MOMLM OPOML
    MOLMP QSPQT
    QTSRQSQPQ
    QSTUTSQ QSTUSTU
    TUTSQSTUTSQSP
    QPOPSRQSP
    PQSTQSQPO MPO
    MOPQN NQPNM
    MOMLM
    MOMLM
    QSPQT
    `
  },
  {
    name: `回到过去 `,
    content: `hjjiihgh 
    　　hggffecf 
    　　feehhjji 
    　　ihhhgfe 
    　　hjjiihgih 
    　　hggffecg 
    　　feee 
    　　edced 
    　　hjji 
    　　iiihijji 
    　　eghhghml 
    　　hihjhhgee 
    　　ehihjhkkji 
    　　ehijj 
    　　jijkkjji 
    　　ihjjjiihgh 
    　　hihjjjj 
    　　hhlljjj 
    　　hhiihhhfhfhi 
    　　ehigh`
  },
  {
    name: `亲爱的那不是爱情 `,
    content: `　　OOONMMLMLLKJL 
    　　HMMMMLOJJIIHI 
    　　JIHGHLL 
    　　LHMLLL 
    　　MNOOOLKJIHH 
    　　OOONMMLMLLKJL 
    　　HMMMMLOJJIIHI 
    　　JIHGHLL 
    　　LHMLLL 
    　　MNOOOLKJIHH 
    　　JJLPQLNNOM 
    　　KKMSRMOOPN 
    　　LLJPOPQPOJ 
    　　ONLONNLQQRP 
    　　JJLPQLNNOM 
    　　KKMSRMOOPN 
    　　LLJPOPQPOO 
    　　MOSRQPOO`
  },
  {
    name: `哆啦A梦主题曲`,
    content: `　　ehhjmjl 
    　　lmljkji 
    　　fiiknnmlkkjfghi 
    　　ehhjmjl 
    　　lmljkji 
    　　fiiknnmlkkjfgih 
    　　mmlklml 
    　　ijkil 
    　　mlkinmlmlk 
    　　lmjih`
  },
  {
    name: ``,
    content: ``
  },
  {
    name: `《美丽的神话》 `,
    content: `MQN MOPOQ MTSTSPRQ 
    MTSPQRQ O MQPNM 
    MQNMOPOQ MTSTSPRQ 
    MTSPQRQPO MPONM 
    MNOPQONL MOPQQ 
    MNOPQONLMOPOO MPONM 
    MNOPQONL MOPQQ 
    MNOPQONLMOPOO OOPQONLONMNT`
  },
  {
    name: `《暗香》`,
    content: `JKJGHJM ONLJ JKJGHJM 
    ONLQ MMMOQLKMP PQRPQRQ 
    MPQRPQRM MQRSQRSM PQRMR 
    SKPQPQRQ 
    JKJGHJMONLJ 
    JKJGHJMONLM `
  },
  {
    name: `《夜曲》`,
    content: `MN OOOONQQ TTTSRSOO
    RRRSQNQP PONOON
    OOOONQQ TTTSRSOO
    RRR QPNOM`
  },
  {
    name: `《会呼吸的痛》`,
    content: `STVTXXTW WWVUVWXWSV VUTUVRRRVVWVSSS SYXWXX STVTXXTW WWVUVWXWSVV VUTUVRRRVVWVSSS STUVVUVV `
  },
  {
    name: `《欢乐颂》`,
    content: `J J K L L K J I H H I J J I IJ J K L L K J I H H I J I H H I I J H I J K J H I J K J I H I E J J K L L K J I H H I J I H H `,
    degree: 1
  },
  {
    name: `《千千阙歌》`,
    content: `HHIJ LMONNNLJ IIIJK MOQPPNLHHIJ LMONNNLJ IIIJK MOQPPNLMLMLMNNMN PPPPNOPQQQPPPOQ NLMLMOPQQPQ QPOP OMM LMOP QQPQ QSTSQQQQPPOPOM QQRQPOP QQ Q PPOP OMOO`
  },
  {
    name: `《星语心愿》`,
    content: `TVUTSTQ TSTVUVUTUV　　
    VWXXXXW VUTUS TVUTST　　
    QSTXWVUV VUTTTTSSTQ　　
    SSTXWVUVV VUTTSUT`
  },
  {
    name: `《想唱就唱》`,
    content: `onopol jkkklj 
    onopol lmmmon 
    onopqolj opolj 
    onopqolo rqpoq 
    qrst oopqp 
    pqrs srqpq 
    qrstss uuvuspq rqrs 
    qrst oopqp 
    pqs quuqv vuvtsoo tsrqrs ts 
    qrst oopqp 
    pqrs srqpq 
    qrstss uuvuspq rqrs 
    qrst oopqp 
    pqs quuqv vuvtsoo tsrqrs`
  }
]

songs.forEach((src, index) => {
  let result = {
    name: ``,
    content: ``,
    degree: 2,
    author: ``,
    authorLink: ``,
    lyrics: ``
  }
  console.log(src.name)
  result.name = src.name.replace('《', '').replace('》', '')
  let contentArr = src.content.split('')
  result.content = contentArr.map(c => {
    c = c.toUpperCase() || c
    if (flashNoteMap[c]) {
      return flashNoteMap[c]
    } else {
      return c
    }
  })
  result.content = result.content.join('')
  if (!src.degree) {
    result.degree = Math.floor(1 + Math.random() * 3) // 1 ~ 3
  }
  console.log(result)
})