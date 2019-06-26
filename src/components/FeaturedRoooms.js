import React, {Component} from 'react'
import {RoomContext} from '../context'

class FeaturedRooms extends Component {
    static contextType =RoomContext;
    render(){
     return(
         <div> hi from featured Rooms</div>
     )
    }
}


export default FeaturedRooms