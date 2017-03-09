import Fetch from 'isomorphic-fetch'
import React, { Component } from 'react'

class Data extends Component {
  constructor (props) {
    super(props)

    this.state = { posts: [] }

    Fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => this.setState({posts: posts}))
  }
  render () {
    return (<div>
      {
      this.state.posts.map(function (posts) {
        return (<ul className='list-group'>
          <li className='list-group-item'>{posts.id}</li>
          <li className='list-group-item'>{posts.title}</li>
          <li className='list-group-item'>{posts.body}</li>
        </ul>)
      })
    }
    </div>)
  }
}

export default Data
