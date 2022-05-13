import React, { Component } from "react";

class Search extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    let username = this.refs.username.value.trim();
    if (username) {
      debugger;
    } else {
      alert("Please Enter a username");
      return;
    }
    this.props.onFormSubmit(username);
    this.refs.username.value = "";
  };

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h4 className="display-1"> GitHub Profile Search </h4>
          <p className="lead"> Enter Github username </p> <hr />
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                ref="username"
                placeholder="Enter a username..."
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
