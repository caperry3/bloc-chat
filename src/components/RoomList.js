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
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
    });
  }

  createRoom() {

  }

  render() {
    return (
      <section className="roomlist">
      <h2>Bloc Chat</h2>
        <div>
          {
            this.state.rooms.map( (room, index) =>
            <p className="roomname" key={index}> {room.name} </p>
            )
          }
        </div>
        <form>
          <label>New Room:</label>
          <input type="text" id="new-room"/>
          <button id="new-form-submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default RoomList;
