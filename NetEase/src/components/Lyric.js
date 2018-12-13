import React from "react";
class Lyric extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.lyric);
  }
  render() {
    return null;
  }
}
export default Lyric;
