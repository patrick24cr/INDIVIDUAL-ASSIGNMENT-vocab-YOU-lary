import { createWord, updateWord, getCategories } from '../../api/wordData';
import { showWords } from '../components/showWords';
import { showCategories } from '../components/showCategories';
import renderToDom from '../helpers/renderToDom';
// import sampleData from '../../../sample_data/words.json';
// const sampleObject = Object.values(sampleData)[0];

const domEvents = () => {
  document.querySelector('#main').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-word')) {
      const wordObject = {
        title: document.querySelector('#title').value,
        category: (document.querySelector('#category2') ? document.querySelector('#category2').value : document.querySelector('#category').value),
        description: document.querySelector('#description').value,
        date: Math.round(Date.now() / 1000),
      };
      createWord(wordObject).then((wordArray) => {
        showWords(wordArray);
        getCategories().then((categoryArray) => showCategories(categoryArray));
      });
    }
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const wordObject = {
        title: document.querySelector('#title').value,
        category: (document.querySelector('#category2') ? document.querySelector('#category2').value : document.querySelector('#category').value),
        description: document.querySelector('#description').value,
      };
      updateWord(firebaseKey, wordObject).then((wordsArray) => {
        showWords(wordsArray);
        getCategories().then((categoryArray) => showCategories(categoryArray));
      });
    }
  });
  document.querySelector('#main').addEventListener('change', (e) => {
    console.warn(e.target.id);
    if (e.target.id === 'category') {
      if (document.querySelector('#category').value === 'new') {
        const newCategoryInputString = '<input type="text" class="form-control" id="category2" aria-describedby="bookTitle" placeholder="Enter new category here" required>';
        renderToDom(newCategoryInputString, '#new-category-input-div');
      } else {
        renderToDom('', '#new-category-input-div');
      }
    }
  });
};

export default domEvents;
