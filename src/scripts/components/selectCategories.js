import { getCategories } from '../../api/wordData';
import renderToDOM from '../helpers/renderToDom';

const selectCategories = (existingCategory) => {
  let domString = `
    <select class="form-control" id="category" required>
    <option value="">Select a category</option>`;

  getCategories().then((categoryArray) => {
    categoryArray.forEach((availableCategory) => {
      domString += `
          <option 
            value="${availableCategory}" 
            ${existingCategory === availableCategory ? 'selected' : ''}>
              ${availableCategory}
          </option>`;
    });

    domString += `
    <option value="new">New category</option>
    </select>`;

    renderToDOM(domString, '#select-category');
  });
};

export default selectCategories;
