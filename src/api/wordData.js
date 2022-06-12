import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// axios.get(`${dbUrl}/words.json?orderBy="uid"&equalTo=${uid}`)
// axios.get(`${dbUrl}/words.json?orderBy="public"&equalTo=true`)

// const getWords = () => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/words.json`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch((error) => reject(error));
// });

const getWordsbyUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getPublicWords = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words.json?orderBy="public"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getAccessibleWords = (uid) => new Promise((resolve, reject) => {
  getWordsbyUid(uid)
    .then((uidWords) => {
      getPublicWords()
        .then((publicWords) => {
          const combinedArrays = Object.values(uidWords).concat(Object.values(publicWords));
          const accessibleWords = combinedArrays.filter((value, index, self) => index === self.findIndex((t) => (
            t.category === value.category && t.description === value.description && t.firebaseKey === value.firebaseKey && t.public === value.public && t.title === value.title && t.uid === value.uid
          )));
          resolve(accessibleWords);
        });
    }).catch((error) => reject(error));
});

const getWord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getCategories = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words.json`)
    .then((response) => {
      resolve(Object.values(response.data).filter((x) => x.public === true || x.uid === uid));
    })
    .catch((error) => reject(error));
});

const createWord = (wordObj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/words.json`, wordObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/words/${response.data.name}.json`, payload)
        .then(() => {
          getAccessibleWords(uid).then(resolve);
        });
    }).catch(reject);
});

const updateWord = (firebaseKey, wordObj, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/words/${firebaseKey}.json`, wordObj)
    .then(() => {
      getAccessibleWords(uid).then(resolve);
    }).catch(reject);
});

const deleteWord = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/words/${firebaseKey}.json`)
    .then(() => {
      getAccessibleWords(uid).then((wordsArray) => resolve(wordsArray));
    })
    .catch((error) => reject(error));
});

export {
  getAccessibleWords,
  getWord,
  getCategories,
  createWord,
  updateWord,
  deleteWord
};
