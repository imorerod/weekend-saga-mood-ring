import { put } from 'redux-saga/effects';
import axios from 'axios';

function* postTags(action) {
// imageId coming from images-tags.router
    try {
      yield axios.post('/add', action.payload);
      yield put({
        type: 'GET_CURRENT_TAGS',
        payload: action.payload.imageId
      });
    } catch (err) {
      console.log('error HELP:', err);
    }
  }
  
export default postTags;