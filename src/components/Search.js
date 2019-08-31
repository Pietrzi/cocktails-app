import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom';
import BackButton from './BackButton';

export default class Search extends Component {

    render() {
        return (
            <div>
                <Link exact to="/">Home</Link>
                <BackButton />
            </div>
        )
    }
}
