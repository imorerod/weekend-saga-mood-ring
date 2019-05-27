import React, {Component} from 'react';
import {connect} from 'react-redux';

class Image extends Component {
    render() {
        return(
            <img src={this.props.path} />
        )
    }
}

export default connect()(Image);