const clearDom = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#nav-bar').innerHTML = '';
  document.querySelector('#filters').innerHTML = '';
  document.querySelector('#words').innerHTML = '';
};

export default clearDom;
