import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { withThemeProvider } from '@fishingbooker/core/dist/theme';

import routes from './routes';

const App = () => (
  <Switch>
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Switch>
);

export default withThemeProvider(App);
