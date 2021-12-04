import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './components/Header'
import TodoCard from './components/TodoCard'
import TodoItemForm from './components/TodoItemForm'
import { useAppPresenter } from './redux/presenters/AppPresenter'
import CircularProgress from '@mui/material/CircularProgress'

const App = () => {
  const { values, eventHandlers } = useAppPresenter()
  return (
    <View style={styles.app}>
      <Header />
      <View style={styles.appContainer}>
        <TodoItemForm addItem={eventHandlers.handleAddItem} />
        {values.isLoading ? (
          <CircularProgress />
        ) : (
          values.items.map((el, index) => {
            return (
              <TodoCard
                key={el.id}
                index={index}
                title={el.title}
                description={el.description}
                id={el.id}
                handleDelete={eventHandlers.handleDeleteItem}
              />
            )
          })
        )}
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
    minHeight: '100vh',
    height: '100%',
  },
  appContainer: {
    display: 'flex',
    alignSelf: 'center',
    width: '100%',
    maxWidth: 700,
    padding: '16px',
  },
})
