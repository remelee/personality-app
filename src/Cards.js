import React, {useEffect, useState} from 'react';
import TinderCard from "react-tinder-card";
import "./Cards.css";
import getPeople from './firebase';



function TinderCards(){
    const [people, setPeople]=useState([]);

    useEffect(() => {
        getPeople.then((data) => {
            setPeople(data)
        }).catch((err) => {
            console.error(err)
        })
    }, [])
  
      
    return (
        <div>
            <div className="cards_container">

            {people.map(person => (
            <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}>  
               <div 
                style={{backgroundImage: `url(${person.url})`}}
                className="card">
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>))}
        </div>
        </div>
    )
}
export default TinderCards;