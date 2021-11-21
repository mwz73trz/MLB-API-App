import { Component } from "react";
import mlbAPI from "../api/mlbAPI";
import MyPlayers from "../components/MyPlayers";

class HomePage extends Component {
  state = {
    players: [],
  };

  getMyPlayers = async () => {
    try {
      let playersData = await mlbAPI.getMyPlayers();
      if (playersData) {
        this.setState({ players: playersData });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getMyPlayers();
  }

  renderWelcome() {
    let playerElements = this.state.players.map((player, index) => {
      return (
        <li key={`player-${index}`}>
          <MyPlayers player={player} />
        </li>
      );
    });
    return (
      <ul style={{ listStyle: "none" }}>
        <h1>Welcome to your MLB App</h1>
        <h2>Players</h2>
        {playerElements}
      </ul>
    );
  }

  render() {
    return <div>{this.renderWelcome()}</div>;
  }
}

export default HomePage;
