import renderToDOM from '../helpers/renderToDom';
import selectCategories from './selectCategories';

const createForm = (obj = {}) => {
  renderToDOM('', '#filters');
  renderToDOM('', '#words');
  const domString = `

  <div class="card" style="width: 18rem;">
  <div class="card-body">
  <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
  <div class="form-group">
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter title here" value="${obj.title || ''}" required>
      </div>
    <hr>
    <div class="form-group" id="select-category">Test text
    </div>
    <hr>
    <div class="form-group">
      <textarea class="form-control" placeholder="Enter description here" id="description" style="height: 300px">${obj.description || ''}</textarea>
      </div>
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
