import * as React from 'react';
import { connect } from 'react-redux';

import { GetLinkInDataAction } from '../actions/GetLinkedInData.action';
import './App.scss';

interface Props {
  doAction: () => any;
};

const mapStateToProps = (state: any) => ({
  ...state
})

const mapDispatchToProps = (dispatch: any) => ({
  doAction: () => dispatch(GetLinkInDataAction())
})

class App extends React.Component<Props> {

  public simpleAction = () => {
    this.props.doAction();
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CV creator</h1>
        </header>
        <p className="App-intro">
          Letsa goooo!
        </p>
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
