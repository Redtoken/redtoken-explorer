import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppLayout from "../../layout/AppLayout";

const Transactions = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ "./transactions")
);
// const Block = React.lazy(() =>
//   import(/* webpackChunkName: "viwes-second-menu" */ "./block")
// );

class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect
                exact
                from={`${match.url}/`}
                to={`${match.url}/transactions`}
              />
              <Route
                path={`${match.url}/transactions`}
                render={(props) => <Transactions {...props} />}
              />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
export default App;
