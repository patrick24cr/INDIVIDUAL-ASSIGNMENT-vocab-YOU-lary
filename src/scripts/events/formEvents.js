import createForm from '../components/showCreateForm';
import { getWord, getWords } from '../../api/wordData';
import { showWords } from '../components/showWords';
// import sampleData from '../../../sample_data/words.json';
// const sampleObject = Object.values(sampleData)[0];

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id.includes('submit-word')) {
      const wordObject = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#category').value,
        description: document.querySelector('#description').value,
      };
      createAuthor(wordObject, uid).then((authorsArray) => showAuthors(authorsArray));
    }
    // FIXME:ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const wordObject = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#category').value,
        description: document.querySelector('#description').value,
      };
      updateAuthor(firebaseKey, wordObject, uid).then((authorsArray) => showAuthors(authorsArray));
    }
  });
};

export default domEvents;
