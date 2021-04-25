import React from 'react'
import axios from 'axios'

export default class EventsData extends React.Component {
    state = {
      events: []
    }
  
    componentDidMount() {
      axios.get(`http://213.139.210.35/api/events`, { mode: "no-cors" })
        .then(res => {
          const events = res.data;
          this.setState({ events });
        })
    }
  
    render() {
      return (
        <ul>
          { this.state.events.map(event => <li>{event.id}</li>)}
        </ul>
      )
    }
}