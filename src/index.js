import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { StoreContext } from 'redux-react-hook'
import App from './App'
import { store } from './store'
import 'react-toastify/dist/ReactToastify.css'

const AppIndex = () => (
  <StoreContext.Provider value={store}>
    <Provider store={store}>
      <App />
    </Provider>
  </StoreContext.Provider>
)

AppRegistry.registerComponent('AppIndex', () => AppIndex)

AppRegistry.runApplication('AppIndex', {
  rootTag: document.getElementById('root'),
})
