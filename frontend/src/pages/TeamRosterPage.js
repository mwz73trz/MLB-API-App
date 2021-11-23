import { Component } from "react";
import mlbAPI from "../api/mlbAPI";
import TeamRoster from "../components/TeamRoster";

class TeamRosterPage extends Component {
  state = {
    players: [],
  };

  getTeamRoster = async () => {
    try {
      let teamId = this.props.match.params.teamId;
      let teamRoster = await mlbAPI.getTeamRoster(teamId);
      this.setState({ players: teamRoster });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getTeamRoster();
  }

  renderRoster() {
    let rosterElements = this.state.players.map((player, index) => {
      return (
        <tbody key={`player-${index}`}>
          <TeamRoster player={player} />
        </tbody>
      );
    });
    return (
      <div>
        <h1>40 Man Roster</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Jersey Number</th>
              <th>Bats</th>
              <th>Throws</th>
            </tr>
          </thead>
          {rosterElements}
        </table>
      </div>
    );
  }

  render() {
    return <div>{this.renderRoster()}</div>;
  }
}

export default TeamRosterPage;
