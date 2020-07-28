import React, {FunctionComponent, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {RouteComponentProps} from "react-router-dom";

import HeaderContainer from "@containers/HeaderContainer";
import Button from "@ui/Button";
import useStore from "@common/hooks/useStore";
import {actionSignOut, IProfile} from "@store/profile";
import {useSelector} from "react-redux";
import {IGlobalState} from "@store/createStore";

import './HomeContainer.scss';
import {ILocaleState} from "@store/locales";
import LocalesContainer from "@routes/Home/containers/Locales";
import {UN_AUTHORIZED_ROUTE_DESTINATION} from "@constants/initialState";

export interface IHomeContainerProps extends RouteComponentProps{}

const HomeContainer: FunctionComponent<IHomeContainerProps> = ({history}) => {
  const {t} = useTranslation();
  const { dispatch } = useStore();
  const profile: IProfile = useSelector<IGlobalState, IProfile>((state) => state.profile.data)
  const locales: ILocaleState = useSelector<IGlobalState, ILocaleState>((state) => state.locales)

  useEffect(() => {
    if (!profile.isLogged) {
      history.push(UN_AUTHORIZED_ROUTE_DESTINATION)
    }
  }, [ profile.isLogged ])

  return (
    <div className={'home-container'}>
      <HeaderContainer title={t("home:page:title:txt")} />
      <div className={'home-body'}>
        <div>
         <LocalesContainer languages={locales.languages} active={locales.locale} />
          <Button title={t("home:btn:title:txt")} type={"red"} onClick={() => {
            dispatch(actionSignOut())
          }} />
        </div>
      </div>
    </div>
  )
}

export default HomeContainer;
