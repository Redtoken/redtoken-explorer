import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Transactions = React.lazy(() =>
  import('./transactions')
);
const TransactionsDetails = React.lazy(() =>
  import('./transactionsDetails')
);

const SecondMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/list`} />
      <Route
        path={`${match.url}/list`}
        render={props => <Transactions {...props} />}
      />
      <Route
        path={`${match.url}/details/:id`}
        render={props => <TransactionsDetails {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default SecondMenu;
