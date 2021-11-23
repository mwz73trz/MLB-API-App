import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import APIPlayersPage from "./pages/APIPlayersPage";
import APIPlayerDetailPage from "./pages/APIPlayerDetailPage";
import TeamsPage from "./pages/TeamsPage";
import TeamRosterPage from "./pages/TeamRosterPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact component={HomePage} />
            <Route
              path="/players/:playerId/list"
              exact
              component={APIPlayersPage}
            />
            <Route
              path="/list/:playerId"
              exact
              component={APIPlayerDetailPage}
            />
            <Route path="/teams" exact component={TeamsPage} />
            <Route path="/teams/:teamId" exact component={TeamRosterPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
