import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './components/Header'
import TodoCard from './components/TodoCard'
import TodoItemForm from './components/TodoItemForm'

const App = () => {
  return (
    <View style={styles.app}>
      <Header />
      <View style={styles.appContainer}>
        <TodoItemForm />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </View>
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  app: {
    marginHorizontal: 'auto',
    backgroundColor: 'rgba(181, 192, 255, 0.15)',
    width: '100%',
    height: '100vh',
  },
  appContainer: {
    display: 'flex',
    alignSelf: 'center',
    width: '100%',
    maxWidth: 700,
  },
})
