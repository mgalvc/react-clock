import React from 'react';
import { format } from 'date-fns'
import './css/Clock.css'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  render() {
    return (
      <div className='Clock'>
        {format(this.state.date, 'HH:mm:ss')}
      </div>
    )
  }
}