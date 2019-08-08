import { userConstants } from '../../constants';
import { alertActions } from './alert.actions';
import { loginUser, signUpUser, uploadImage } from '../../services';

export const login = (username, password) => {
  const request = user => ({
    type: userConstants.LOGIN_REQUEST,
    user,
  });
  const success = user => ({
    type: userConstants.LOGIN_SUCCESS,
    user,
  });
  const failure = error => ({
    type: userConstants.LOGIN_FAILURE,
    error,
  });
  return (dispatch) => {
    dispatch(request({ username }));
    loginUser(username, password)
      .then((user) => {
        if (user.error) {
          dispatch(failure(user.error));
          dispatch(alertActions.error(user.error));
        } else {
          dispatch(success(user));
          dispatch(alertActions.success(user.message));
          localStorage.setItem('cicadaToken', user.user.token);
        }
      })
      .catch((error) => {
        dispatch(alertActions.error(error));
      });
  };
};

export const signup = (username, password) => {
  const request = user => ({
    type: userConstants.REGISTER_REQUEST,
    user,
  });
  const success = user => ({
    type: userConstants.REGISTER_SUCCESS,
    user,
  });
  const failure = error => ({
    type: userConstants.LOGIN_FAILURE,
    error,
  });
  return (dispatch) => {
    dispatch(request({ username }));
    signUpUser(username, password)
      .then((user) => {
        if (Object.keys(user).length < 1) {
          dispatch(failure('something went wrong'));
          dispatch(alertActions.error('something went wrong'));
        } else {
          dispatch(success(user.data));
        }
      }, (error) => {
        dispatch(failure('something went wrong'));
        dispatch(alertActions.error('something went wrong'));
      });
  };
};

export const upload = (image) => {
  const request = user => ({
    type: userConstants.UPLOAD_REQUEST,
    user,
  });
  const success = user => ({
    type: userConstants.UPLOAD_SUCCESS,
    user,
  });
  const failure = error => ({
    type: userConstants.UPLOAD_FAILURE,
    error,
  });
  return (dispatch) => {
    dispatch(request({ image }));
    uploadImage(image)
      .then((user) => {
        if (Object.keys(user).length < 1) {
          dispatch(failure('something went wrong'));
          dispatch(alertActions.error('something went wrong'));
        } else {
          dispatch(success(user.data));
        }
      }, (error) => {
        dispatch(failure('something went wrong'));
        dispatch(alertActions.error('something went wrong'));
      });
  };
};
