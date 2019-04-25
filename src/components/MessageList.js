import React, { Component } from 'react';


class MessageList extends Component {
  constructor(props) {
    super(props);

  this.state = {
    rooms: [],
    messages: [],
  };

  this.roomsRef = this.props.firebase.database().ref('rooms');
  this.messagesRef = this.props.firebase.database().ref('messages');


}

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
    });
  }

  componentDidMountMessages() {
    this.messagesRef.on('child_added', snapshot => {
      const messages = snapshot.val();
      messages.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( messages ) });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.currentActiveRoom.name}</h1>
        <p>{this.props.currentActiveRoom.messages}</p>
      </div>
    )
  }


}

export default MessageList;
