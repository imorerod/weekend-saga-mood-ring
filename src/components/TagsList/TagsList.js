import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class TagsList extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_TAGS'
        });
    }

    render() {
        const tagArray = this.props.reduxState.tagsReducer.map((tag, index) => {
            console.log(tag);
            return (
                <button key={tag.id} data-id={tag.id} onClick={this.onTagClick} >
                {tag.name}
            </button>

            );
        })

        return (
            <div>
                {tagArray}
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(TagsList);