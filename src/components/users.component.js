import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../services/user.service";
import Card from "bootstrap/dist/css/bootstrap.min.css"

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

            users.map(user => {
              return (
                <React.Fragment>
                  <div className="h3 mb-2 pt-2 font-weight-bold text-secondary">
                    <div className="username" >
                      {user.username} - {user.email}
                  </div>
                    <div className="email">
                      
                    </div>
                  </div>
                </React.Fragment>

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


