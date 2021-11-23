import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import APIPlayersPage from "./pages/APIPlayersPage";
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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
