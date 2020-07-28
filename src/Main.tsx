import React, { FunctionComponent, useEffect, ReactNode } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import rootRoutes from '@routes/index';
import i18n from "@constants/i18next.config";
import Logger from "@core/Logger";

interface IMainProps {}

import './Main.scss';
import ProtectedRoute from "@common/ProtectedRoute";

const Main: FunctionComponent<IMainProps> = () => {
  const logger: Logger = Logger.getInstance("App");
  const renderRoutes = (route: any): ReactNode => {
    if (route.isProtected) {
      return (
        <ProtectedRoute
          key={`route-${route.path}`}
          exact={route.exact}
          path={route.path}
          component={route.component}/>
      );
    }

    return (
      <Route
        key={`route-${route.path}`}
        exact={route.exact}
        path={route.path}
        component={route.component} />
    )
  }

  /**
   * When When the function been called it'll dispatch a new action and change the locale in the store
   * @param lng string
   * @return void
   */
  const onChangeLocale = (lng: string): void => {
    console.log(`Language is changed to ${lng}`);
  }

  useEffect(() => {
    logger.warn("The app is lunched... :)");

    i18n.on("languageChanged", onChangeLocale)
    return () => {
      i18n.off("languageChanged", onChangeLocale)
    }
  }, []);


  return (
    <Switch>
      {rootRoutes().map((route) => renderRoutes(route))}
      <Route render={() => <Redirect to={'/login'}/>}/>
    </Switch>
  )
};

export default Main;
