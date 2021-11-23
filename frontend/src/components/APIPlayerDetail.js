import { Component } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

class APIPlayerDetail extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>
            <h1>{this.props.player.name_display_first_last}</h1>
          </CardTitle>
          <CardText>{this.props.player.college}</CardText>
          <CardText>
            Height: {this.props.player.height_feet}'{" "}
            {this.props.player.height_inches}"
          </CardText>
          <CardText>Weight: {this.props.player.weight}</CardText>
          <CardText>Age: {this.props.player.age}</CardText>
          <CardText>Throws: {this.props.player.throws}</CardText>
          <CardText>Bats: {this.props.player.bats}</CardText>
          <CardText>
            Position: {this.props.player.primary_position_txt}
          </CardText>
          <CardText>Jersey Number: {this.props.player.jersey_number}</CardText>
          <CardText>Team: {this.props.player.team_name}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default APIPlayerDetail;
