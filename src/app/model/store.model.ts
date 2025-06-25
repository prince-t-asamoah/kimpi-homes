import { AuthStoreState } from '../features/auth/models/auth.store.model';

export interface AppStore {
  auth: AuthStoreState;
}
