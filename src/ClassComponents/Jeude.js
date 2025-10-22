import React, { Component } from 'react';
 
export default class JeuDe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      face: null,
      compteur: null,
      face:false
    };
  }
  jouer() {
    const valeur = Math.floor(Math.random()*6) + 1;
    this.setState({
        face:valeur,
        compteur:this.state.compteur+1,
        fin:this.props.valeurCachee==this.state.face ? true : false
    })
  }
  initialiser() {
    this.setState({
        face:null,
        compteur: null,
        fin:false
    })
  }
  render() {
    return (
      <div>
        <img src="./images/c1.jpg" alt="Jeudes" />
        <h1>JeuDe</h1>
        <p>Nombre d'essais :{this.state.compteur}</p>
        {<p>Bravo vous avez touvé la face cachée !!</p>}
        {<button
        onClick={(() => this.jouer())}
        >Jouer</button>}
        {this.state.fin && <button
        onClick={() => this.initialiser()}
        >Initialiser</button>}
      </div>
    );
  }
}
 