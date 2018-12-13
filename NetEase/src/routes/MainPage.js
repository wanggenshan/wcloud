import React from "react";
import RouterView from "../router/RouterView";
import { NavLink } from "dva/router";
import style from "./MainPage.scss";

class MainPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <RouterView routes={this.props.routes} />

        <footer className={style.footer}>
          <NavLink to="/main/discover">
            <p />
            <span>发现</span>
          </NavLink>
          <NavLink to="/main/video">
            <p />
            <span>视频</span>
          </NavLink>
          <NavLink to="/main/my">
            <p />
            <span>我的</span>
          </NavLink>
          <NavLink to="/main/friend">
            <p />
            <span>朋友</span>
          </NavLink>
          <NavLink to="/main/account">
            <p />
            <span>账号</span>
          </NavLink>
        </footer>
      </React.Fragment>
    );
  }
}

export default MainPage;
