import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from 'containers/Main/Dashboard';

class RoutesContainer extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    );
  }
}

export default RoutesContainer;
