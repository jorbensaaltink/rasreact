import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

class Menu extends Component {
  render () {
    return (<main>
      <Link to='/info'>Info </Link>
      <Link to='/clock'> Clock</Link>
      <Link to='/count'> Count</Link>
      <Link to='/data'> Data</Link>
    </main>
    )
  }
}

export default Menu
