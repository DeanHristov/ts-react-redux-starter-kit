import React, {FunctionComponent} from "react";
import {actionChangeLocale, LocaleType} from "@store/locales";
import useStore from "@common/hooks/useStore";

export interface ILocalesContainerProps {
  languages: LocaleType[];
  active: LocaleType;
}

const LocalesContainer: FunctionComponent<ILocalesContainerProps> = ({languages, active}) => {
  const { dispatch } = useStore();
  return (
    <ul className={"locales"}>
      {languages.map(item => (
        <li key={`locale-${item}`}
            onClick={() => dispatch(actionChangeLocale(item))}
            className={`${item === active ? "active" : ""}`}>{item}</li>
      )) }
    </ul>
  )
}

export default LocalesContainer;
