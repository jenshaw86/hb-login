import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import LoginCard from './components/LoginCard';
import SignupCard from './components/SignupCard';
import ResetCard from './components/ResetCard';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  return (
    <Container className="app">
      <Header />

      {/* Routes */}
      <Switch>
        <Route exact path='/'>
          <Redirect to='/login' />
        </Route>
        <Route exact path='/login' component={LoginCard} />
        <Route exact path='/signup' component={SignupCard} />
        <Route exact path='/reset' component={ResetCard} />
      </Switch>
    </Container>
  );
};

export default App;
