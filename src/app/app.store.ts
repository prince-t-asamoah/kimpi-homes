import {
  ActionReducer,
  Action,
  MetaReducer,
  ActionReducerMap,
} from '@ngrx/store';
import { AppStore } from './model/store.model';
import { authReducer } from './features/auth/auth.store.reducers';

export function storageSyncMetaReducer(
  storageType: 'localStorage' | 'sessionStorage' | null,
  featureKey: string
): MetaReducer<AppStore> {
  return (reducer: ActionReducer<AppStore>) => {
    return (state, action: Action) => {
      let storage: Storage | null = null;
      if (storageType === null) {
        console.warn('Storage is not available, skipping sync.');
        return reducer(state, action);
      }
      if (storageType === 'localStorage' && localStorage) {
        storage = localStorage;
      } else if (storageType === 'sessionStorage' && sessionStorage) {
        storage = sessionStorage;
      } else {
        console.warn('Invalid storage type, skipping sync.');
        return reducer(state, action);
      }
      const storedState = storage.getItem(featureKey);
      if (storedState) {
        state = { ...state, ...JSON.parse(storedState) };
      }
      const newState = reducer(state, action);
      storage.setItem(featureKey, JSON.stringify(newState));
      return newState;
    };
  };
}

export const appStoreReducers: ActionReducerMap<AppStore> = {
  auth: authReducer,
};

export const metaReducers: MetaReducer<AppStore>[] = [
  storageSyncMetaReducer('localStorage', 'auth'),
];
