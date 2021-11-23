import { Component } from "react";

class TeamRoster extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.player.name_display_first_last}</td>
        <td>{this.props.player.position_txt}</td>
        <td>{this.props.player.jersey_number}</td>
        <td>{this.props.player.bats}</td>
        <td>{this.props.player.throws}</td>
      </tr>
    );
  }
}

export default TeamRoster;
