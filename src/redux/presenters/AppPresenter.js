import { useEffect, useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useMappedState } from 'redux-react-hook'
import { MyImmerActionCreator } from '../appReducer'
import { fetchData } from '../thunk/loadData'

function useInitialization() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
}
function useState() {
  const mapState = useCallback(
    (state) => ({
      items: state.items,
      isLoading: state.isLoading,
    }),
    []
  )
  return useMappedState(mapState)
}
function useEventHandlers() {
  const dispatch = useDispatch()
  const eventHandlers = useMemo(
    () => ({
      handleAddItem: (newItem) => {
        dispatch(MyImmerActionCreator.addItem(newItem))
      },
      handleDeleteItem: (id) => {
        dispatch(MyImmerActionCreator.deleteItem(id))
      },
    }),
    []
  )
  return eventHandlers
}
export function useAppPresenter() {
  useInitialization()
  const values = useState()
  const eventHandlers = useEventHandlers()

  return {
    values,
    eventHandlers,
  }
}
