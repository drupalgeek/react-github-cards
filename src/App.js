import React, { Component } from 'react';
import {CardList} from "./components/cards/Cards";
import Filter from "./components/cards/Filter";

class App extends Component {
  state = {
    cards: [
      { name: "Aruna Singh",
        "avatar_url": "https://avatars3.githubusercontent.com/u/17371652",
         "company": "Ex2 Soulution" 
      }
  ]
  }; 

  AddNewCard = (cardInfo) => {
      this.setState(prevState => ({
       cards: prevState.cards.concat(cardInfo)
      })
    )
  }

  render() {
    console.log(this.state.cards);
    return (
      <div className="card-wrapper">
         <Filter onSubmit={this.AddNewCard}></Filter>
        <CardList cards={this.state.cards}></CardList>
      </div>
    );
  }
}

export default App;
