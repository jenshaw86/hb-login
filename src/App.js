import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import FormCard from './components/FormCard';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  return (
    <Container className="app">
      <Header />

      {/* Routes */}
      <Switch>
        <Route exact path='/login' component={FormCard} />
        <Route exact path='/signup' component={FormCard} />
        <Route exact path='/reset' component={FormCard} />
        <Route path='/'>
          <Redirect to='/login' />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
