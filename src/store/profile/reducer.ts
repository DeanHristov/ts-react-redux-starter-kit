import {Reducer} from 'redux';

import {CREDENTIALS} from '@constants/initialState';
import {IProfileAction, IProfileState, ProfileActionTypes} from './types';

const initialState: IProfileState = {
  data: CREDENTIALS
}

const reducer: Reducer<IProfileState, IProfileAction> = (state = initialState, action) => {

  switch (action.type) {

    case ProfileActionTypes.PROFILE_SIGN_IN_SUCCESS: {
      return {
        ...state,
        data: {
          ...action.payload,
          lastSignIn: (new Date()).getTime()
        }
      }
    }

    case ProfileActionTypes.PROFILE_SIGN_OUT_SUCCESS: {
      return {
        ...state,
        data: action.payload
      }
    }

  }

  return state;
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.ts` folder.
export {reducer as ProfileReducer}
