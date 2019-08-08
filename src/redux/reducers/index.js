import { combineReducers } from 'redux';
import { login } from './login.reducer';
import { signup } from './signup.reducer';
import { alert } from './alert.reducer';
import { upload } from './upload.reducer';

export const rootReducer = combineReducers({
  login,
  signup,
  alert,
  upload,
});
