import React, { Component, PropTypes } from 'react'

class Contactinfo extends Component {
  static propTypes =
  {
    school: PropTypes.string,
    phoneNumber: PropTypes.string,
    adres: PropTypes.string

  }
  render () {
    return (<ul className='list-group'>
      <li className='list-group-item'>Your information is school: {this.props.school} </li>
      <li className='list-group-item'>Your phonenumber: {this.props.phoneNumber} </li>
      <li className='list-group-item'>Your adres: {this.props.adres} </li>
    </ul>

    )
  }
}

class Wrapper extends Component {
  static propTypes =
  {
    info: PropTypes.string
  }
  render () {
    return (<div><Contactinfo school='NHL Hogeschool' phoneNumber='0627287106' adres='Leeuwarden' /> <Contactinfo school='Hanze Hogeschool' phoneNumber='123456789' adres='Groninegn' /></div>)
  }
}

export default Wrapper
