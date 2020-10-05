import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.retrieveUsers = this.retrieveUsers.bind(this);

    this.state = {
      isLoading: true,
      users: [],
      error: null
    };
  }

  componentDidMount() {
    this.retrieveUsers();
  }

  retrieveUsers() {
    UserService.getUsers()
    .then(response =>
      this.setState({
        users: response.data,
        isLoading: false,
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <React.Fragment>
        <h2>User List</h2>
        <div>
          {!isLoading ? (
            
            users.map((username, email) => {
              return (
                  <p className="test" key={email}>
                     {username} - {email}
                  </p>
              );
          })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}


