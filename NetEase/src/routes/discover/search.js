import React from "react";
import { connect } from "dva";
import "./search.scss";
import { Link } from "dva/router";
@connect(
  ({ discover }) => {
    let { songs, songCount } = discover;
    return {
      songs,
      songCount
    };
  },
  dispatch => {
    return {
      search: payload => {
        dispatch({
          type: "discover/search",
          payload
        });
      },
      playAll: payload => {
        dispatch({
          type: "play/getUrls",
          payload
        });
      }
    };
  }
)
class Search extends React.PureComponent {
  // componentDidMount() {
  // this.props.getRecommendResource();
  // this.props.search();
  // }
  search() {
    let search = this.refs.search.value;
    if (search) {
      this.props.search(search);
    }
  }
  goPlay(id) {
    this.props.history.push("/play", id);
  }
  playAll() {
    this.props.playAll(this.props.songs.map(item => item.id));
    this.props.history.push(`/play/${this.props.songs[0].id}`);
  }
  render() {
    let { songs } = this.props;
    // console.log(songs);
    return (
      <div>
        <input placeholder="歌曲" ref="search" className="sea" />
        <button onClick={this.search.bind(this)} className="btn">
          搜索
        </button>
        <button onClick={this.playAll.bind(this)}>播放全部</button>
        <ul>
          {songs.map((item, index) => {
            return (
              <Link to={`/play/${item.id}`} key={index}>
                <li className="songsLi" onClick={() => this.goPlay(item.id)}>
                  <p className="songs">{item.name}</p>
                  <p className="songsUser">{`${item.artists[0].name}-${
                    item.album.name
                  }`}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Search;
