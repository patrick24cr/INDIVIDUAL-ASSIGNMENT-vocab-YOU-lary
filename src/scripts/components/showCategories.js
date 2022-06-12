import renderToDOM from '../helpers/renderToDom';

const showCategories = (array, uid) => {
  renderToDOM('', '#filters');
  let filterString = '<button class="btn btn-outline-primary" id="filter-by--all">All</button>';
  let arrayCopy = array;
  if (document.querySelector('#community-status').innerText.includes('hidden')) {
    arrayCopy = array.filter((x) => x.uid === uid);
  }
  const uniqueCategories = [...new Set(arrayCopy.map((x) => x.category))].sort();
  uniqueCategories.forEach((item) => {
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
