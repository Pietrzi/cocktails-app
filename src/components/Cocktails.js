import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom';
import BackButton from './BackButton';

export default class Cocktails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktails: [],
            midUrl: 'filter.php?a=', //'popular.php'
            endUrl: 'Alcoholic'
        }
    }
    componentDidMount() {
        const randomNum = Math.floor(Math.random() * 231)
        fetch('https://www.thecocktaildb.com/api/json/v1/1/' + this.state.midUrl + this.state.endUrl)
        .then(res => res.json())
        .then(data => this.setState({ cocktails: data.drinks.slice(randomNum, randomNum + 20) }));
    }

    handleLetterClick = (e) => {
        this.setState({
            midUrl: 'search.php?f=',
            endUrl: e.target.innerText.charAt(0).toLowerCase() 
        }, () => {
            this.fetchData();
          });
    }

    fetchData = () => {
        //const randomNum = Math.floor(Math.random() * 231)
        fetch('https://www.thecocktaildb.com/api/json/v1/1/' + this.state.midUrl + this.state.endUrl)
        .then(res => res.json())
        .then(data => this.setState({ cocktails: data.drinks})); 
    }

    render() {
        const cocktailsList = this.state.cocktails.map( cocktail => (
            <Link to={`/cocktail/${cocktail.idDrink}`} key={cocktail.idDrink}>
            <div id={ cocktail.idDrink }>
                <img className="showcase" src={ cocktail.strDrinkThumb } alt="drink"></img>
                <h4>{ cocktail.strDrink }</h4>
            </div>
            </Link>
        ));
        return (
            <div>
                <Link exact to="/">Home</Link>
                <BackButton />
                { cocktailsList }
                <span className="letters" onClick={ this.handleLetterClick }>A/</span>
                <span className="letters" onClick={ this.handleLetterClick }>B/</span>
                <span className="letters" onClick={ this.handleLetterClick }>C/</span>
                <span className="letters" onClick={ this.handleLetterClick }>D/</span>
                <span className="letters" onClick={ this.handleLetterClick }>E/</span>
                <span className="letters" onClick={ this.handleLetterClick }>F/</span>
                <span className="letters" onClick={ this.handleLetterClick }>G/</span>
                <span className="letters" onClick={ this.handleLetterClick }>H/</span>
                <span className="letters" onClick={ this.handleLetterClick }>I/</span>
                <span className="letters" onClick={ this.handleLetterClick }>J/</span>
                <span className="letters" onClick={ this.handleLetterClick }>K/</span>
                <span className="letters" onClick={ this.handleLetterClick }>L/</span>
                <span className="letters" onClick={ this.handleLetterClick }>M/</span>
                <span className="letters" onClick={ this.handleLetterClick }>N/</span>
                <span className="letters" onClick={ this.handleLetterClick }>O/</span>
                <span className="letters" onClick={ this.handleLetterClick }>P/</span>
                <span className="letters" onClick={ this.handleLetterClick }>Q/</span>
                <span className="letters" onClick={ this.handleLetterClick }>R/</span>
                <span className="letters" onClick={ this.handleLetterClick }>S/</span>
                <span className="letters" onClick={ this.handleLetterClick }>T/</span>
                <span className="letters" onClick={ this.handleLetterClick }>U/</span>
                <span className="letters" onClick={ this.handleLetterClick }>V/</span>
                <span className="letters" onClick={ this.handleLetterClick }>W/</span>
                <span className="letters" onClick={ this.handleLetterClick }>X/</span>
                <span className="letters" onClick={ this.handleLetterClick }>Y/</span>
                <span className="letters" onClick={ this.handleLetterClick }>Z</span>
            </div>
        )
    }
}

// https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a