import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class ImageList extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_IMAGE',
        });
    }

    nextClick = (event) => {
        let payload = 0;

        if (this.props.reduxState.currentImage + 1 > this.props.reduxState.images.length - 1) {
            payload = 0;
        } else {
            payload = this.props.reduxState.currentImage + 1;
        }

        this.props.dispatch({ type: 'GET_CURRENT_IMAGE', payload: payload });
    }

    previousClick = (event) => {
        let payload = 0;

        if (this.props.reduxState.currentImage - 1 < 0) {
            payload = this.props.reduxState.images.length - 1;
        } else {
            payload = this.props.reduxState.currentImage - 1;
        }

        this.props.dispatch({ type: 'GET_CURRENT_IMAGE', payload: payload });
    }


    render() {
        let element = <div></div>;
        if (this.props.reduxState.images.length > 0) {
            const currentImage = this.props.reduxState.images[this.props.reduxState.currentImage];
            element = <img src={currentImage.path} alt={currentImage.title} />
        }

        return (
            <div>
                <button onClick={this.nextClick}>Next</button>
                {element}
                <button onClick={this.previousClick}>Previous</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(ImageList);