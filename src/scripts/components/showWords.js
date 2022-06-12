import renderToDOM from '../helpers/renderToDom';

const showWords = (array, uid) => {
  renderToDOM('', '#words');

  let domString = '';
  array.forEach((item) => {
    if (document.querySelector('#community-status').innerText.includes('visible') || item.uid === uid) {
      domString += `
    <div class="card" id="${item.firebaseKey}" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Category: ${item.category}</h6>
      <h6 class="card-subtitle mb-2 text-muted">${(item.uid === uid) ? `Your Word, ${item.public ? 'Public' : 'Private'}` : 'Community Word'}</h6>
      <hr>
      <div class="card-description">
      <p class="card-text" style="text-align: left;">${item.description}</p>
      </div>
      <hr>
      <div class="card-buttons">
      ${item.uid === uid ? `<a href="#" id="edit--${item.firebaseKey}" class="card-link">Edit</a>
      <a href="#" id="delete--${item.firebaseKey}" class="card-link">Delete</a>` : `<a href="#" id="copy--${item.firebaseKey}" class="card-link">Copy</a>`}
      </div>
    </div>
  </div>`;
    }
  });
  renderToDOM(domString, '#words');
};

const emptyWords = () => {
  document.querySelector('#words').innerHTML = '<h1>No Entries</h1>';
};

export { showWords, emptyWords };
