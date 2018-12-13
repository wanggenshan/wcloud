import React from "react";
import { Carousel } from "antd-mobile";
import { connect } from "dva";
import style from "../discover/Index.scss";
@connect(
  ({ discover }) => {
    return discover;
  },
  dispatch => {
    return {
      getBanner: () => {
        dispatch({ type: "discover/getBanner" });
      },
      recommend: () => {
        dispatch({ type: "discover/recommend" });
      }
    };
  }
)
class Index extends React.PureComponent {
  componentDidMount() {
    this.props.getBanner();
    this.props.recommend();
  }
  render() {
    let { banners, result } = this.props;
    console.log(result);
    return (
      <div className={style.new}>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={index => console.log("slide to", index)}
        >
          {banners.map((item, index) => {
            return <img key={index} src={item.imageUrl} />;
          })}
        </Carousel>
        <div className={style.newIcon}>
          <div>
            <div className={style.im}>
              <img src={require("../../assets/category.png")} />
            </div>
            <p>电台分类</p>
          </div>
          <div>
            <div className={style.im}>
              <img src={require("../../assets/biji.png")} />
            </div>
            <p>电台排行</p>
          </div>
          <div>
            <div className={style.im}>
              <img src={require("../../assets/djxm.png")} />
            </div>
            <p>DJ电音</p>
          </div>
          <div>
            <div className={style.im}>
              <img src={require("../../assets/xiaobing.png")} />
            </div>
            <p>小冰电台</p>
          </div>
        </div>
        <div className={style.tit}>
          <h3>今日优选</h3>
          <span>换一换</span>
        </div>
        <ul className={style.newulst}>
          {result.map((item, index) => {
            return (
              <li key={index}>
                <img src={item.picUrl} />
                <div className={style.newCont}>
                  <p>{item.name}</p>
                  <p>节目:{item.trackCount}</p>
                  <p>{item.copywriter}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Index;
