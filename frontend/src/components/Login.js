import React, {Component} from 'react';

export default class Login extends Component {
  handleLogin = (type) => {
    if (this.props.onLogin) {
      this.props.onLogin(type);
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome to Reindex!</h1>
        <div>
          <button onClick={this.handleLogin.bind(this, 'facebook')}>
            Login with FB
          </button>
        </div>
      </div>
    );
  }
}
