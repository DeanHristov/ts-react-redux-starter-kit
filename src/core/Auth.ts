import { CREDENTIALS, LOCAL_STORAGE } from "@constants/initialState";
import Utils from "@core/Utils";
import {IProfile} from "@store/profile";

class Auth {
  private userCredentials: IProfile;

  public constructor () {
    const { CREDENTIALS_KEY } = LOCAL_STORAGE;
    const savedCredentials: any = sessionStorage.getItem(CREDENTIALS_KEY) || localStorage.getItem(CREDENTIALS_KEY);

    if (Utils.isNotNull(savedCredentials)) {
      this.userCredentials = JSON.parse(savedCredentials);
    }
  }

  /**
   * When the method has been called it will login the user
   * @param passCredentials
   * @param callback
   * @return void
   */
  public login(passCredentials: {username: string, password: string}, callback?: () => void): void {
    this.userCredentials = {
      ...CREDENTIALS,
      ...passCredentials,
      isLogged: true
    };

    this.setCredentials(this.userCredentials);

    if (callback !== undefined) {
      callback.call(this, this.userCredentials);
    }
  }

  /**
   * When the method has been called it will logout the user
   * @param {callback} callback - An optional callback that After the user has been logout this function will be called
   * @return void
   */
  public logout(callback?: () => void) {
    this.userCredentials = {
      isLogged: false,
      isRemember: false
    };

    this.removeCredentials();

    if (callback !== undefined) {
      callback();
    }
  }

  /**
   * When the method be called it'll check the user credentials are they valid or not
   * @return boolean It will return true if the user is authenticated otherwise will return false
   */
  public isAuthenticate(): boolean {
    return !!this.credentials;
  }

  /**
   * It wll return the user credentials only when the user is authenticated
   * @return {(null | IProfile)} - The credentials or null if the user is not authenticated
   */
  public get credentials() {
    return this.userCredentials;
  }

  /**
   * When the method is called it will save the current state of the user's
   * credentials to the storage (localStorage / sessionStorage)
   * @param {IProfile} [newCredentials]
   * @param {boolean} remember - If to keep the user's credentials for a long term
   * @return void
   */
  private setCredentials (newCredentials = {}, remember = CREDENTIALS.isRemember): boolean {
    const storage: Storage = remember ? localStorage : sessionStorage;

    if (Utils.isNotNull(newCredentials)) {
      storage.setItem(
        LOCAL_STORAGE.CREDENTIALS_KEY,
        JSON.stringify(newCredentials)
      );

      return true;
    }

    return false;
  }

  /**
   * When it has been called will remove the whole data from the storage about the user
   * @return boolean - When the user's cradentials are removed it will return true
   */
  private removeCredentials(): boolean {
    localStorage.removeItem(LOCAL_STORAGE.CREDENTIALS_KEY);
    sessionStorage.removeItem(LOCAL_STORAGE.CREDENTIALS_KEY);

    return  true;
  }
}

export default new Auth();
