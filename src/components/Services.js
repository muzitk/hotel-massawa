import React, {Component} from 'react'
import { FaCocktail, FaShuttleVan, FaBeer, FaHiking, FaSpa } from 'react-icons/fa'
import Title from './Titles'

class Services extends Component{
    state = {
        services: [
           { icon:<FaCocktail/>,
            title: "Free Cocktails",
            info: "join us and get some free drinks on us!"},

          { icon:<FaShuttleVan/>,
            title: "Free Unlimited  rides",
            info: "free shuttle to your destinations!"},
            
          { icon:<FaSpa/>,
            title: "In house Spa",
            info: "Come relax with us!"},

         { icon:<FaHiking/>,
           title: "Beautiful trails",
           info: "Put on your hiking shoes and grab your bottle of water!"},
            
        ]
    }
    render(){
        return(
            <section className="services">

                <Title title ="services" />
                 <div className="services-center">
                     {this.state.services.map((item, index) => {
                     return (
                        <article key ={index} className="services">
                        <span> {item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                     )
                })}
                </div>

             </section>
        )
    }
}

export default Services