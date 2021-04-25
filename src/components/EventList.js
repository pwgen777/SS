import React from 'react'
import Event from './Event'

export default function Eventdivst({events}){
    const eventsElem = events.map(event =>
        <div><Event event={event}/></div>
    )
    return(
        <div>
            {eventsElem}
        </div>

    )
}