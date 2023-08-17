import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { requestMovie } from '../redux/reducers/movieReducer';

const HomePage = () => {

    const dispatch =useDispatch();

    useEffect(() => {
      
      dispatch(requestMovie())
     
    }, [])
    
    

  return (
    <div>homePage</div>
  )
}

export default HomePage