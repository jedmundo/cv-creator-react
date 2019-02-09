
import * as QueryString from 'query-string';
import { Component } from 'react';

class LinkedInPopUp extends Component {

  public componentDidMount() {
    const params = QueryString.parse(window.location.search);
    if (params.error) {
      const errorMessage = params.error_description || 'Login failed. Please try again.';
      window.opener.postMessage({
        error: params.error,
        errorMessage,
        from: 'Linked In'
      }, window.location.origin);
      // Close tab if user cancelled login
      if (params.error === 'user_cancelled_login') {
        window.close();
      }
    }
    if (params.code) {
      console.log('sending code', params.code);
      window.opener.postMessage({ code: params.code, from: 'Linked In' }, window.location.origin);
    }
  }

  public render() {
    return null;
  }
}

export default LinkedInPopUp;
