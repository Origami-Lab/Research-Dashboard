import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import enMessages from 'lang/en';
import { store } from 'core';
import 'antd/dist/antd.css';
import RoutesContainer from 'containers/RoutesContainer/RoutesContainer';
import LoginContainer from 'containers/Auth/LoginContainer';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

import 'assets/styles/App.scss';

addLocaleData([...en]);
const initialLang = 'en';

const messages = {
  en: enMessages
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: initialLang
    };
  }

  render() {
    const { lang } = this.state;
    const message = messages[lang];
    return (
      <IntlProvider locale={lang} messages={message}>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={LoginContainer} />
              <PrivateRoute path="/lab" component={RoutesContainer} />
              {/* <Redirect from="/" to="/login" /> */}
              <Redirect from="/" to="/lab/dashboard" />
            </Switch>
          </BrowserRouter>
        </Provider>
      </IntlProvider>
    );
  }
}

export default hot(App);
