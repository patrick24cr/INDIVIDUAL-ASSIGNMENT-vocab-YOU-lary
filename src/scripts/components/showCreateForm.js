import renderToDOM from '../helpers/renderToDom';
import selectCategories from './selectCategories';

const createForm = (obj = {}) => {
  renderToDOM('', '#filters');
  renderToDOM('', '#words');
  const domString = `

  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5>${obj.title ? 'Edit' : 'Create'}</h5>
      <form class="mb-4" id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}">
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter title here" value="${obj.title || ''}" required>
        <hr>
        <div id="select-category">Loading...
        </div>
        <div id="new-category-input-div" class="new-category-input-div"></div>
        <hr>
        <textarea class="form-control" placeholder="Enter description here" id="description" style="height: 200px" required>${obj.description || ''}</textarea>
        <hr>
        <button type="submit" class="btn btn-outline-primary">Submit
        </button>
      </form>
    </div>
  </div>`;

  renderToDOM(domString, '#words');
  selectCategories(`${obj.category || ''}`);
};

export default createForm;
