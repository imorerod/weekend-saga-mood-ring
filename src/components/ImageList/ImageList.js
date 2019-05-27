import React, { Component } from 'react';
import { connect } from 'react-redux';
import Image from '../Image/Image';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import getImage from '../../modules/redux/sagas/getImage.saga';

class ImageList extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_IMAGE'
        });
    }

    render() {
        const htmlArray = this.props.reduxState.images.map((image, index) => {
            console.log(image);
            return (
                <Image key={image.id} path={image.path} />
            );
        })

        return (
            <div>
                {htmlArray}
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(ImageList);