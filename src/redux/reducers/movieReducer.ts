import { createSlice, PayloadAction} from "@reduxjs/toolkit"



export interface Imovie {
    popularMovies:{},
    topRatedMovies:{},
    upComingMovies:{},
}


export interface ImovieState extends Imovie {
    popularMovies:{},
    topRatedMovies:{},
    upComingMovies:{},
    isLoading:boolean,
    isDone:boolean,
    error:any
}

const initialState:ImovieState = {
    popularMovies:{},
    topRatedMovies:{},
    upComingMovies:{},
    isLoading:false,
    isDone:false,
    error:null,
}


const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{

        requestMovie(state:ImovieState){
            state.isLoading=true;
        },

        requestMoviesSuccess(state:ImovieState,action:PayloadAction<Imovie>){
            state.isLoading=false;
            state.popularMovies=action.payload.popularMovies;
            state.topRatedMovies=action.payload.topRatedMovies;
            state.upComingMovies=action.payload.upComingMovies;
            state.isDone=true;
        },

        requestMoviesFailure(state:ImovieState) {
            state.error="영화 정보 조회 실패"
        }

    }
})

export const {requestMovie, requestMoviesSuccess, requestMoviesFailure} = movieSlice.actions

export default movieSlice.reducer