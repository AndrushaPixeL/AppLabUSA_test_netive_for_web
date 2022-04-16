import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { toast } from 'react-toastify'

const defaultValues = {
  title: '',
  description: '',
}

const TodoItemForm = (props) => {
  const { handleSubmit, control, reset, watch } = useForm({
    defaultValues,
    reValidateMode: 'onChange',
    mode: 'onChange',
  })
  const errorNotification = (error) => {
    let message = ''
    switch (error.type) {
      case 'pattern':
        message = 'The title must begin with the letter (Aa-Zz)'
        break
      case 'maxLength':
        message = 'The maximum length of the title is 300 characters'
        break
      default:
        break
    }
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  const onSubmit = (data) => {
    const id = Date.now() + Math.random() * 100
    const nextData = {
      id,
      title: data.title,
      description: data.description,
    }
    props.addItem(nextData)
    reset(defaultValues)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        render={(props) => {
          !!props.fieldState.error && errorNotification(props.fieldState.error)
          return (
            <MyTextField
              error={!!props.fieldState.error}
              label="TODO"
              fullWidth={true}
              value={props.field.value}
              onChange={(e) => props.field.onChange(e.target.value)}
            />
          )
        }}
        rules={{ maxLength: 300, pattern: /^[A-Za-z]\w*$/ }}
      />
      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <MyTextField
            label="Details"
            fullWidth={true}
            multiline={true}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
      />
      <MyButton
        variant="contained"
        color="primary"
        type="submit"
        disabled={!watch('title')}
      >
        Add
      </MyButton>
    </form>
  )
}
export default TodoItemForm

const MyTextField = styled(TextField)({
  marginBottom: '24px',
})
const MyButton = styled(Button)({
  marginTop: '16px !important',
  marginBottom: '16px !important',
})
