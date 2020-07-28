import React, {FunctionComponent, useEffect} from 'react';
import {useTranslation} from "react-i18next";
import {RouteComponentProps} from 'react-router-dom';

import HeaderContainer from "@containers/HeaderContainer";
import Button from "@ui/Button";
import {actionSignIn, IProfile} from "@store/profile";

import './LoginContainer.scss';
import useStore from "@common/hooks/useStore";
import {AUTHORIZED_DEFAULT_ROUTE_DESTINATION} from "@constants/initialState";
import {useSelector} from "react-redux";
import {IGlobalState} from "@store/createStore";

export interface ILoginContainerProps extends RouteComponentProps{}

const LoginContainer: FunctionComponent<ILoginContainerProps> = ({ history }) => {
  const { t } = useTranslation();
  const { dispatch } = useStore()
  const profile: IProfile = useSelector<IGlobalState, IProfile>((state) => state.profile.data)

  useEffect(() => {
    if (profile.isLogged) {
      history.push(AUTHORIZED_DEFAULT_ROUTE_DESTINATION)
    }
  },[ profile.isLogged ])

  return (
    <div className={'login-container'}>
      <HeaderContainer title={t("login:page:title:txt")} />
      <div className={'login-body'}>
        <Button title={t("login:btn:title:txt")} type={"green"} onClick={() => {
          dispatch(actionSignIn({
            username: "demo-user",
            password: "demo-pass"
          }));
        }} />
      </div>
    </div>
  )
}

export default LoginContainer;
