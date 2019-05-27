import React, {Component} from 'react';
import {connect} from 'react-redux';

class Image extends Component {
    render() {
        return(
            <img src={this.props.image.path}
            alt={this.props.image.name} />
        )
    }
}

export default connect()(Image);