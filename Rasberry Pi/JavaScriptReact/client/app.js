import React from 'react'
import Wrapper from './info-wrapper'
import Clock from './clock'
import Counter from './count'
import Data from './data'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default () => (<div>
  <Router>
    <main>
      <Link to='/info'>Info </Link>
      <Link to='/clock'> Clock</Link>
      <Link to='/count'> Count</Link>
      <Link to='/data'> Data</Link>
      <Route exact path='/info' component={Wrapper} />
      <Route exact path='/clock' component={Clock} />
      <Route exact path='/count' component={Counter} />
      <Route exact path='/data' component={Data} />
    </main>
  </Router></div>)
