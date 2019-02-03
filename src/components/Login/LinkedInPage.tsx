import * as React from 'react';
import { Component } from 'react';

export class LinkedIn extends Component {

  public componentWillUnmount() {
    window.removeEventListener('message', this.receiveMessage, false);
    if (this.popup && !this.popup.closed) {
      this.popup.close();
    }
  }

  public getUrl = () => {
    const { redirectUri, clientId, state, scope } = this.props;
    // TODO: Support IE 11
    const scopeParam = (scope) ? `&scope=${encodeURI(scope)}` : ''
    const linkedInAuthenLink = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}${scopeParam}&state=${state}`;
    return linkedInAuthenLink;
  }

  public receiveMessage = (event) => {
    if (event.origin === window.location.origin) {
      console.log('event data:', event.data);
      if (event.data.errorMessage && event.data.from === 'Linked In') {
        this.props.onFailure(event.data);
        this.popup && this.popup.close();
      } else if (event.data.code && event.data.from === 'Linked In') {
        this.props.onSuccess({ code: event.data.code });
        this.popup && this.popup.close();
      }
    }
  };

  public handleConnectLinkedInClick = (e: any) => {
    if (e) {
      e.preventDefault();
    }
    this.props.onClick && this.props.onClick();
    this.popup = window.open(this.getUrl(), '_blank', 'width=600,height=600');
    window.removeEventListener('message', this.receiveMessage, false);
    window.addEventListener('message', this.receiveMessage, false);
  }


  public render() {
    return (
      <button
        type="button"
        onClick={this.handleConnectLinkedInClick}
      >
        <img src={require('../../assets/linkedin_logo.png')} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
      </button>
    );
  }
}

export default LinkedIn;
