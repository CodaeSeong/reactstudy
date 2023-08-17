import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { requestMovie } from '../redux/reducers/movieReducer';
import { requestWeather } from '../redux/reducers/weatherReducer';

const HomePage = () => {

    const dispatch =useDispatch();

    useEffect(() => {
      
      dispatch(requestWeather())
     
    }, [])
    
    

  return (
    <div>homePage</div>
  )
}

export default HomePage