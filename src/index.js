import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
// Import saga middleware
import createSagaMiddleware from  'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// REDUCERS
import images from './modules/redux/reducers/images.reducer';
import currentImage from './modules/redux/reducers/currentImage.reducer';
import tagsReducer from './modules/redux/reducers/tags.reducer';

// SAGAS
import getImage from './modules/redux/sagas/getImage.saga';
import getTags from './modules/redux/sagas/getTags.saga';
import postTags from './modules/redux/sagas/postTags.saga';
//import getCurrentTags from './modules/redux/sagas/getCurrentTags';

// ----------------------------------------- //
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('GET_IMAGE', getImage);
    yield takeEvery('GET_TAGS', getTags);
    yield takeEvery('POST_TAGS_TO_IMAGES', postTags);
 //   yield takeEvery('GET_CURRENT_TAGS', getCurrentTags);

}

const storeInstance = createStore(
    combineReducers({
        images,
        currentImage,
        tagsReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);


// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();