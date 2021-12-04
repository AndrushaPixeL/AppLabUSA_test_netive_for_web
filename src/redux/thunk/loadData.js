import { MyImmerActionCreator } from '../appReducer'

export const fetchData = () => {
  return (dispatch) => {
    dispatch(MyImmerActionCreator.setIsLoading(true))
    fetch('https://test-api-app-for-react.herokuapp.com/api/v1/news')
      .then((response) => response.json())
      .then((data) => {
        dispatch(MyImmerActionCreator.setData(data))
        dispatch(MyImmerActionCreator.setIsLoading(false))
      })
  }
}
