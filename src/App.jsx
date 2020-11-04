import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import {AuthState} from './context/auth/authState'
import {ContactsState} from './context/contacts/contactsState'
import { AnonRoute } from './components/common/AnonRoute';
import { PrivateRoute } from './components/common/PrivateRoute';
import LoginPage from './pages/login/LoginPage';
import ContactsPage from './pages/contacts/ContactsPage';

export const App = () => {
  return (
    <Router>
      <AuthState>
        <Switch>
          <AnonRoute exact path='/login' component={LoginPage} />
          <ContactsState>
            <PrivateRoute exact path='/' component={ContactsPage} />
          </ContactsState>
        </Switch>
      </AuthState>
    </Router>
  )
}

