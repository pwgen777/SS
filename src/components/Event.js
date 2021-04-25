import React, {Component} from 'react'

class Event extends Component{
    state = {
        isOpen: false
    }

    render(){
        const {event} = this.props
        const description = this.state.isOpen && <section>{event.description_ru}</section>
        return(
            <div>
                <h1>
                    {event.title_ru}
                </h1>
                {description}
                <h3>{(new Date(event.updated_at)).toLocaleString()}</h3>
                <button onClick={this.handleClick}>
                        {this.state.isOpen? 'Закрыть' : 'Подробнее'}
                </button>
            </div>
        )  
    }

    handleClick = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
} 


export default Event