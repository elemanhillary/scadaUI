import { userConstants } from '../../constants';

export const login = (state = {}, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        submitted: false,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        submitted: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggingIn: false,
        submitted: false,
      };
    default:
      return state;
  }
};
