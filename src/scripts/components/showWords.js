import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const showWords = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" id="firebaseKey" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <hr>
      <h6 class="card-subtitle mb-2 text-muted">Category: ${item.category}</h6>
      <hr>
      <p class="card-text" style="text-align: left;">${item.description}</p>
      <div class="card-buttons" style="text-align: left;">
      <a href="#" class="card-link">Edit</a>
      <a href="#" class="card-link">Delete</a>
      </div>
    </div>
  </div>`;
  });

  renderToDOM(domString, '#words');
};

const emptyWords = () => {
  document.querySelector('#words').innerHTML = '<h1>No Entries</h1>';
};

export { showWords, emptyWords };
