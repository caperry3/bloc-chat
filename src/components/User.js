import React, { Component } from 'react';



class User extends Component {
  constructor(props) {
    super(props);

    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
    this.props.firebase.auth().onAuthStateChanged( user => {
    this.props.setUser(user);
    });
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <section id="user-info">
        <div id="buttons">
          <button id="sign-in" onClick={this.props.firebase.auth().signInWithPopup()}>Sign In</button>
          <button id="sign-out" onClick={this.props.firebase.auth().signOut()}>Sign Out</button>
        </div>
          <p id="display-username">{this.props.user.displayName}</p>
      </section>
    );
  }

}

export default User;
