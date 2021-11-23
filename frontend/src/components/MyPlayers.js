import { Component } from "react";
import { Link } from "react-router-dom";

class MyPlayers extends Component {
  render() {
    return (
      <span>
        <Link to={`/players/${this.props.player.id}/list`}>
          {this.props.player.first_name} {this.props.player.last_name}
        </Link>
      </span>
    );
  }
}

export default MyPlayers;
