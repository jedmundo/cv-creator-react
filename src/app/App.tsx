import * as React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'src/components/Home/Home';
import LoginPage from 'src/components/Login/Login';
import Navigation from 'src/components/Navigation/Navigation';
import { ROUTES } from '../constants/routes.constants';

class App extends React.Component {

  public render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch >
            {/* <Route path={ROUTES.LOGIN} component={LinkedInPopUp} /> */}
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.LOGIN} component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
