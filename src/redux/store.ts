import {configureStore} from "@reduxjs/toolkit"
import { rootReducer } from "./reducers"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas"



const sagaMiddleware = createSagaMiddleware()

export const store = () => {

    const store = configureStore({
        reducer:rootReducer,
        devTools:true,
        middleware:[sagaMiddleware]
    })

    sagaMiddleware.run(rootSaga)

    return store;

}