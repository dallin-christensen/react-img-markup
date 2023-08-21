import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Example from './Example';
import { AppContainer } from 'react-hot-loader';
import "core-js/stable";
import "regenerator-runtime/runtime";
// AppContainer is a necessary wrapper component for HMR

const container = document.getElementById('root');
const root = createRoot(container);

const render = (Component) => {
  root.render(
    <AppContainer>
      <Component/>
    </AppContainer>
  );
};

render(Example);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Example', () => {
    render(Example)
  });
}
