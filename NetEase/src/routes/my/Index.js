import React from "react";
import style from "./Index.scss";
class Index extends React.PureComponent {
  render() {
    return (
      <div>
        <div className={style.header}>
          <div className={style.search}>
            <p>
              <img
                src={require("../../assets/icon.png")}
                className={style.img}
              />
            </p>
            <p>我的音乐</p>
            <p>
              <img
                src={require("../../assets/audio.png")}
                className={style.img}
              />
            </p>
          </div>
        </div>
        <ul className={style.list}>
          <li>
            <p>
              <img
                src={require("../../assets/yinyue.png")}
                className={style.imgs}
              />
            </p>
            <div className={style.lis}>
              <div className={style.cont}>
                <h5>本地音乐</h5>
                <span>></span>
              </div>
            </div>
          </li>
          <li>
            <p>
              <img
                src={require("../../assets/ttpodicon.png")}
                className={style.imgs}
              />
            </p>
            <div className={style.lis}>
              <div className={style.cont}>
                <h5>最近播放</h5>
                <span>></span>
              </div>
            </div>
          </li>
          <li>
            <p>
              <img
                src={require("../../assets/diantai.png")}
                className={style.imgs}
              />
            </p>
            <div className={style.lis}>
              <div className={style.cont}>
                <h5>我的电台</h5>
                <span>></span>
              </div>
            </div>
          </li>
          <li>
            <p>
              <img
                src={require("../../assets/wodeshoucang.png")}
                className={style.imgs}
              />
            </p>
            <div className={style.lis}>
              <div className={style.cont}>
                <h5>我的收藏</h5>
                <span>></span>
              </div>
            </div>
          </li>
          <li>
            <p>
              <img
                src={require("../../assets/kongjian.png")}
                className={style.imgs}
              />
            </p>
            <div className={style.lis}>
              <div className={style.cont}>
                <h5>Sati空间</h5>
                <span>></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Index;
