import signMeOut from '../helpers/signOut';
import createForm from '../components/showCreateForm';
import { getAccessibleWords, getCategories } from '../../api/wordData';
import { showWords } from '../components/showWords';
import { showCategories } from '../components/showCategories';
import defaultRender from '../components/defaultRender';

const navigationEvents = (uid) => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id === 'google-auth') {
      signMeOut();
    }
    if (e.target.id === 'logo') {
      getCategories(uid).then((categoryArray) => showCategories(categoryArray, uid));
      getAccessibleWords(uid).then((wordArray) => {
        const sortedArray = wordArray.sort((a, b) => a.date - b.date);
        showWords(sortedArray, uid);
      });
    }
    if (e.target.id === 'create-btn') {
      createForm({}, uid);
    }
    if (e.target.id === 'sort-alpha') {
      getCategories(uid).then((categoryArray) => showCategories(categoryArray, uid));
      getAccessibleWords(uid).then((wordArray) => {
        const sortedArray = wordArray.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        showWords(sortedArray, uid);
      });
    }
    if (e.target.id === 'sort-new') {
      getCategories(uid).then((categoryArray) => showCategories(categoryArray, uid));
      getAccessibleWords(uid).then((wordArray) => {
        const sortedArray = wordArray.sort((a, b) => b.date - a.date);
        showWords(sortedArray, uid);
      });
    }
    if (e.target.id === 'sort-old') {
      getCategories(uid).then((categoryArray) => showCategories(categoryArray, uid));
      getAccessibleWords(uid).then((wordArray) => {
        const sortedArray = wordArray.sort((a, b) => a.date - b.date);
        showWords(sortedArray, uid);
      });
    }
    if (e.target.id === 'community-toggle') {
      if (document.querySelector('#community-status').innerText.includes('visible')) {
        document.querySelector('#community-status').innerText = 'Community Cards: hidden';
        document.querySelector('#community-toggle').innerText = 'Show';
        defaultRender(uid);
      } else {
        document.querySelector('#community-status').innerText = 'Community Cards: visible';
        document.querySelector('#community-toggle').innerText = 'Hide';
        defaultRender(uid);
      }
    }
  });
  document.querySelector('#nav-bar').addEventListener('keyup', (e) => {
    const userInput = e.target.value.toLowerCase();
    getAccessibleWords(uid).then((wordArray) => {
      const filteredArray = wordArray.filter((word) => word.title.toLowerCase().includes(userInput) || word.description.toLowerCase().includes(userInput));
      showWords(filteredArray, uid);
    });
  });
};

export default navigationEvents;
