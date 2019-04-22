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
        <h2>Room 1</h2>
          <p>hello</p>
      </div>
    )
  }


}

export default MessageList;