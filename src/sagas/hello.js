import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

export function* helloSaga() {
  console.log('Hello Saga');
}


