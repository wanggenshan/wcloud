import React from "react";
import style from "./Index.scss";
class Index extends React.PureComponent {
  render() {
    return (
      <div className={style.account}>
        <div className={style.header}>
          <div className={style.search}>
            <p />
            <p>账号</p>
            <p className="yl">
              <img src={require("../../assets/audio.png")} />
            </p>
          </div>
        </div>
        <div className={style.message}>
          <div>
            <div className={style.portrait} />
            <p className={style.nickname}>
              滴答
              <small>
                <i>LV</i>.10
              </small>
            </p>
          </div>
          <span>签到</span>
        </div>
        <div className={style.navList}>
          <div>
            动态
            <p>1</p>
          </div>
          <div>
            关注
            <p>3</p>
          </div>
          <div>
            粉丝
            <p>1</p>
          </div>
          <div>我的资料</div>
        </div>
        <ul className={style.list}>
          <li className={style.ss}>
            <div className={style.icon}>
              <img src={require("../../assets/xiaoxi.png")} />
            </div>
            <a className={style.xx}>我的消息</a>
            <span className={style.jt}>></span>
          </li>
          <li className={style.ss}>
            <div className={style.icon}>
              <img src={require("../../assets/huiyuanzhongxin.png")} />
            </div>
            <a className={style.xx}>会员中心</a>
            <span className={style.jt}>></span>
          </li>
          <li>
            <div className={style.icon}>
              <img src={require("../../assets/shangcheng.png")} />
            </div>
            <a className={style.xx}>商城</a>
            <span className={style.jt}>></span>
          </li>
          <li>
            <div className={style.icon}>
              <img src={require("../../assets/game.png")} />
            </div>
            <a className={style.xx}>游戏推荐:明日之后</a>
            <span className={style.jt}>></span>
          </li>
          <li>
            <div className={style.icon}>
              <img src={require("../../assets/zaixiantingge.png")} />
            </div>
            <a className={style.xx}>在线听歌免流量</a>
            <span className={style.jt}>></span>
          </li>
          <li className={style.ss}>
            <div className={style.icon}>
              <img src={require("../../assets/shezhi.png")} />
            </div>
            <a className={style.xx}>设置</a>
            <span className={style.jt}>></span>
          </li>
          <li>
            <div className={style.icon}>
              <img src={require("../../assets/scan_icon.png")} />
            </div>
            <a className={style.xx}>扫一扫</a>
            <span className={style.jt}>></span>
          </li>
          <li>
            <div className={style.icon}>
              <img src={require("../../assets/gexing.png")} />
            </div>
            <a className={style.xx}>个性皮肤</a>
            <span className={style.jt}>></span>
          </li>
          <li>
            <div className={style.icon}>
              <img src={require("../../assets/diandeng.png")} />
            </div>
            <a className={style.xx}>夜间模式</a>
            <span className={style.jt}>></span>
          </li>
          <li>
            <div className={style.icon}>
              <img src={require("../../assets/naoling.png")} />
            </div>
            <a className={style.xx}>音乐闹铃</a>
            <span className={style.jt}>></span>
          </li>
          <li>
            <div className={style.icon}>
              <img src={require("../../assets/zhanghaodakaijiashimoshi.png")} />
            </div>
            <a className={style.xx}>驾驶模式</a>
            <span className={style.jt}>></span>
          </li>
          <li>
            <div className={style.icon}>
              <img src={require("../../assets/qinzi.png")} />
            </div>
            <a className={style.xx}>亲子频道</a>
            <span className={style.jt}>></span>
          </li>
          <li>
            <div className={style.icon}>
              <img src={require("../../assets/xiaobing.png")} />
            </div>
            <a className={style.xx}>小冰电台</a>
            <span className={style.jt}>></span>
          </li>
          <li>
            <div className={style.icon}>
              <img src={require("../../assets/youhuiquan.png")} />
            </div>
            <a className={style.xx}>优惠券</a>
            <span className={style.jt}>></span>
          </li>
          <li className={style.ss}>
            <div className={style.icon}>
              <img src={require("../../assets/discover.png")} />
            </div>
            <a className={style.xx}>加入网易音乐人</a>
            <span className={style.jt}>></span>
          </li>
          <li>
            <div className={style.icon}>
              <img src={require("../../assets/fenxiang.png")} />
            </div>
            <a className={style.xx}>分享网易云音乐</a>
            <span className={style.jt}>></span>
          </li>
          <li>
            <div className={style.icon}>
              <img src={require("../../assets/guanyu.png")} />
            </div>
            <a className={style.xx}>关于</a>
            <span className={style.jt}>></span>
          </li>
        </ul>
        <button className={style.btn}>退出登录</button>
      </div>
    );
  }
}
export default Index;
