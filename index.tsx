import * as React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import {Store} from "redux";
import {createBrowserHistory, LocationState} from 'history';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import createAppStore from '@store/createStore'
import '@constants/i18next.config';

import Main from "./src/Main";

const history = createBrowserHistory<LocationState>();
const store: Store = createAppStore({}, history);

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact={false} path={'/'} component={Main}/>
    </ConnectedRouter>
  </Provider>
), document.getElementById("root-container"));
