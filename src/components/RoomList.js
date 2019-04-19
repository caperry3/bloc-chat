import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
    super(props);

  this.state = {
    rooms: []
  };

  this.roomsRef = this.props.firebase.database().ref('rooms');
}

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      this.setState({ rooms: this.state.rooms.concat( snapshot.val() ) });
    });
  }

  render() {
    return (
      <section className="roomlist">
        <h2>Bloc Chat</h2>
        <div className="room1">
          <p>Room 1</p>
        </div>
        <div className="room2">
          <p>Room 2</p>
        </div>
        <div className="room3">
          <p>Room 3</p>
        </div>
      </section>
    );
  }
}

export default RoomList;
