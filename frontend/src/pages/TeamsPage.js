import { Component } from "react";
import mlbAPI from "../api/mlbAPI";
import Teams from "../components/Teams";

class TeamsPage extends Component {
  state = {
    teams: [],
  };

  getTeams = async () => {
    try {
      let teamsData = await mlbAPI.getTeams();
      this.setState({ teams: teamsData });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getTeams();
  }

  renderTeams() {
    let teamElements = this.state.teams.map((team, index) => {
      return (
        <li key={`team-${index}`}>
          <Teams team={team} />
        </li>
      );
    });
    return <ul style={{ listStyle: "none" }}>{teamElements}</ul>;
  }

  render() {
    return (
      <div>
        <h1>Current MLB Teams</h1>
        <p>Select a Team to View the 40 Man Roster</p>
        {this.renderTeams()}
      </div>
    );
  }
}

export default TeamsPage;
