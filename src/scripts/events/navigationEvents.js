import signMeOut from '../helpers/signOut';
import createForm from '../components/showCreateForm';
import { getWords, getCategories } from '../../api/wordData';
import { showWords } from '../components/showWords';
import { showCategories } from '../components/showCategories';

const navigationEvents = () => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id === 'google-auth') {
      signMeOut();
    }
    if (e.target.id === 'logo') {
      getCategories().then((categoryArray) => showCategories(categoryArray));
      getWords().then((wordArray) => showWords(wordArray));
    }
    if (e.target.id === 'create-btn') {
      createForm();
    }
  });
};

export default navigationEvents;
