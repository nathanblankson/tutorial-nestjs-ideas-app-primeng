import { Action } from '@ngrx/store';

import { User } from '@app/models/user';

export enum UserActions {
  LOAD_USERS = '[Users] Load Users',
  LOAD_USERS_SUCCESS = '[Users] Load Users Success'
}

export class LoadUsers implements Action {
  readonly type = UserActions.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActions.LOAD_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

export type Action = LoadUsers | LoadUsersSuccess;
