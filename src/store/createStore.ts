import {composeWithDevTools} from 'redux-devtools-extension';
import {LocationState} from "history";
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {all, fork} from 'redux-saga/effects';
import {connectRouter, routerMiddleware, RouterState} from 'connected-react-router';
import {applyMiddleware, combineReducers, compose, createStore as Store, Reducer, StoreEnhancer} from 'redux';

import {ILocaleState, LocaleReducer} from "./locales";
import {IProfileState, ProfileReducer} from "@store/profile";
import rootProfileSaga from "@store/profile/sagas";
import {SagaMiddleware} from "@redux-saga/core";
import rootLocales from "@store/locales/sagas";

/**
 * The global App state schema
 */
export interface IGlobalState {
  locales: ILocaleState;
  profile: IProfileState;
  router: RouterState;
}

export default (initialState: any = {}, history: any): ReturnType<typeof rootReducer> => {
  let enhancers: StoreEnhancer;
  let GlobalStore: ReturnType<typeof rootReducer>;

  const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
  const middlewares: any[] = [
    routerMiddleware<LocationState>(history),
    sagaMiddleware
  ];

  // Created the store's root reducer
  const rootReducer: Reducer = combineReducers<IGlobalState>({
    locales: LocaleReducer,
    profile: ProfileReducer,
    router: connectRouter(history)
  });

  // Create redux enhancers
  if (__DEV__) {
    middlewares.push(reduxLogger)
    enhancers = composeWithDevTools(applyMiddleware(...middlewares))
  } else {
    enhancers = compose(applyMiddleware(...middlewares))
  }

  // Creating the app store
  GlobalStore = Store(rootReducer, initialState, enhancers)

  // Start our redux-saga
  function* rootSaga() {
    yield all([ fork(rootProfileSaga), fork(rootLocales) ])
  }
  sagaMiddleware.run(rootSaga);

  return GlobalStore;
}
