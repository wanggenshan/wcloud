import React from "react";
import style from "./Index.css";
class Index extends React.PureComponent {
  render() {
    return (
      <div>
        <div className={style.wrap}>
          <div className={style.header}>
            <div className={style.search}>
              <p>
                <img
                  src={require("../../assets/icon.png")}
                  className={style.img}
                />
              </p>
              <input />
              <p>
                <img
                  src={require("../../assets/audio.png")}
                  className={style.img}
                />
              </p>
            </div>
            <div className={style.nav}>
              <div>推荐</div>
              <div>现场</div>
              <div>翻唱</div>
              <div>听到请回答</div>
              <div>听BGM</div>
            </div>
            <div className={style.cont}>
              <div className={style.list}>
                <div className={style.play}>
                  <img src={require("../../assets/videos.png")} />
                </div>
                <div className={style.headline}>
                  街头二胡演奏周传雄《黄昏》，一曲肝肠断，天涯何处寻觅知音
                </div>
                <div className={style.message}>
                  <div className={style.messageImg}>1</div>
                  <div className={style.nickname}>悟空音乐随笔</div>
                  <div className={style.nickname} />
                  <div className={style.nickname}>9999</div>
                  <div className={style.nickname}>9999</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
