import React from 'react';
import "styles/styles.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import NotFound from 'components/404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
