import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth',
})
const App = ({ onSignIn, history }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path='/auth/signin'>
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path='/auth/signup'>
            <Signup onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  )
}

export default App
