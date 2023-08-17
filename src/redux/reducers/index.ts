import {combineReducers} from "redux"
import movieReducer from "./movieReducer"

export const rootReducer = combineReducers({
    movie:movieReducer
})


export type rootState = ReturnType<typeof rootReducer>