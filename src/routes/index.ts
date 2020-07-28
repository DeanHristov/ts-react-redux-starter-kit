import LoginContainer from './Login/LoginContainer';
import HomeContainer from './Home/HomeContainer';
import {APP_URL_ROUTES} from "@constants/initialState";

const mapComponentToRoute = {
  home: HomeContainer,
  login: LoginContainer
}

export default () => APP_URL_ROUTES.map(item => ({
  component: mapComponentToRoute[item.title],
  ...item
}));
