import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { withRouter } from 'react-router';

import ReactFormContractor from './react-form-contractor/containers/app';
import ReactScrollDragger from './react-scroll-dragger/containers/app';
import * as serviceWorker from './serviceWorker';

const App = withRouter(({
  location = {},
}) => {
  const {
    search = '',
  } = location
  const _search = search.startsWith('?')
    ? search.slice(1)
    : search;
  const {
    app = 'react-form-contractor',
  } = _search
    .split('&')
    .reduce(
      (acc, curr) => {
        const [
          name,
          value,
        ] = curr.split('=');
        return {
          ...acc,
          [name]: value,
        };
      },
      {},
    );

  return app === 'react-form-contractor'
    ? <ReactFormContractor/>
    : <ReactScrollDragger/>;
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
