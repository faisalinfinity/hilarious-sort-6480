import firebase from "firebase/compat/app";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { Sdk } from "../../constants/firebaseConstants";
import { LOGIN, LOGOUT } from "./authTypes";
import "firebase/compat/auth";

firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: Sdk.apiKey,
  authDomain: Sdk.authDomain,
  projectId: Sdk.projectId,
  storageBucket: Sdk.storageBucket,
  messagingSenderId: Sdk.messagingSenderId,
  appId: Sdk.appId,
  measurementId: Sdk.measurementId,
});

const firebaseAuth = getAuth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export const loginAction = (payload,navigate) => async (dispatch) => {
  let obj = {
    isLoggedIn: true,
    user: payload,
  };

  localStorage.setItem("cache", JSON.stringify(obj));

  dispatch({
    type: LOGIN,
    payload: payload,
  });
  navigate("/")
};

export const logoutAction = () => {
  localStorage.setItem("cache", null);
  return {
    type: LOGOUT,
  };
};

export function signup(name,email, password) {
  return async (dispatch, getState) => {
    try {
      const {user} =await firebase.auth().createUserWithEmailAndPassword(email, password);
      await user.updateProfile({
        displayName: name,
      });
      // Dispatch a success action
      alert("Sign Up Successfull");
    } catch (error) {
      // Dispatch an error action
    }
  };
}

export function manualSignin(navigate,email, password) {
  return async (dispatch, getState) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      const user = firebase.auth().currentUser;
      // Dispatch a success action
      console.log(user.displayName)
      let obj = {
        isLoggedIn: true,
        user: [{ email: email, displayName: user.displayName }],
      };

      localStorage.setItem("cache", JSON.stringify(obj));
      navigate("/")
      dispatch({
        type: LOGIN,
        payload: [{ email: email, displayName: user.displayName}],
      });
       
    } catch (error) {
      // Dispatch an error action
      alert("Incorrect Credentials");
    }
  };
}
