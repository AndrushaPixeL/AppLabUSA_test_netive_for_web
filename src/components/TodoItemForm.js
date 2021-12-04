import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const TodoItemForm = () => {
  const { control, watch } = useForm()

  return (
    <form>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <MyTextField {...field} label="TODO" fullWidth={true} />
        )}
      />
      <Controller
        name="details"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <MyTextField
            {...field}
            label="Details"
            fullWidth={true}
            multiline={true}
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
