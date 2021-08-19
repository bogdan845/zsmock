import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware, {SagaMiddlewareOptions} from "redux-saga";
import * as sagas from "./rootSaga";
import {rootReducer} from "./rootReducer";

const initialState = {};
const sagaMiddleware = createSagaMiddleware(sagas as SagaMiddlewareOptions<Generator<any>>);
const middleware = [sagaMiddleware];

export const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(
        ...middleware
    ))
);

export const {dispatch} = store;

for (let saga in sagas) {
    // @ts-ignore
    sagaMiddleware.run(sagas[saga])
}