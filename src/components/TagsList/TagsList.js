import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import Tags from '../Tags/Tags';

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
                <Tags key={tag.id} tag={tag.name} />
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