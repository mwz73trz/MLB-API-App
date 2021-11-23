import { Component } from "react";
import mlbAPI from "../api/mlbAPI";
import APIPlayers from "../components/APIPlayers";

class APIPlayersPage extends Component {
  state = {
    players: [],
  };

  getAPIPlayers = async () => {
    let playerId = this.props.match.params.playerId;
    let playersList = await mlbAPI.getAPIList(playerId);
    this.setState({ players: playersList });
  };

  componentDidMount() {
    this.getAPIPlayers();
  }
  renderPlayers() {
    let playerElements = this.state.players.map((player, index) => {
      return (
        <tbody key={`player-${index}`}>
          <APIPlayers player={player} />
        </tbody>
      );
    });
    return (
      <div>
        <h1>MLB API Players</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Team</th>
            </tr>
          </thead>
          {playerElements}
        </table>
      </div>
    );
  }

  render() {
    return <div>{this.renderPlayers()}</div>;
  }
}

export default APIPlayersPage;
