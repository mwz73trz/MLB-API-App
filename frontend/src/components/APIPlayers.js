import { Component } from "react";

class APIPlayers extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.player.name_display_first_last}</td>
        <td>{this.props.player.position}</td>
        <td>{this.props.player.team_full}</td>
      </tr>
    );
  }
}

export default APIPlayers;
