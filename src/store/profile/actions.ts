import { IProfile, IProfileAction, ProfileActionTypes } from './types';

export const actionSignIn = (userPayload: IProfile): IProfileAction => ({
  type: ProfileActionTypes.PROFILE_SIGN_IN_REQUEST,
  payload: userPayload
});

export const actionSignOut = (): IProfileAction => ({
  type: ProfileActionTypes.PROFILE_SIGN_OUT_REQUEST
});

export const actionSignUp = (item: IProfile): IProfileAction => ({
  type: ProfileActionTypes.PROFILE_SIGN_UP_REQUEST,
  payload: item
});
