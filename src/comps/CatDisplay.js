import React, { Component } from 'react'
import './CatDisplay.css'

export class CatDisplay extends Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {

        return (
            <div>
              <div className = 'flex-container'>
                <div className = 'flex-row-1'>
                  <h2>{this.props.name}</h2>

                  <img src={this.props.image} alt={this.props.id}></img>
                </div>

                <h3>Origin:</h3> <p>{this.props.origin}</p>

                <h3>Temperament/Personality:</h3> <p>{this.props.temperament}</p>

                <h3>Description:</h3> <p>{this.props.description}</p>

                <a href={this.props.wikiLink}>Read more here!</a>
             </div>

             <footer><em> by Alex Newman</em></footer>
            </div>
        )
    }
}

export default CatDisplay
