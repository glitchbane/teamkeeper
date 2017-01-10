import {User} from "../../features/user/user.model";
import * as userActions from "./user.actions";

export interface State {
  _id: string,
  authProfile: Object;
  entity: User;
  loaded: boolean
}

const initialState: State = {
  _id: null,
  authProfile: null,
  entity: null,
  loaded: false
};

export function reducer (state = initialState, action: userActions.Actions)  {
  let newState: State;

  switch(action.type) {

    case userActions.ActionTypes.LOAD_USER_SUCCESS:{
      const user: User = action.payload;

      newState =  {
        _id: user._id,
        authProfile: state.authProfile,
        entity: Object.assign({}, state.entity, user),
        loaded: true
      }

      break;
    }

    case userActions.ActionTypes.LOAD_USER_FAILURE: {
      const user: User = action.payload;

      newState = state;

      break;
    }

    case userActions.ActionTypes.CREATE_USER_SUCCESS:{
        const user: User = action.payload;

        newState =  {
          _id: user._id,
          authProfile: state.authProfile,
          entity: Object.assign({}, state.entity, user),
          loaded: true
        }

        break;
    }
    case userActions.ActionTypes.CREATE_USER_FAILURE: {
      newState = state;
    }
    default: newState = state;

      return newState;


  }
}
