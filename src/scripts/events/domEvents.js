import createForm from '../components/showCreateForm';
import { getWord, getWords } from '../../api/wordData';
import { showWords } from '../components/showWords';
// import sampleData from '../../../sample_data/words.json';
// const sampleObject = Object.values(sampleData)[0];

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id.includes('edit')) {
      const [, firebaseKey] = e.target.id.split('--');
      getWord(firebaseKey).then((word) => createForm(word));
    }
    if (e.target.id.includes('filter')) {
      const [, category] = e.target.id.split('--');
      if (category === 'all') {
        getWords().then((wordArray) => showWords(wordArray));
      } else {
        getWords().then((wordArray) => showWords(wordArray.filter((word) => word.category === category)));
      }
    }
    if (e.target.id === 'delete') {
      // delete word
    }
  });
};

export default domEvents;
