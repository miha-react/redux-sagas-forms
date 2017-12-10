import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {helloSaga, sagaMiddleware} from '../sagas/hello';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(helloSaga);
export default store;
