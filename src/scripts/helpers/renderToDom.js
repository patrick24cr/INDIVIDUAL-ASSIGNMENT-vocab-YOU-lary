const renderToDom = (content, divId) => {
  document.querySelector(divId).innerHTML = content;
};

export default renderToDom;
