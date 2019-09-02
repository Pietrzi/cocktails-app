import React, { Component } from 'react';
//   import BackButton from './BackButton';

export default class Cocktail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktail: {}
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
        .then(res => res.json())
        .then(data => data.drinks[0]) 
        .then(drink => this.setState({ cocktail: drink }));
    }

    render() {

        const drinkIngredients = {
            measure1: this.state.cocktail.strMeasure1,
            measure2: this.state.cocktail.strMeasure2,
            measure3: this.state.cocktail.strMeasure3,
            measure4: this.state.cocktail.strMeasure4,
            measure5: this.state.cocktail.strMeasure5,
            measure6: this.state.cocktail.strMeasure6,
            measure7: this.state.cocktail.strMeasure7,
            measure8: this.state.cocktail.strMeasure8,
            measure9: this.state.cocktail.strMeasure9,
            measure10: this.state.cocktail.strMeasure10,
            measure11: this.state.cocktail.strMeasure11,
            measure12: this.state.cocktail.strMeasure12,
            measure13: this.state.cocktail.strMeasure13,
            measure14: this.state.cocktail.strMeasure14,
            measure15: this.state.cocktail.strMeasure15,
            ingredient1: this.state.cocktail.strIngredient1,
            ingredient2: this.state.cocktail.strIngredient2,
            ingredient3: this.state.cocktail.strIngredient3,
            ingredient4: this.state.cocktail.strIngredient4,
            ingredient5: this.state.cocktail.strIngredient5,
            ingredient6: this.state.cocktail.strIngredient6,
            ingredient7: this.state.cocktail.strIngredient7,
            ingredient8: this.state.cocktail.strIngredient8,
            ingredient9: this.state.cocktail.strIngredient9,
            ingredient10: this.state.cocktail.strIngredient10,
            ingredient11: this.state.cocktail.strIngredient11,
            ingredient12: this.state.cocktail.strIngredient12,
            ingredient13: this.state.cocktail.strIngredient13,
            ingredient14: this.state.cocktail.strIngredient14,
            ingredient15: this.state.cocktail.strIngredient15,
        }
    
        const arr = [];

        for (let i = 1; i <= 15; i++) {
            arr.push({
                mesaure: drinkIngredients["measure" + i],
                ingredient: drinkIngredients["ingredient" + i]           
            })
        }

        return (
            <div className="cocktail-display">
                {/* <BackButton />  */}
                <h2>{ this.state.cocktail.strDrink }</h2>
                <img className="display" src={ this.state.cocktail.strDrinkThumb } alt="drink"></img>
                <h3>Ingredients</h3>
                  {         
                    arr.map( el => el.ingredient ? <p key={this.state.cocktail.drinkID}>{el.mesaure}{el.ingredient}</p> : null)
                  }
                <h4>Glass</h4>
                <p>{ this.state.cocktail.strGlass }</p>
                <h3>Instruction</h3>
                <p>{ this.state.cocktail.strInstructions }</p>
                <span>{ this.state.cocktail.strAlcoholic }</span>
                <span>{ this.state.cocktail.strCategory }</span>
                <span>{ this.state.cocktail.strIBA }</span>
                <br/>
                {/* <button>Add to favourite</button> */}
            </div>
        )
    }
}


