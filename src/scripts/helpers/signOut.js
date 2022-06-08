import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from './clearDom';

const signOut = () => {
  firebase.auth().signOut();
  clearDom();
};

export default signOut;
