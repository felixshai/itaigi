import React from 'react';
import Transmit from 'react-transmit';
import 抱去摸三隻 from './抱去摸三隻';
import './抱去摸.css';
import Debug from 'debug';

var debug = Debug('itaigi:抱去摸');

export default class 抱去摸 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      佗一隻: undefined,
    };
  }

  換一隻(名) {
    this.setState({ 佗一隻: 名 });
  }

  render() {
    let 寶貝 = [
      ['寶可夢', '妙蛙種子', '妙蛙草'],
      ['妙蛙花', '小火龍', '火恐龍'],
      ['噴火龍', '傑尼龜', '卡咪龜'],
      ['水箭龜', '綠毛蟲', '鐵甲蛹'],
      ['巴大蝴', '獨角蟲', '鐵殼昆'],
      ['大針蜂', '波波', '比比鳥'],
      ['比鵰', '小拉達', '拉達'],
      ['烈雀', '大嘴雀', '阿柏蛇'],
      ['阿柏怪', '皮卡丘', '雷丘'],
      ['穿山鼠', '穿山王', '尼多蘭'],
      ['尼多娜', '尼多后', '尼多朗'],
      ['尼多力諾', '尼多王', '皮皮'],
      ['皮可西', '六尾', '九尾'],
      ['胖丁', '胖可丁', '超音蝠'],
      ['大嘴蝠', '走路草', '臭臭花'],
      ['霸王花', '派拉斯', '派拉斯特'],
      ['毛球', '末入蛾', '地鼠'],
      ['三地鼠', '喵喵', '貓老大'],
      ['可達鴨', '哥達鴨', '猴怪'],
      ['火爆猴', '卡蒂狗', '風速狗'],
      ['蚊香蝌蚪', '蚊香蛙', '快泳蛙'],
      ['凱西', '勇吉拉', '胡地'],
      ['腕力', '豪力', '怪力'],
      ['喇叭芽', '口呆花', '大食花'],
      ['瑪瑙水母', '毒刺水母', '小拳石'],
      ['隆隆石', '隆隆岩', '小火馬'],
      ['烈焰馬', '呆呆獸', '呆河馬'],
      ['小磁怪', '三合一磁怪', '大蔥鴨'],
      ['嘟嘟', '嘟嘟利', '小海獅'],
      ['白海獅', '臭泥', '臭臭泥'],
      ['大舌貝', '鐵甲貝', '鬼斯'],
      ['鬼斯通', '耿鬼', '大岩蛇'],
      ['素利普', '素利拍', '大鉗蟹'],
      ['巨鉗蟹', '雷電球', '頑皮彈'],
      ['蛋蛋', '椰蛋樹', '可拉可拉'],
      ['嘎拉嘎拉', '沙瓦郎', '艾比郎'],
      ['大舌頭', '瓦斯彈', '雙彈瓦斯'],
      ['鐵甲犀牛', '鐵甲暴龍', '吉利蛋'],
      ['蔓藤怪', '袋龍', '墨海馬'],
      ['海刺龍', '角金魚', '金魚王'],
      ['海星星', '寶石海星', '吸盤魔偶'],
      ['飛天螳螂', '迷唇姐', '電擊獸'],
      ['鴨嘴火龍', '大甲', '肯泰羅'],
      ['鯉魚王', '暴鯉龍', '乘龍'],
      ['百變怪', '伊布', '水精靈'],
      ['雷精靈', '火精靈', '３Ｄ龍'],
      ['菊石獸', '多刺菊石獸', '化石盔'],
      ['鐮刀盔', '化石翼龍', '卡比獸'],
      ['急凍鳥', '閃電鳥', '火焰鳥'],
      ['迷你龍', '哈克龍', '快龍'],
      ['超夢', '夢幻'],
  ];
    let 寶貝鈕 = 寶貝.map((三隻, i)=>(
      <抱去摸三隻 key={i} 後端網址={this.props.後端網址} 寶貝名={三隻}
       佗一隻={this.state.佗一隻} 換一隻={this.換一隻.bind(this)} />
      ));
    return (
      <div className='main container'>
        <div className='kong content 寶可夢外口'>
           {寶貝鈕}
        </div>
      </div>
    );
  }
}
