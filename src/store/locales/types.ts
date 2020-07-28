export type LocaleType = 'en' | 'bg';

export interface ILocaleMessage {
  [index: string]: object;
}

export interface ILocales {
  locale: LocaleType;
  languages: LocaleType[];
}

export enum LocalesActionTypes {
  LOCALES_CHANGE_LOCALE = '@Locales/LOCALES_CHANGE_LOCALE',
  LOCALES_CHANGED_LOCALE = '@Locales/LOCALES_CHANGED_LOCALE'
}

export interface ILocaleAction {
  type: LocalesActionTypes;
  payload: LocaleType;
}

export interface ILocaleState {
  readonly locale: LocaleType;
  readonly languages: LocaleType[];
  readonly resources?: ILocaleMessage
}
