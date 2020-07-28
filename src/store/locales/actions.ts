import {ILocaleAction, LocalesActionTypes, LocaleType} from './types';

export const actionChangeLocale = (lang: LocaleType): ILocaleAction => ({
  type: LocalesActionTypes.LOCALES_CHANGE_LOCALE,
  payload: lang
});
