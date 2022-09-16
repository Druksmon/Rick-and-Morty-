import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1t7x-GwGecNPIgZcKliR5VL7jCziA5bQ",
    authDomain: "rickandmorty-bb13d.firebaseapp.com",
    projectId: "rickandmorty-bb13d",
    storageBucket: "rickandmorty-bb13d.appspot.com",
    messagingSenderId: "19070832613",
    appId: "1:19070832613:web:45b0bf88297897313aa90c"
};

// Initialize Firebase
 initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
