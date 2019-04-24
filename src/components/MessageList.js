import React, { Component } from 'react';


class MessageList extends Component {
  constructor(props) {
    super(props);

  this.state = {
    rooms: [],
  };

  this.roomsRef = this.props.firebase.database().ref('rooms');

}

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
    });
  }

  render() {
    return (
      <div className="message-list">
        <h2>{ this.props.currentActiveRoom.name }</h2>
          <div>
          {
            this.props.currentActiveRoom.map( (room) =>
            <p className="messages" > { room.content }</p>
            )
          }
          </div>
      </div>
    )
  }


}

export default MessageList;
