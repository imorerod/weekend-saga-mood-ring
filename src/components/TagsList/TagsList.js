import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import getTags from '../../modules/redux/sagas/getTags.saga';
import Tags from '../Tags/Tags';

class TagsList extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'GET_TAGS'});
    }

    render() {
        const htmlArray = this.props.reduxState.tagsReducer.map((tag, index) => {
            console.log(tag);
            return (
                <Tags key={tag.id} tag={tag.name} />
            );
        })

        return (
            <div>
                {htmlArray}
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(TagsList);