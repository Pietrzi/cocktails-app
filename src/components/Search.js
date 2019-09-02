import React, { Component } from 'react'

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
           midUrl: '',
           endUrl
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn red darken-3 z-depth-0">Search</button>
                    </div>
                </form>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="ingredient">Ingredient</label>
                        <input type="text" id='ingredient' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn red darken-3 z-depth-0">Search</button>
                    </div>
                </form>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="glass">Glass</label>
                        <input type="text" id='glass' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn red darken-3 z-depth-0">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default Search;