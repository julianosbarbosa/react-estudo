import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import Dashboard from '../dashboard/dashboard'
import Cadastro from '../cadastro/cadastro'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/cadastros' component={Cadastro} />
        <Redirect from='*' to='/' />
    </Router>
)