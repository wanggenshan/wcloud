import React from "react";
import { connect } from "dva";

// es7的装饰器
@connect(
  state => {
    console.log("state...", state);
    return {
      login: state.login
    };
  },
  dispatch => {
    return {
      login: payload => {
        dispatch({
          type: "index/login",
          payload
        });
      }
    };
  }
)
class LoginPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      phone: "17718445587",
      password: "147852."
    };
  }

  submit() {
    if (!/^1[34578]\d{9}$/.test(this.state.phone)) {
      alert("请输入正确的手机号码");
      return;
    }
    if (!/^[a-zA-Z\d]{6,12}$/.test(this.state.password)) {
      alert("请输入正确的密码");
      return;
    }
    this.props.login({
      phone: this.state.phone,
      password: this.state.password
    });
  }

  render() {
    console.log("this.props...", this.props);
    return (
      <React.Fragment>
        <input
          placeholder="手机号"
          maxLength="11"
          value={this.state.phone}
          onChange={e => this.setState({ phone: e.target.value })}
        />
        <input
          placeholder="密码"
          type="password"
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value })}
        />
        <button onClick={this.submit.bind(this)}>登陆</button>
      </React.Fragment>
    );
  }
}

export default LoginPage;
