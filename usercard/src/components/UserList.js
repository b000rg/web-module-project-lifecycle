import React from "react";
import Container from "react-bootstrap/Container";
import UserCard from "./UserCard";

class UserList extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <Container>
        {this.props.userList.map((user) => (
          <UserCard user={user} />
        ))}
      </Container>
    );
  }
}

export default UserList;
