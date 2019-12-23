import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
           midUrl: '',
           endUrl: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleByNameChange = (e) => {
        this.setState({
            midUrl: 'n',
            endUrl: e.target.value
        })
        //this.props.fetchDrinks(this.state.midUrl, this.state.endUrl);
    }

    handleByIngredientChange = (e) => {
        this.setState({
            midUrl: 'i',
            endUrl: e.target.value
        })
    }

    handleByGlassChange = (e) => {
        this.setState({
            midUrl: 'g',
            endUrl: e.target.value.trim().split(" ").join("_")
        })
    }
s
    render() {
        return (
            <div className="container">
                Link
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' onChange={this.handleByNameChange} />
                    </div>
                    <div className="input-field">
                    <Link to={`/cocktails/${this.state.midUrl}/${this.state.endUrl}`}><button className="btn red darken-3 z-depth-0">Search</button></Link>
                    </div>
                </form>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="ingredient">Ingredient</label>
                        <input type="text" id='ingredient' onChange={this.handleByIngredientChange} />
                    </div>
                    <div className="input-field">
                    <Link to={`/cocktails/${this.state.midUrl}/${this.state.endUrl}`}><button className="btn red darken-3 z-depth-0">Search</button></Link>
                    </div>
                </form>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="glass">Glass - separate words with "_"</label>
                        <input type="text" id='glass' onChange={this.handleByGlassChange} />
                    </div>
                    <div className="input-field">
                    <Link to={`/cocktails/${this.state.midUrl}/${this.state.endUrl}`}><button className="btn red darken-3 z-depth-0">Search</button></Link>
                    </div>
                </form>
            </div>
        )
    }
}


export default Search;