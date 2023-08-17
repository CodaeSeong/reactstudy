import api from "./api"



export const GET_MOVIES_DATA = async (string:string) => {
    const popularMovieApi =  api.get(`/popular?api_key=${process.env.REACT_APP_API_KEY }&language=ko-KR&page1`)

    const topRatedApi =  api.get(`/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page1`)

    const upComingApi =  api.get(`/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page1`)

    let [popularMovies,topRatedMovies,upComingMovies] = await Promise.all([popularMovieApi,topRatedApi,upComingApi])

    console.log("saga 파라메터 테스트",string)

    return {popularMovies,topRatedMovies,upComingMovies}
}
