import {Reducer} from 'redux';

import {INITIAL_LOCAL_STORAGE} from '@constants/initialState';
import {
  ILocaleAction, ILocaleState, LocalesActionTypes
} from './types';

const reducer: Reducer<ILocaleState, ILocaleAction> = (state = INITIAL_LOCAL_STORAGE, action): ILocaleState => {
  switch (action.type) {
    case LocalesActionTypes.LOCALES_CHANGED_LOCALE: {
      return {
        ...state,
        locale: action.payload
      }
    }
  }

  return state;
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.ts` folder.
export {reducer as LocaleReducer};
