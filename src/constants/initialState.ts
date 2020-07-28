import {ILocales} from "@store/locales";
import {IProfile} from "@store/profile";

export const LOCAL_STORAGE: {LOCALE: string, CREDENTIALS_KEY: string} = {
  LOCALE: 'app:locale',
  CREDENTIALS_KEY: 'app:credentials'
};

export const INITIAL_LOCAL_STORAGE: ILocales = {
  languages: [ "en", "bg" ],
  locale: "en"
}

export const CREDENTIALS: IProfile = {
  isLogged: false,
  isRemember: false
};

export const UN_AUTHORIZED_ROUTE_DESTINATION: string = '/login';
export const AUTHORIZED_DEFAULT_ROUTE_DESTINATION: string = '/home';

export const APP_URL_ROUTES = [
  {isProtected: true, path: AUTHORIZED_DEFAULT_ROUTE_DESTINATION, title: 'home', isUsage: true},
  {isProtected: false, path: UN_AUTHORIZED_ROUTE_DESTINATION, title: 'login', isUsage: false}
];
