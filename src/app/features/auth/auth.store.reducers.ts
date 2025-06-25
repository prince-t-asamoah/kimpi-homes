import { createAction, createReducer, on, props } from '@ngrx/store';
import { AppStore } from '../../model/store.model';
import { AuthStoreState } from './models/auth.store.model';

export const updateAuthState = createAction(
  '[Auth] Update Auth State',
  props<AuthStoreState>()
);

const initialState: AppStore['auth'] = {
  isAuthenticated: false,
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(updateAuthState, (state, { user, isAuthenticated }) => ({
    ...state,
    isAuthenticated: isAuthenticated ?? state.isAuthenticated,
    user: user ?? state.user,
  }))
);

export const selectIsAuthenticated = (state: AppStore): boolean =>
  state.auth.isAuthenticated;
export const selectUser = (state: AppStore): AuthStoreState['user'] =>
  state.auth.user;
