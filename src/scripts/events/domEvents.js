import createForm from '../components/showCreateForm';
import {
  deleteWord,
  getWord,
  getWords,
  getCategories,
} from '../../api/wordData';
import { showWords } from '../components/showWords';
import { showCategories } from '../components/showCategories';

const domEvents = (uid) => {
  document.querySelector('#main').addEventListener('click', (e) => {
    if (e.target.id.includes('edit')) {
      const [, firebaseKey] = e.target.id.split('--');
      getWord(firebaseKey).then((word) => createForm(word, uid));
    }
    if (e.target.id.includes('filter-by')) {
      const [, category] = e.target.id.split('--');
      if (category === 'all') {
        getWords().then((wordArray) => showWords(wordArray, uid));
      } else {
        getWords().then((wordArray) => showWords(wordArray.filter((word) => word.category === category), uid));
      }
    }
    if (e.target.id.includes('delete')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteWord(firebaseKey).then((wordArray) => {
        getCategories(uid).then((categoryArray) => showCategories(categoryArray, uid));
        showWords(wordArray, uid);
      });
    }
    if (e.target.id.includes('copy')) {
      const [, firebaseKey] = e.target.id.split('--');
      getWord(firebaseKey).then((word) => createForm(word, uid, 'copy'));
    }
  });
};

export default domEvents;
