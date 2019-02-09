import * as React from 'react';
import { Component } from 'react';
import { LinkedInAuth } from '../../models/linkedin-oauth';
import { LinkedIn } from './LinkedInPage';

class LoginPage extends Component {

  public state = {
    code: '',
    errorMessage: '',
  };

  public handleSuccess = (data: LinkedInAuth) => {
    this.setState({
      code: data.code,
      errorMessage: '',
    });
  }

  public handleFailure = (error: any) => {
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }

  public render() {
    const { code, errorMessage } = this.state;
    return (
      <div>
        <LinkedIn
          clientId="8697fgt86y55wy"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri="http://localhost:3000/login-popup"
        >
          Log in with Linked in
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}

export default LoginPage;
