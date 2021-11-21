import { Component } from "react";

class MyPlayers extends Component {
  render() {
    return (
      <span>
        {this.props.player.first_name} {this.props.player.last_name}
      </span>
    );
  }
}

export default MyPlayers;
