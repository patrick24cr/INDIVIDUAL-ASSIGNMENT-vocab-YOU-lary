import { getAccessibleWords, getCategories } from '../../api/wordData';
import { showWords } from './showWords';
import { showCategories } from './showCategories';

const defaultRender = (uid) => {
  getCategories(uid).then((categoryArray) => showCategories(categoryArray, uid));
  getAccessibleWords(uid).then((wordArray) => {
    const sortedArray = wordArray.sort((a, b) => a.date - b.date);
    showWords(sortedArray, uid);
  });
};

export default defaultRender;
