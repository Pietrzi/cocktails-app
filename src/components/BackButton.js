import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class BackButton extends Component {
    static contextTypes = {
        router: () => true
      }
    render() {
        return (
            <div>
                <button onClick={this.props.history.goBack}>
                    Back
                </button>
            </div>
        )
    }
}

export default withRouter(BackButton);