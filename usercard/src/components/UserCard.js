import React from "react";
import Card from "react-bootstrap/Card";

class UserCard extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <Card>
        <Card.Header>
          <Card.Title>{this.props.user.login}</Card.Title>
        </Card.Header>
        <Card.Body>
          <img src={this.props.user.avatar_url} />
        </Card.Body>
      </Card>
    );
  }
}

export default UserCard;
