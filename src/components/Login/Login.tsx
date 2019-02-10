import axios from 'axios';
import * as React from 'react';
import { Component } from 'react';
import { ROUTES } from '../../constants/routes.constants';
import { LinkedInAuth } from '../../models/linkedin-oauth';
import { LinkedIn } from './LinkedInPage';

const CLIENT_ID = '8697fgt86y55wy';
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

    this.exchangeToken(data.code);
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
          clientId={CLIENT_ID}
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          scope="r_basicprofile r_ad_campaigns rw_organization r_emailaddress"
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

  private exchangeToken(code: string): void {
    axios.request({
      url: "/v1.0.0/auth/token",
      method: "post",
      baseURL: "http://localhost:4040",
      data: {
        code,
        redirect_uri: `${window.location.origin}${ROUTES.LOGIN_POPUP}`
      }
    }).then((res: any) => {
      const token = res.data.access_token;
      console.log(token);

      axios.get('http://localhost:4040/v1.0.0/info/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then((info: any) => {
          console.log('INFO', info);
        });
    });
  }
}

export default LoginPage;
