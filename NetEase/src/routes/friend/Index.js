import React from "react";
import "./Index.scss";
class Index extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="header">
          <div className="search">
            <p>
              <img src={require("../../assets/icon.png")} className="img" />
            </p>
            <div className="nearby">
              <span>附近</span>
              <span>动态</span>
            </div>
            <p>
              <img src={require("../../assets/audio.png")} className="img" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
