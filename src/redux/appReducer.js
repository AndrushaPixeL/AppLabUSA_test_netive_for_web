import { createActionCreators, ImmerReducer } from 'immer-reducer'

export const myImmerReducerInitialState = {
  items: [],
  isLoading: false,
}

class MyImmerReducer extends ImmerReducer {
  setData(data) {
    this.draftState.items = data.data.articles
  }

  setIsLoading(isLoading) {
    this.draftState.isLoading = isLoading
  }

  addItem(item) {
    this.draftState.items.push(item)
  }

  deleteItem(id) {
    this.draftState.items = this.draftState.items.filter((el) => {
      return el.id !== id
    })
  }
}

export const MyImmerActionCreator = createActionCreators(MyImmerReducer)

export default MyImmerReducer
