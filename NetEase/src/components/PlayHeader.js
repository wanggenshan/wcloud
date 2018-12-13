import React from "react";
import "../routes/play.scss";
export default props => {
  return (
    <React.Fragment>
      <div className="songsName">{props.name}</div>
      <div className="play-img">
        <img src={props.picUrl} className="imgs" />
      </div>
    </React.Fragment>
  );
};
