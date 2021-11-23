import { Component } from "react";
import { Link } from "react-router-dom";

class Teams extends Component {
  render() {
    return (
      <span>
        <Link to={`/teams/${this.props.team.team_id}`}>
          {this.props.team.name_display_full}
        </Link>
      </span>
    );
  }
}

export default Teams;
