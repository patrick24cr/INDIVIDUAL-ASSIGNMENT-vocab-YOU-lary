import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getWords = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getWord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getCategories = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words.json`)
    .then((response) => {
      resolve([...new Set(Object.values(response.data).map((x) => x.category))]);
    })
    .catch((error) => reject(error));
});

const createWord = (wordObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/words.json`, wordObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/words/${response.data.name}.json`, payload)
        .then(() => {
          getWords().then(resolve);
        });
    }).catch(reject);
});

const updateWord = (firebaseKey, wordObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/words/${firebaseKey}.json`, wordObj)
    .then(() => {
      getWords().then(resolve);
    }).catch(reject);
});

const deleteWord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/words/${firebaseKey}.json`)
    .then(() => {
      getWords().then((wordsArray) => resolve(wordsArray));
    })
    .catch((error) => reject(error));
});

export {
  getWords,
  getWord,
  getCategories,
  createWord,
  updateWord,
  deleteWord
};
