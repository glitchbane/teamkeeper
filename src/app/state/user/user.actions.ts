
import {User} from "../../features/user/user.model";
import {Action} from "@ngrx/store";

export const ActionTypes = {
  LOAD_USER:            '[User] Load User',
  LOAD_USER_SUCCESS:    '[User] Load User Success',
  LOAD_USER_FAILURE:    '[User] Load User Failure',
  CREATE_USER:          '[User] Create User',
  CREATE_USER_SUCCESS:  '[User] Create User Success',
  CREATE_USER_FAILURE:  '[User] Create User Failure',

};

export class LoadUserAction implements Action {
  type = ActionTypes.LOAD_USER;

  constructor (public payload: User){}
}
export class LoadUserSuccessAction implements Action {
  type = ActionTypes.LOAD_USER_SUCCESS;

  constructor (public payload: User){}
}
export class LoadUserFailureAction implements Action {
  type = ActionTypes.LOAD_USER_FAILURE;

  constructor (public payload: User){}
}

export class CreateUserAction implements Action {
  type = ActionTypes.CREATE_USER;

  constructor (public payload: User){}
}
export class CreateUserSuccessAction implements Action {
  type = ActionTypes.CREATE_USER_SUCCESS;

  constructor (public payload: User){}
}
export class CreateUserFailureAction implements Action {
  type = ActionTypes.CREATE_USER_FAILURE;

  constructor (public payload: User){}
}

export type Actions =
  LoadUserAction
  | LoadUserSuccessAction
  | LoadUserFailureAction
  | CreateUserAction
  | CreateUserSuccessAction
  | CreateUserFailureAction
