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
                <h3>{this.props.name}</h3>

                <img src={this.props.image} alt={this.props.id}></img>

                <p>{this.props.origin}</p>

                <p>{this.props.temperament}</p>

                <h6>{this.props.description}</h6>

                <a href={this.props.wikiLink}>Read more here!</a>
            </div>
        )
    }
}

export default CatDisplay
