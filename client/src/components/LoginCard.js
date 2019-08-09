import React from "react";

class LoginCard extends React.Component {
  render() {
    return (
      <div className="userCard">
        <h3>{this.props.name}</h3>
        <p>{this.props.course}</p>
        <p>{this.props.technique}</p>
      </div>
    );
  }
}

export default LoginCard;
