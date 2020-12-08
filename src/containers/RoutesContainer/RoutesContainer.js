import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from 'containers/Main/Dashboard';
import Experiments from 'containers/Main/Experiments';
import Protocols from 'containers/Main/Protocols';
import Reports from 'containers/Main/Reports';
import Inventory from 'containers/Main/Inventory';
import Notebook from 'containers/Main/Notebook';

class RoutesContainer extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/lab/dashboard" component={Dashboard} />
        <Route exact path="/lab/experiments" component={Experiments} />
        <Route exact path="/lab/protocols" component={Protocols} />
        <Route exact path="/lab/reports" component={Reports} />
        <Route exact path="/lab/inventory" component={Inventory} />
        <Route exact path="/lab/notebook" component={Notebook} />
      </Switch>
    );
  }
}

export default RoutesContainer;
