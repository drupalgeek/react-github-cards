import React from "react";

export const Card = (props) => {
    return (
      <div style={{margin: "1em"}}>
          <img width="75" src={props.avatar_url}></img>
          <div style={{display:'inline-block', marginleft:10}}>
              <div style={{fontsize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
              <div>{props.company}</div>
          </div>
      </div>
    );
}




export const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    )
}
