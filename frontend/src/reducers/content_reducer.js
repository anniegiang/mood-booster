import { combineReducers } from "redux";
import videosReducer from './videos_reducer';
import photosReducer from './photos_reducer';
import quotesReducer from './quotes_reducer';

const contentReducer = combineReducers({
    videos: videosReducer,
    photos: photosReducer,
    quotes: quotesReducer
})

export default contentReducer