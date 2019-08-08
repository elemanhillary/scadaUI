import { userConstants } from '../../constants';

export const signup = (state = {}, action) => {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        registering: true,
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        registered: true,
      };
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};
