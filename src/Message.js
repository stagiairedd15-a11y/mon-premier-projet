import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super()
        this.state ={message:'bienvenue visiteur', bntMessage: 'Inscription'}
    }
    inscription(){
        this.setState({
            this.setState({
                message:'Bonsoir ',
                bntMessage: 'thank you'
            })
        })
    }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button
         onClick={()=>this.inscription()}
         >
            {this.state.bntMessage}
        </button>
      </div>
    )
  }
}
