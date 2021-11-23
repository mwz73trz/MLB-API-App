import { Component } from "react";
import { Link } from "react-router-dom";

class APIPlayers extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.player.name_display_first_last}</td>
        <td>{this.props.player.position}</td>
        <td>{this.props.player.team_full}</td>
        <td>
          <Link to={`/list/${this.props.player.player_id}`}>Select Player</Link>
        </td>
      </tr>
    );
  }
}

export default APIPlayers;
