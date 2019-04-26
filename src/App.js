import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';


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
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: ""
      },
      currentActiveRoom: {
        username: "",
        content: "",
        sentAt: "",
        roomId: ""
      }
    };
  }
  setRoom(room) {
      this.setState({ currentActiveRoom: room });
    };

  setUser(user) {
    this.setState({ user: user });
  };


  render() {
    return (
      <section className="App">
        <div className="sidebar">
          <RoomList
          setRoom={this.setRoom.bind(this)}
          firebase={firebase}
          currentActiveRoom={this.state.currentActiveRoom}
          />
        </div>
        <div className="messages">
          <MessageList
          setRoom={this.setRoom.bind(this)}
          firebase={firebase}
          currentActiveRoom={this.state.currentActiveRoom}
          />
        </div>
        <div className="sign-in">
          <User
          firebase={firebase}
          setUser={this.setUser.bind(this)}
          />
        </div>
      </section>
    );
  }
}

export default App;
