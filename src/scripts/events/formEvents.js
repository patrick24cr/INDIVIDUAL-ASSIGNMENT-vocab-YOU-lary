import { createWord, updateWord, getCategories } from '../../api/wordData';
import { showWords } from '../components/showWords';
import { showCategories } from '../components/showCategories';
import renderToDom from '../helpers/renderToDom';
// import sampleData from '../../../sample_data/words.json';
// const sampleObject = Object.values(sampleData)[0];

const domEvents = (uid) => {
  document.querySelector('#main').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-word')) {
      const wordObject = {
        title: document.querySelector('#title').value,
        category: (document.querySelector('#category2') ? document.querySelector('#category2').value : document.querySelector('#category').value),
        description: document.querySelector('#description').value,
        date: Math.round(Date.now() / 1000),
        public: document.querySelector('#public-check').checked,
        uid,
      };
      createWord(wordObject).then((wordArray) => {
        showWords(wordArray, uid);
        getCategories(uid).then((categoryArray) => showCategories(categoryArray, uid));
      });
    }
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const wordObject = {
        title: document.querySelector('#title').value,
        category: (document.querySelector('#category2') ? document.querySelector('#category2').value : document.querySelector('#category').value),
        description: document.querySelector('#description').value,
        public: document.querySelector('#public-check').checked,
        uid
      };
      updateWord(firebaseKey, wordObject).then((wordsArray) => {
        showWords(wordsArray, uid);
        getCategories(uid).then((categoryArray) => showCategories(categoryArray, uid));
      });
    }
    if (e.target.id.includes('copy-word')) {
      const wordObject = {
        title: document.querySelector('#title').value,
        category: (document.querySelector('#category2') ? document.querySelector('#category2').value : document.querySelector('#category').value),
        description: document.querySelector('#description').value,
        public: document.querySelector('#public-check').checked,
        uid
      };
      createWord(wordObject).then((wordsArray) => {
        showWords(wordsArray, uid);
        getCategories(uid).then((categoryArray) => showCategories(categoryArray, uid));
      });
    }
  });
  document.querySelector('#main').addEventListener('change', (e) => {
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
