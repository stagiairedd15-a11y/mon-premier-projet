import React, { Component } from 'react'
constructor () {
    this.state ={}
    
}
export default class Panorama extends Component {
  render() {
    return (
      <div>
        <h1>Panorama</h1>
        <img onScroll={'./>images/pc${this.state.index}.png'}
        className='img-thumbnail'
        />
        <br/>
        <button 
        onClick={() =>this.precedent()}
        className='btn btn-success'
        >
            Precedent
        </button>
        <button
            onClick={() =>this.suivant()}
        className='btn btn-primary'
        >
        </button>
      </div>
    )
  }
}
