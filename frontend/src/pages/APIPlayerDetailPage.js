import { Component } from "react";
import mlbAPI from "../api/mlbAPI";
import APIPlayerDetail from "../components/APIPlayerDetail";

class APIPlayerDetailPage extends Component {
  state = {
    player: null,
  };

  getAPIPlayerDetail = async () => {
    try {
      let playerId = this.props.match.params.playerId;
      let playerData = await mlbAPI.getAPIPlayerDetail(playerId);
      this.setState({ player: playerData });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getAPIPlayerDetail();
  }

  renderPlayerDetail() {
    if (!this.state.player) {
      return <p>No Player Found!</p>;
    }
    return (
      <div>
        <APIPlayerDetail player={this.state.player} />
      </div>
    );
  }

  render() {
    return <div>{this.renderPlayerDetail()}</div>;
  }
}

export default APIPlayerDetailPage;
