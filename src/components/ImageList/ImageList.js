import React, { Component } from 'react';
import { connect } from 'react-redux';
import Image from '../Image/Image';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import getImage from '../../modules/redux/sagas/getImage.saga';

class ImageList extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the imageList from the API
        this.getImage();
    }

    render() {
        return (
            <div>
                {this.props.reduxState.imageList.map((image, index) => {
                    return (
                        <Image key={image.id} image={image} />
                    );
                })}
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(ImageList);
