import React, { useState , useEffect, useRef} from "react";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";

import TopNav from "../containers/navs/Header";
const AppLayout = (props) => {
  const { containerClassnames } = props;

  return (
    <div id="app-container" className={containerClassnames}>
      <TopNav history={props.history}/>
        <div>
          <div>
            {props.children}
          </div>
        </div>
    </div>
  );
}

export default AppLayout;
