import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";

import TopNav from "../containers/navs/Header";
import Bottom from "../containers/navs/Bottom";
// import TopNav from "../containers/navs/Topnav";

class AppLayout extends Component {

  render() {
    const { containerClassnames } = this.props;
    return (
      <div id="app-container" className={containerClassnames}>
        <TopNav history={this.props.history} title={title}/>
        {/* <main> */}
          <div className="container-fluid">
            <div>
              {this.props.children}
            </div>
          </div>
        {/* </main> */}
        {/* <Bottom history={this.props.history} /> */}
      </div>
    );
  }
}
const mapStateToProps = ({  }) => {

};
const mapActionToProps={}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(AppLayout));
