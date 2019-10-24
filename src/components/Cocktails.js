import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom';
// import BackButton from './BackButton';
import { connect } from 'react-redux';
import { fetchDrinks } from '../redux/actions';

class Cocktails extends Component {
   
    state = {
        cocktails: [],
        midUrl: '',
        endUrl: ''
    }
  
    componentDidMount() {
        let midUrl = this.props.match.params.midurl
        let endUrl = this.props.match.params.endurl
        this.props.fetchDrinks(midUrl, endUrl);
    }

    handleLetterClick = e => {
        this.props.fetchDrinks('search.php?f=', e.target.innerText.charAt(0).toLowerCase())
    }

    selectByPopular = () => {
        this.props.fetchDrinks('popular.php', '')
    }

    selectByRecent = () => {
        this.props.fetchDrinks('recent.php', '')
    }

    selectByAlcohol = () => {
        this.props.fetchDrinks('filter.php?a=', 'Alcoholic')
    }

    selectByNoAlcohol = () => {
        this.props.fetchDrinks('filter.php?a=', 'Non_Alcoholic')
    }

    // fetchData = () => {
    //     fetch('https://www.thecocktaildb.com/api/json/v1/1/' + this.state.midUrl + this.state.endUrl)
    //     .then(res => res.json())
    //     .then(data => this.setState({ cocktails: data.drinks})); 
    // }

    render() {
        const cocktailsList = this.props.cocktails ? (
            this.props.cocktails.map( cocktail => {
                return (
                    <Link to={`/cocktail/${cocktail.idDrink}`} key={cocktail.idDrink}>
                <div id={ cocktail.idDrink } className="cocktail">
                    <img className="showcase" src={ cocktail.strDrinkThumb } alt="drink"></img>
                    <h6 className="center cocktail-title">{ cocktail.strDrink }</h6>
                </div>
                </Link>
                )  
              })
        ) : (
            <div className="center">Sorry, no drinks found</div>
        );
        
        return (
            <div className="container">
              <div className="buttons-wrapper">
                  <button className="btn red darken-3 z-depth-0" onClick={this.selectByPopular}>Popular</button>
                  <button className="btn red darken-3 z-depth-0" onClick={this.selectByRecent}>Recent</button>
                  <button className="btn red darken-3 z-depth-0" onClick={this.selectByAlcohol}>Alcohol</button>
                  <button className="btn red darken-3 z-depth-0" onClick={this.selectByNoAlcohol}>No Alcohol</button>
              </div>
              <div className="cocktails-wrapper">
                {/* <Link exact to="/">Home</Link>
                <BackButton /> */}
                { cocktailsList }
              </div>
              <div className="letters-wrapper">
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
            </div>
        )
    }
}


const mapStateToProps = state => ({
    cocktails: state.cocktails.cocktails
})

export default connect(mapStateToProps, { fetchDrinks })(Cocktails)

// https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a

//d2e402ad2e634e613c42c10eec34f1834433594d1bc9dc4c7230178d2b5c3f29