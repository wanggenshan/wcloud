import React from "react";
import style from "./Index.scss";
import { connect } from "dva";
import { Carousel } from "antd-mobile";
import { NavLink } from "dva/router";
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
class hot extends React.PureComponent {
  componentDidMount() {
    this.props.getBanner();
    this.props.recommend();
  }

  render() {
    let { banners, result } = this.props;
    // console.log(banners);
    // console.log(result);
    return (
      <div>
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
        <div className={style.navList}>
          <div>
            <div className={style.img}>
              <img src={require("../../assets/flyme_icon-.png")} />
            </div>
            <p>私人TV</p>
          </div>
          <div>
            <div className={style.img}>
              <img src={require("../../assets/rili.png")} />
            </div>
            <p>每日推荐</p>
          </div>
          <div>
            <div className={style.img}>
              <img src={require("../../assets/gedan.png")} />
            </div>
            <p>歌单</p>
          </div>
          <div>
            <div className={style.img}>
              <img src={require("../../assets/audio.png")} />
            </div>
            <p>排行榜</p>
          </div>
        </div>
        <div className={style.cont}>
          <NavLink to={{ pathname: "/main/recommend" }}>
            <h3>推荐歌单</h3>
            <span>></span>{" "}
          </NavLink>

          <div className={style.recommend}>
            <ul className={style.ulst}>
              {result.map((item, index) => {
                return (
                  <li key={index}>
                    <img src={item.picUrl} />
                    <p>{item.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
let maps = state => {
  return {};
};
let mapd = dispatch => {
  return {
    getBanner: () => {
      dispatch({
        type: "discover/getBanner"
      });
    }
  };
};
export default hot;
