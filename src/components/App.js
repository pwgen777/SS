import React from 'react'
import EventList from './EventList'
import events from '../data'

function App(){
    return(
        <div>
            <EventList events ={events}/>
        </div>
    )
}

export default App