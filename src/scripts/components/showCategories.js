import renderToDOM from '../helpers/renderToDom';

const showCategories = (array) => {
  renderToDOM('', '#filters');
  let filterString = '<button class="btn btn-outline-primary" id="filter--all">All</button>';
  array.forEach((item) => {
    filterString += `
    <button class="btn btn-outline-primary" id="filter-by--${item}">${item}</button>
    `;
  });
  renderToDOM(filterString, '#filters');
};

const emptyCategories = () => {
  document.querySelector('#filters').innerHTML = '<h1>No Categories</h1>';
};

export { showCategories, emptyCategories };
