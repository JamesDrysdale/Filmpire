import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import { Navbar, Movies, MovieInformation, Actors, Profile } from '.';

const App = () => (
  <div>
    <CssBaseline />
    <Navbar />

    <main>
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route exact path="/movie/:id">
          <MovieInformation />
        </Route>
        <Route exact path="/actors">
          <Actors />
        </Route>
        <Route exact path="/profile/:id">
          <Profile />
        </Route>
      </Switch>
    </main>
  </div>
);

export default App;
