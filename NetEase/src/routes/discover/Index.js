import React from "react";
import style from "./Index.scss";
import HotMovie from "./hot";
import NewMovie from "./new";
import { NavLink } from "dva/router";
class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFlag: true,
      tabTitlle: [
        {
          name: "个性推荐"
        },
        {
          name: "主播电台"
        }
      ]
    };
  }
  render() {
    const { tabTitlle, activeFlag } = this.state;
    return (
      <div>
        <div className={style.header}>
          <div className={style.search}>
            <p>
              <img src={require("../../assets/icon.png")} />
            </p>
            <div>
              <NavLink to={{ pathname: "/main/search" }}>
                <input />
              </NavLink>
            </div>
            <p>
              <img src={require("../../assets/audio.png")} />
            </p>
          </div>
          <div className={style.cut}>
            {tabTitlle.map((itm, ind) => {
              return (
                <span
                  onClick={() => {
                    this.setState({ activeFlag: ind % 2 === 0 });
                  }}
                  key={ind}
                >
                  {itm.name}
                </span>
              );
            })}
          </div>
          <div>{activeFlag ? <HotMovie /> : <NewMovie />}</div>
        </div>
      </div>
    );
  }
}

export default Index;
