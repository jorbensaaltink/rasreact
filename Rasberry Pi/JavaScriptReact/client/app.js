import React from 'react'
import Menu from './component/menu'
import Wrapper from './info-wrapper'
import Clock from './clock'
import Counter from './count'
import Data from './data'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default () => (<div>
  <Router>
    <main>
      <Menu />
      <Route exact path='/info' component={Wrapper} />
      <Route exact path='/clock' component={Clock} />
      <Route exact path='/count' component={Counter} />
      <Route exact path='/data' component={Data} />
    </main>
  </Router></div>)
