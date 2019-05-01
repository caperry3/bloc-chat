import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
    super(props);

  this.state = {
    rooms: [],
    newRoomName: ''
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

  handleChange(e) {
    e.preventDefault();
    this.setState({ newRoomName: e.target.value });
  }

  createRoom(input) {
    this.roomsRef.push({
      name: input
    });
    this.setState({ newRoomName: '' });

  }

  deleteRoom(room) {
    const rooms = this.state.roomsRef.filter((x, i) => {
      if (rooms === i)
        return false
      else
        return true
    });
    this.setState({ rooms: rooms });
  }

  render() {
    return (
      <section className="roomlist">
      <h2>Bloc Chat</h2>
        <div>
          {
            this.state.rooms.map( (room, index) =>
            <p className="roomname" key={index} onClick={() => this.props.setRoom(room) }> {room.name} </p>
            )
          }
        </div>
          <label>New Room:</label>
          <input type="text" id="new-room" value={this.state.newRoomName} onChange={ (e) => this.handleChange(e) }/>
          <button type="submit" id="new-form-submit" onClick={() => this.createRoom(this.state.newRoomName)}>Submit</button>
      </section>
    );
  }
}

export default RoomList;
