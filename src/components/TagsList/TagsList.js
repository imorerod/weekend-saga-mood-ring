import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class TagsList extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_TAGS'
        });
    }

    clickTag = (event) => {
        const imageId = this.props.reduxState.currentImage + 1;
        const payload = {
            imageId : imageId,
            tagId : event.target.dataset.id,
        }
        this.props.dispatch({
            type: 'POST_TAGS_TO_IMAGES',
            payload: payload
        })
    }
    
    render() {
        const tagArray = this.props.reduxState.tagsReducer.map((tag, index) => {
            console.log(tag);
            return (
                <button key={tag.id} data-id={tag.id} onClick={this.clickTag} >
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