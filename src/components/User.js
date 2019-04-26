import React, { Component } from 'react';

//Everything was working fine untill user signed out

class User extends Component {
  constructor(props) {
    super(props);

    this.provider = new this.props.firebase.auth.GoogleAuthProvider();
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  signIn() {
    this.props.firebase.auth().signInWithPopup( this.provider );
  }

  signOut() {
    this.props.firebase.auth().signOut();
  }

  render() {
    return(
      <section id="user-info">
        <div id="buttons">
          <button id="sign-in" onClick={ () => this.signIn()}>Sign In</button>
          <button id="sign-out" onClick={ () => this.signOut()}>Sign Out</button>
        </div>
          <p id="display-username">{this.props.user.displayName}</p>
      </section>
    );
  }

}

export default User;
