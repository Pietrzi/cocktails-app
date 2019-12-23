import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//import authReducer from '../redux/reducers/authReducer';
// import { connect } from 'react-redux';
// import { registerUser } from '../redux/actions';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = name => ({ target }) => {
        this.setState({
           [name]: target.value
        })
    }

      handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state.username, this.state.password);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' onChange={this.handleChange('username')} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="text" id='password' onChange={this.handleChange('password')} />
                    </div>
                    <div className="input-field">
                        <button className="btn red darken-3 z-depth-0 adjust">Register</button>
                        <Link to="/login">Log in</Link>
                    </div>
                </form>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     console.log(state);
//     return {  
//       users: state.usters
//     };
//   }

//   const mapDispatchToPorps = (dispatch) => ({
//       addUser: (username, password) => dispatch(registerUser(username, password))
//   })

// const RegisterWithRouter = withRouter(Register);


// export default connect(mapStateToProps, mapDispatchToPorps)(RegisterWithRouter);

export default withRouter(Register);