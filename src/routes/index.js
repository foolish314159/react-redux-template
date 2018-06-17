import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import Dummy from '../components/Dummy';

const routes = (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/dummy">Dummy</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/dummy" component={Dummy} />
    </main>
  </div>
);

export default routes;