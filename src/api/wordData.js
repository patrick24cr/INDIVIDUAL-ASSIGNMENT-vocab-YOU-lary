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

export {
  getWords,
  getWord,
  getCategories
};
