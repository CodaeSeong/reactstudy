import { PayloadAction, createSlice } from "@reduxjs/toolkit"



export interface Iweather{
    weatherData: {}
};


export interface IweatherState extends Iweather{
    weatherData: {},
    weatherLoading: boolean,
    weatherSuccess: boolean,
    weatherError: any
}


const initialState : IweatherState = {
    weatherData: {},
    weatherLoading: false,
    weatherSuccess: false,
    weatherError: null
}


const weatherSlice =  createSlice({
    name: "weather",
    initialState,
    reducers: {
        requestWeather(state:IweatherState){
            state.weatherLoading=true;
        },
        requestWeatherSuccess(state:IweatherState, action:PayloadAction<Iweather>){
            state.weatherLoading=false;
            state.weatherData=action.payload.weatherData;
            state.weatherSuccess=true;
        },
        requestWeatherError(state:IweatherState){
            state.weatherLoading=false;
            state.weatherError="에러남";
        }
    }
})


export default weatherSlice.reducer;
export const {requestWeather, requestWeatherSuccess, requestWeatherError} = weatherSlice.actions;