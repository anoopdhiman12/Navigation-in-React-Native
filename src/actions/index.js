import firebase from 'firebase';
import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types';
import { userInfo } from 'os';

export const emailChanged = (text) => {
    return {
      type: EMAIL_CHANGED,
      payload: text
    };
  };

  export const passwordChanged =(text) => {
    return{
      type: PASSWORD_CHANGED,
      payload: text
    };
  };

  export const loginUser = ({email, password}) => {
    return(dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(use =>loginUserSuccess(dispatch, user))
        .catch(()=>loginUserFail(dispatch));
      }); 
    };
  };

  const loginUserFail = (dispatch) => {
    dispatch({
      type: LOGIN_USER_FAIL
    });
  }
  const loginUserSuccess = (dispatch, userInfo) => {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    })
  };

