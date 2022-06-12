import { getCategories } from '../../api/wordData';
import renderToDOM from '../helpers/renderToDom';

const selectCategories = (existingCategory, uid) => {
  let domString = `
    <select class="form-control" id="category" required>
    <option value="">Select a category</option>`;

  getCategories(uid).then((array) => {
    let arrayCopy = array;
    if (document.querySelector('#community-status').innerText.includes('hidden')) {
      arrayCopy = array.filter((x) => x.uid === uid);
    }
    const uniqueCategories = [...new Set(arrayCopy.map((x) => x.category))];
    uniqueCategories.forEach((availableCategory) => {
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
