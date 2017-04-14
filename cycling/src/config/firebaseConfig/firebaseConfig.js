import firebase from 'firebase';


const firebaseConfig = {
    apiKey: 'AIzaSyD44wTP7R7E7q6Q1xQve8EbsuNz26fbWLM',
    authDomain: 'sj-react-2c532.firebaseapp.com',
    databaseURL: 'https://sj-react-2c532.firebaseio.com',
    storageBucket: 'sj-react-2c532.appspot.com'
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();