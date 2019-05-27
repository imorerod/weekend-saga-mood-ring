import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class Tags extends Component {
    render() {
        return(
            <li>
                <span>{this.props.tag.name}</span>
            </li>
        )
    }
}

export default connect(mapReduxStateToProps)(Tags);