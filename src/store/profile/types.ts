export enum ProfileActionTypes {
  PROFILE_SIGN_IN_REQUEST = '@PROFILE/PROFILE_SIGN_IN_REQUEST',
  PROFILE_SIGN_IN_SUCCESS = '@PROFILE/PROFILE_SIGN_IN_SUCCESS',
  PROFILE_SIGN_IN_FAILURE = '@PROFILE/PROFILE_SIGN_IN_FAILURE',

  PROFILE_SIGN_OUT_REQUEST = '@PROFILE/PROFILE_SIGN_OUT_REQUEST',
  PROFILE_SIGN_OUT_SUCCESS = '@PROFILE/PROFILE_SIGN_OUT_SUCCESS',
  PROFILE_SIGN_OUT_FAILURE = '@PROFILE/PROFILE_SIGN_OUT_FAILURE',

  PROFILE_SIGN_UP_REQUEST = '@PROFILE/PROFILE_SIGN_UP_REQUEST',
  PROFILE_SIGN_UP_SUCCESS = '@PROFILE/PROFILE_SIGN_UP_SUCCESS',
  PROFILE_SIGN_UP_FAILURE = '@PROFILE/PROFILE_SIGN_UP_FAILURE'
}


export interface IProfile {
  isLogged?: boolean;
  isRemember?: boolean;
  fullName?: string;
  firstName?: string;
  familyName?: string;
  email?: string;
  password?: string;
  username?: string;
  passcode?: number;
  signUpDate?: number;
  lastSignIn?: number;
}

export interface IProfileState {
  data: IProfile
}

export interface IProfileAction {
  readonly type: ProfileActionTypes
  readonly payload?: any
}
