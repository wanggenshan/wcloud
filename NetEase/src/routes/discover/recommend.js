import React from "react";
import { connect } from "dva";
import style from "./recommend.scss";
import { Link } from "dva/router";
@connect(
  ({ discover }) => {
    return discover;
  },
  dispatch => {
    return {
      recommend: () => {
        dispatch({ type: "discover/recommend" });
      }
    };
  }
)
class Recommend extends React.PureComponent {
  componentDidMount() {
    this.props.recommend();
  }
  render() {
    let { result } = this.props;
    console.log(result);
    return (
      <div>
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
    );
  }
}

export default Recommend;
