import React, {Component} from 'react';
import defaultBcg from '../images/room-1.jpg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero'


class SingleRoom extends Component {
  constructor(props) {
    super(props)
    //console.log(this.props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    }
      
  }
  static contextType = RoomContext;
  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug)
    if(!room){
      return (
         <div className="error">
        <h3> room isnt available </h3>
        <Link to="/rooms" className="btn-primary"> BAck to Rooms </Link>
       </div>
      )
    }

    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room
    
    //to render 3 images only via array discructoring <StyledHero img={images[0] 
    const [ mainImg, ...defaultImg] = images

  return (
    <>
    <StyledHero img={mainImg||this.state.defaultBcg}>
    <Banner title={`${name} room`}>
      <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
      </Banner>
      </StyledHero>

      <section className="single-room">
        <div className="single-room-images">
        {defaultImg.map((item,index)=>{
         return <img key={index} src={item} alt={name}/>
      })}
      </div>

      <div className ="single-room-info">
        <article className="desc">
          <h3>Details </h3>
          <p> {description} </p>
          </article>

          <article className="info">
              <h3>info </h3>
              <h6>Price: ${price}</h6>       
              <h6>Size: ${size} SQFT</h6> 
              <h6>Price: ${price}</h6> 
              <h6>Max Capacity: {capacity > 1? `${capacity} people` : `${capacity < 1 } person`}</h6>       
              <h6> {pets ? "pets Allowed" : "no pets"}</h6>  
              <h6>{breakfast && "Free Breakfast included"}</h6>       
          </article> 
        </div>
      </section>
      
      <section className="room-extras">
        <h6> Extras</h6>
        <ul className="extras">
          {extras.map((item,index) => {
            return <li key={index}>~ {item}</li>
          })}
        </ul>
      </section>
      </>

  );
  }
}
export default SingleRoom;