import React, { Component } from 'react';


class MessageList extends Component {
  constructor(props) {
    super(props);

  this.state = {
    messages: [],
    newMessage: '',
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

  handleNewMessage(e) {
    this.setState({ newMessage: e.target.value })
  }

  createNewMessage(input) {
    this.messagesRef.push({
      content: input
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.currentActiveRoom.name}</h1>
          {
            this.state.messages.filter( message => message.roomId === this.props.currentActiveRoom.key).map( (messages, index) =>
            <p className="message" key={index}>{this.props.user}:{messages.content}</p>
          )
          }
        <div id="message-input">
          <input type="text" value={this.state.newMessage} onChange={ (e) => this.handleNewMessage(e) }/>
          <button id="send-message" onClick={() => this.createNewMessage(this.state.newMessage)}>Send Message</button>
        </div>
      </div>
    )
  }


}

export default MessageList;
