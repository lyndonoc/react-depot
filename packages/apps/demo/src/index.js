import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import ReactFormContractor from './react-form-contractor/containers/app';
import ReactScrollDragger from './react-scroll-dragger/containers/app';
import * as serviceWorker from './serviceWorker';

const routes = [
  {
    component: ReactFormContractor,
    path: '/react-depot/react-form-contractor',
  },
  {
    component: ReactScrollDragger,
    path: '/react-depot/react-scroll-dragger',
  },
  {
    component: () => <Redirect to="/react-depot/react-form-contractor"/>,
    path: '*',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        {routes.map((route, routeIndex) => {
          return (
            <Route
              exact
              component={route.component}
              key={`${route.path}+${routeIndex}`}
              path={route.path}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
