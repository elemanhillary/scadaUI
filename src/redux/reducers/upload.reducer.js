import { userConstants } from '../../constants';

export const upload = (state = {}, action) => {
  switch (action.type) {
    case userConstants.UPLOAD_REQUEST:
      return {
        uploading: true,
        uploaded: false,
        user: action.user,
      };
    case userConstants.UPLOAD_SUCCESS:
      return {
        uploading: false,
        uploaded: true,
        user: action.user,
      };
    case userConstants.UPLOAD_FAILURE:
      return {
        uploading: false,
        uploaded: false,
      };
    default:
      return state;
  }
};
