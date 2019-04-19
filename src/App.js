import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAzSROD0S-EpL96s9NLP_J7VxcFz3xeItM",
    authDomain: "bloc-chatspace.firebaseapp.com",
    databaseURL: "https://bloc-chatspace.firebaseio.com",
    projectId: "bloc-chatspace",
    storageBucket: "bloc-chatspace.appspot.com",
    messagingSenderId: "263589212288"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <section className="App">
        <sidebar>
          <RoomList/>
        </sidebar>
      </section>
    );
  }
}

export default App;
