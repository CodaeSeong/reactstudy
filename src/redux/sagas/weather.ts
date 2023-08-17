
import { call, fork, put, all, takeLatest } from "redux-saga/effects"
import { Iweather, requestWeather, requestWeatherError, requestWeatherSuccess } from "../reducers/weatherReducer";
import { getCurrentLocation } from "../../api/weatherAPI";




function* handleWeather() {
    try {
        const { weatherData } = yield call(getCurrentLocation);
        yield put(requestWeatherSuccess({weatherData}));

    } catch (error) {
        yield put(requestWeatherError())
    }
}

function* watchGetWeather() {
    yield takeLatest(requestWeather, handleWeather);
}

export default function* weatherSaga(){
    yield all([fork(watchGetWeather)]);
};
