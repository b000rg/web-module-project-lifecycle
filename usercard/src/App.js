import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import UserList from "./components/UserList";

class App extends React.Component {
  constructor() {
    super();
    this.state = { userList: [] };
  }

  componentDidMount() {
    this.retrieveUser("b000rg");
  }

  render() {
    return (
      <Container>
        <UserList userList={this.state.userList} />
      </Container>
    );
  }

  retrieveUser = (user) => {
    axios
      .get(`https://api.github.com/users/${user}`, { username: user })
      .then((res) => {
        this.setState({
          ...this.state,
          userList: [...this.state.userList, this.scrubUserData(res.data)],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  scrubUserData = (data) => {
    let { login, avatar_url } = data;
    return { login, avatar_url };
  };
}

export default App;
