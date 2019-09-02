import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    }

      handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="text" id='password' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn red darken-3 z-depth-0">Register</button>
                        <Link to="/login">Log in</Link>
                    </div>
                </form>
            </div>
        )
    }
}


export default withRouter(Register);