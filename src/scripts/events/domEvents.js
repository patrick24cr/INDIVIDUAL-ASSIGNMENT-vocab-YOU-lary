import createForm from '../components/showCreateForm';
import {
  deleteWord,
  getWord,
  getWords,
  getCategories
} from '../../api/wordData';
import { showWords } from '../components/showWords';
import { showCategories } from '../components/showCategories';

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    if (e.target.id.includes('edit')) {
      const [, firebaseKey] = e.target.id.split('--');
      getWord(firebaseKey).then((word) => createForm(word));
    }
    if (e.target.id.includes('filter-by')) {
      const [, category] = e.target.id.split('--');
      if (category === 'all') {
        getWords().then((wordArray) => showWords(wordArray));
      } else {
        getWords().then((wordArray) => showWords(wordArray.filter((word) => word.category === category)));
      }
    }
    if (e.target.id.includes('delete')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteWord(firebaseKey).then((wordArray) => {
        showWords(wordArray);
        getCategories().then((categoryArray) => showCategories(categoryArray));
      });
    }
  });
};

export default domEvents;
