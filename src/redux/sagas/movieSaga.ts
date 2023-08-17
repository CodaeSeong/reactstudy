import {call,fork,put,all,takeLatest} from "redux-saga/effects"
import { Imovie, requestMovie, requestMoviesFailure, requestMoviesSuccess } from "../reducers/movieReducer"
import { GET_MOVIES_DATA } from "../../api/moviesApi"

function* handleGetMovies() {
    try {
        
        const {popularMovies, topRatedMovies, upComingMovies}:Imovie = yield call(GET_MOVIES_DATA,"파라메터")
        yield put(requestMoviesSuccess({popularMovies, topRatedMovies, upComingMovies}))

    } catch (error) {

        yield put(requestMoviesFailure())
    }
}

function* watchGetMovies() {
    yield takeLatest(requestMovie,handleGetMovies)
}

export default function* movieSaga() {
    yield all([fork(watchGetMovies)])
}