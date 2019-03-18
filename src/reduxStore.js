import { createStore } from 'redux';
import postsReducer from './reducers/ToDo';

const intialState = {
  data: [{text: 'alaa Ebrahem', completed: false,deleted: false,id:1 }
  , {text: 'ayaEbrahem', completed: false,deleted: false,id:2 },
  {text: 'sara Ebrahem', completed: false,deleted: false,id:3 }],
 
};

const store = createStore(postsReducer, intialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
