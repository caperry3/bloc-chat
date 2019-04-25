import React, { Component } from 'react';


class MessageList extends Component {
  constructor(props) {
    super(props);

  this.state = {
    messages: [],
  };

  this.messagesRef = this.props.firebase.database().ref('messages');


}

  componentDidMount() {
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
        <p>
        {  
          this.state.messages.filter( message => message.roomId === this.state.currentActiveRoom.key).map( (messages, index) =>
          <p className="message" key={index}> {messages.content} </p>
          )

        }
        </p>
      </div>
    )
  }


}

export default MessageList;
