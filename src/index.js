import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
// Import saga middleware
import createSagaMiddleware from  'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import getImage from './modules/redux/sagas/getImage.saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import currentImage from './modules/redux/reducers/currentImage.reducer';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('GET_IMAGE', getImage);
}

// Used to store images returned from the server
const images = (state = [], action) => {
    console.log('Caught it!');
    switch (action.type) {
        case 'SET_IMAGE':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the images tags (e.g. 'Inspirational', 'Calming', 'Energy', etc.)
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}
const storeInstance = createStore(
    combineReducers({
        images,
        currentImage
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);


// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();