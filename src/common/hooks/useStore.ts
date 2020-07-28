import {useContext} from 'react';
import {ReactReduxContext} from "react-redux";

export default () => {
  const { store } = useContext(ReactReduxContext);
  const { getState, dispatch } = store;

  return {state: getState(), dispatch};
}
