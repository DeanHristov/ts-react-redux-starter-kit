import * as React from 'react'
import {Route, Redirect} from "react-router-dom";

import auth from '@core/Auth';
import {UN_AUTHORIZED_ROUTE_DESTINATION} from "@constants/initialState";

// @ts-ignore
export default ({component: Component, ...rest}) => (
  <Route {...rest} render={
    props => auth.isAuthenticate() ? <Component { ...props} /> : <Redirect to={{
      pathname: UN_AUTHORIZED_ROUTE_DESTINATION
    }} />
  } />
);
