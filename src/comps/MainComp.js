import React, { Component } from 'react'
import CatDisplay from './CatDisplay'
import './MainComp.css'
import axios from 'axios';

// const CAT_API_KEY = '?api_key=9c6f2f5c-8e6c-417c-8011-94e3543db8ba';
const CAT_API_URL = `https://api.thecatapi.com/v1/`;
const headers = {
    'x-api-key': '97e0d315477f435489cf04904c9d0e6co',
  };

export class MainComp extends Component {

    constructor(props){
        super(props)
        this.state = {
                search:'',

                image: '',

                name : '',
                origin : '',
                id: '',
                temperament : '',
                description : '',
                moreInfo : ''
        }
        this.searchCat = this.searchCat.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.showDisplay  = this.showDisplay.bind(this)
    }

    async componentDidMount(){
        let breeds = await axios.get(`${CAT_API_URL}breeds/search?q=bengal`, {headers})
        console.log(breeds.data)
    

        let breedImage = await axios.get(`${CAT_API_URL}images/search?breed_ids=${breeds.data[0].id}`, {headers})
        console.log(breedImage)
        console.log(breedImage.data[0].url)
    }

    handleChange(event) {
        this.setState({search: event.target.value});
      }
    

    async searchCat(){
 
        try{
            const searchedCat = `${CAT_API_URL}breeds/search?q=${this.state.search}`
            console.log(searchedCat, {headers});

            let catRes = await axios.get(searchedCat);
            console.log(catRes);

            let cat = catRes.data[0];
            this.setState({
                name: cat.name,
                origin: cat.origin,
                temperament: cat.temperament,
                id:          cat.id,
                description: cat.description,
                moreInfo: cat.wikipedia_url
            })
            

            const catImage = `${CAT_API_URL}images/search?breed_ids=${this.state.id}`
            const imgRes = await axios.get(catImage);
            console.log(imgRes);

            let image = imgRes.data[0]

            this.setState({
                image: image.url
            })

        } catch(err){
      alert(err)
    }
  }

  handleSubmit(event) {
    event.preventDefault();
}

  showDisplay(){
      if(this.state.image === ''){
          return <div></div>
      } else {
       return(
        <CatDisplay
        name = {this.state.name}
        image = {this.state.image}
        id    = {this.state.id}
        origin = {this.state.origin}
        temperament = {this.state.temperament}
        description = {this.state.description}
        wikiLink = {this.state.moreInfo}/>
       )
      }
  }



    render() {
        return (
            <div>
                <h1>The Cat-O-Matic!!</h1>
                <p><em>Simply use the search bar below to find info on various breeds!</em></p>

                <form onSubmit = {this.handleSubmit}>
                    <input typeof ='text' value={this.state.search}
                    onChange = {this.handleChange} placeholder='Search for breeds here!'/>
                    <button type ='submit' value = 'Submit'
                    onClick = {this.searchCat}>Search</button>
                </form>

                {this.showDisplay()}

            </div>
        )
    }
}

export default MainComp
