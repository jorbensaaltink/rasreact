import React, { Component } from 'react'

class Counter extends Component {
  static views = 0;
  constructor (props) {
    super(props)

    this.state = {views: Counter.views}
  }

  componentWillMount () {
    this.setState({views: Counter.views + 1})
  }

  componentWillUnmount () {
    Counter.views = this.state.views
  }

  addOne () {
    this.setState({views: Counter.views + 1})
  }

  render () {
    return (<div>
     Views: {this.state.views}
    </div>
    )
  }
}

export default Counter
