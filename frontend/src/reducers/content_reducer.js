import { combineReducers } from "redux";
import videosReducer from './videos_reducer';
import photosReducer from './photos_reducer';
import quotesReducer from './quotes_reducer';
import randomContent from './random_content_reducer';

const contentReducer = combineReducers({
    videos: videosReducer,
    photos: photosReducer,
    quotes: quotesReducer,
    randomContent
})

export default contentReducer