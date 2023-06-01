import React, { Component } from "react";
class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="bottom-nav fixed-bottom-nav" >
        <div className="d-flex align-items-center navbar-left bottom-content">
          <div>Full instructions available here: https://docs.usdao.io/basics/claim</div>
        </div>
      </div>
    );
  }
}

export default TopNav;
