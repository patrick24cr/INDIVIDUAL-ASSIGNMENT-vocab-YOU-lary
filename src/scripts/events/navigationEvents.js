import signMeOut from '../helpers/signOut';
import createForm from '../components/showCreateForm';
import { getWords, getCategories } from '../../api/wordData';
import { showWords } from '../components/showWords';
import { showCategories } from '../components/showCategories';

const navigationEvents = () => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
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
    if (e.target.id === 'sort-alpha') {
      getCategories().then((categoryArray) => showCategories(categoryArray));
      getWords().then((wordArray) => {
        const sortedArray = wordArray.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        showWords(sortedArray);
      });
    }
    if (e.target.id === 'sort-new') {
      getCategories().then((categoryArray) => showCategories(categoryArray));
      getWords().then((wordArray) => {
        const sortedArray = wordArray.sort((a, b) => b.date - a.date);
        showWords(sortedArray);
      });
    }
    if (e.target.id === 'sort-old') {
      getCategories().then((categoryArray) => showCategories(categoryArray));
      getWords().then((wordArray) => {
        const sortedArray = wordArray.sort((a, b) => a.date - b.date);
        showWords(sortedArray);
      });
    }
  });
  document.querySelector('#nav-bar').addEventListener('keyup', (e) => {
    const userInput = e.target.value.toLowerCase();
    console.warn(userInput);
    getWords().then((wordArray) => {
      const filteredArray = wordArray.filter((word) => word.title.toLowerCase().includes(userInput) || word.description.toLowerCase().includes(userInput));
      showWords(filteredArray);
    });
  });
};

export default navigationEvents;
