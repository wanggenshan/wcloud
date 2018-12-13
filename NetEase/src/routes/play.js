import React from "react";
import { connect } from "dva";
import "./play.scss";
import { forTime } from "../utils/index";
import PlayHeader from "../components/PlayHeader";
import { Carousel } from "antd-mobile";
import Lyric from "../components/Lyric";
@connect(
  ({ play }) => {
    // console.log("plat....", play);
    return play;
  },
  dispatch => {
    return {
      getUrl: id => {
        dispatch({ type: "play/getUrl", payload: id });
      },
      chanagePlay: payload => {
        dispatch({
          type: "play/changePlay",
          payload
        });
      }
    };
  }
)
class play extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      progress: 0,
      isPlay: true
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getUrl(id);
  }
  timeUpdata() {
    let progress =
      (this.refs.audio.currentTime / this.refs.audio.duration) * 100;
    this.setState({ progress });
    // this.props.chanagePlay("next");
  }
  get duration() {
    if (this.refs.audio && this.refs.audio.duration) {
      return forTime(this.refs.audio.duration);
    }
    return "00:00";
  }
  get currentTime() {
    if (this.refs.audio && this.refs.audio.currentTime) {
      return forTime(this.refs.audio.currentTime);
    }
    return "00:00";
  }
  changeState() {
    this.setState(
      {
        isPlay: !this.state.isPlay
      },
      () => {
        this.state.isPlay ? this.refs.audio.play() : this.refs.audio.pause();
      }
    );
  }
  chanagePlay(type) {
    this.props.chanagePlay(type);
  }
  render() {
    if (!Object.keys(this.props.detail).length) {
      return null;
    }
    return (
      <div className="playWrap">
        {/* <Carousel
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
        </Carousel> */}
        <PlayHeader
          name={this.props.detail.name}
          picUrl={this.props.detail.al.picUrl}
        />
        <Lyric Lyric={this.props.Lyric} />
        {this.props.url ? (
          <audio
            src={this.props.url}
            autoPlay
            ref="audio"
            onTimeUpdate={() => this.timeUpdata()}
          />
        ) : null}
        <div className="progress">
          <span className="staer">{this.currentTime}</span>
          <p className="press">
            <span style={{ width: this.state.progress + "%" }} />
            <em
              className="dian"
              style={{ left: this.state.progress - 1 + "%" }}
            />
          </p>
          <span className="ends">{this.duration}</span>
        </div>
        <div className="cut">
          <div onClick={() => this.chanagePlay("prev")}>上一曲</div>
          <div onClick={this.changeState.bind(this)}>
            {this.state.isPlay ? "暂停" : "播放"}
          </div>
          <div onClick={() => this.chanagePlay("next")}>下一曲</div>
        </div>
        <ul className="ulst">
          {this.props.playList.map((item, index) => {
            return (
              <li
                className="songsLi"
                onClick={() => this.goPlay(item.id)}
                key={index}
              >
                <p className="songs">{item.detail.name}</p>
                <p className="songsUser">{`${item.detail.al.name}`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default play;
