import React, { Component } from 'react';
import Player from './Components/Player';
import AddPlayerForm from './Components/AddPlayer';
import Header from './Components/Header';
import './App.css';

/**
 * Scoreboard comp state:players array(name, score)
Methods: handleIncrementScore(indexOfPlayer), handleDecrementScore(indexOfPlayer) handleAddPlayer(name)

Maybe not called for?
//PlayerList comp props:players array. Maps players array to player comps    

Player comp props:name, score, key, index, incrementScore(indexOfPlayer), decrementScore(indexOfPlayer)

AddPlayerForm props: addPlayer(name)

Header comp? Title
 */

class Scoreboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [{
        name: 'John',
        score: 0
      },
      {
        name: 'Jack',
        score: 0
      }, {
        name: 'Jill',
        score: 0
      }]
    };

    this.handleIncrementScore = this.handleIncrementScore.bind(this);
    this.handleDecrementScore = this.handleDecrementScore.bind(this);
    this.handleAddPlayer = this.handleAddPlayer.bind(this);
  }

  handleIncrementScore = index => {
    const playersCopy = [...this.state.players];
    const playerCopy = playersCopy[index];
    playerCopy.score = playerCopy.score + 1;
    playersCopy[index] = playerCopy;

    this.setState({
      players: playersCopy
    })
  };

  handleDecrementScore = index => {
    const playersCopy = [...this.state.players];
    const playerCopy = playersCopy[index];
    playerCopy.score = playerCopy.score - 1;
    playersCopy[index] = playerCopy;

    this.setState({
      players: playersCopy
    })
  };

  handleAddPlayer = name => {
    const newPlayer = {
      name: name,
      score: 0
    };

    const playersCopy = [...this.state.players];
    const newPlayers = playersCopy.concat([newPlayer]);

    this.setState({
      players: newPlayers
    });
  }

  render() {
    return (
      <div>
       <Header />

        <div>
          {this.state.players.map((player, index) => (
            <Player name={player.name} 
            key={index} 
            score={player.score} 
            index={index} 
            incrementScore={this.handleIncrementScore} 
            decrementScore={this.handleDecrementScore} 
            />
          ))}
        </div>

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default Scoreboard;
