import React from "react";

class LoginCard extends React.Component {
  render() {
    return (
      <div className="userCard">
        <h3>Name: {this.props.name}</h3>
        <p>Course: {this.props.course}</p>
        <p>Technique: {this.props.technique}</p>
      </div>
    );
  }
}

export default LoginCard;
