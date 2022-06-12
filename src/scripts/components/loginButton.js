import signIn from '../helpers/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<div id="login-form-container" class="login-form-container"><button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button></div>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
