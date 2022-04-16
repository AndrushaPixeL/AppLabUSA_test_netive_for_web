import React from 'react'
import Header from './components/Header'
import TodoCard from './components/TodoCard'
import TodoItemForm from './components/TodoItemForm'
import { useAppPresenter } from './redux/presenters/AppPresenter'
import CircularProgress from '@mui/material/CircularProgress'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components/native'

const App = () => {
  const { values, eventHandlers } = useAppPresenter()
  return (
    <AppWrapper>
      <Header />
      <AppContainer>
        <TodoItemForm addItem={eventHandlers.handleAddItem} />
        <ToastContainer />
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
      </AppContainer>
    </AppWrapper>
  )
}
export default App

const AppWrapper = styled.View`
  background-color: rgba(181, 192, 255, 0.15);
  width: 100%;
  min-height: 100vh;
  height: 100%;
  border-color: red;
`
const AppContainer = styled.View`
  display: flex;
  align-self: center;
  width: 100%;
  max-width: 700;
  padding: 16px;
`
