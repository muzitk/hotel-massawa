import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Titles'

//get all unique value

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item [value]))]
}

function RoomsFilter({rooms}){
    const context = useContext(RoomContext)
    const {
        handleChange, type, capacity, price, 
        minPrice, maxPrice, minSize, maxSize,  breakfast, pets} = context;
        
        //get unique types
        let types = getUnique(rooms,'type')
        //add all
        types=['all', ...types]
        //map to JSX
        types = types.map((item,index)=>{
            return( <option value={item} key={index}>
            {item}
            </option>
            )
        })


let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => {
    return <option key={index} value={item}> {item} </option>
})
    
    return(
        <section className="filter-container">
            <Title title ="Search Rooms"/> 
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <lable htmlFor="type"> Room Type </lable>
                    <select
                    name="type" 
                    id="type" 
                    value={type}
                    className="form-control" onChange={handleChange}>
                        {types}
                        
                    </select>
                    </div>
                {/* end of selcet type */} 


                 {/* guest*/}
                 <div className="form-group">
                    <lable htmlFor="capacity"> Guests </lable>
                    <select
                    name="capacity" 
                    id="capacity" 
                    value={capacity}
                    className="form-control" onChange={handleChange}>
                        {people}
                        
                    </select>
                    </div>  
                {/* end of guest */}

                {/* room price */}
                <div className="form-group">
                    <lable htmlfor="price"> 
                        Room Price ${price}
                    </lable>
                    <input type="range" name="price" min={minPrice}
                     max={maxPrice} id="price" value={price} 
                     onChange={handleChange}
                     className="form-control" />
                  </div>
                {/* end of rooms price */}
                 
            </form>
        </section>
    )
}

export default RoomsFilter