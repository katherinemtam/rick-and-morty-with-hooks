import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import DetailPage from '../../containers/DetailPage';
import RickAndMorty from '../../containers/RickAndMorty';

export default function App() {
  return (
    <div>
      <Router>
        <main>
          <Switch>

            <Route path="/" exact={true}
              component={RickAndMorty} 
            />

            <Route path="/:id" exact={true}
              component={DetailPage} 
            />

            <Redirect to="/" />
            
          </Switch>
        </main>
      </Router>
    </div>
  );
}
