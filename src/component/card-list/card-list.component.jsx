import React from 'react';
import './card-list.styles.css';
import { Card } from "../card/card.component";

export const CardList = (props) => (
    <div className="card-list"> 
    {props.robots.map(robot => {
        return <Card key={robot.id} robot={robot}></Card>
    })}
    </div>
)
    
export default CardList;