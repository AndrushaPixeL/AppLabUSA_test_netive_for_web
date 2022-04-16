import React, { useState } from 'react'
import { View } from 'react-native'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import DeleteIcon from '@material-ui/icons/Delete'
import { Card } from '@mui/material'
import styled from 'styled-components'

const TodoCard = (props) => {
  const [checkbox, setCheckbox] = useState(false)
  let done = {}
  if (checkbox) {
    done = {
      backgroundColor: 'rgb(234, 237, 255)',
      textDecoration: 'line-through',
    }
  } else done = {}
  return (
    <HeaderWrapper>
      <MyCard sx={done}>
        <CardHeader
          action={
            <IconButton
              aria-label="delete"
              onClick={() => props.handleDelete(props.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
          title={
            <View>
              <Typography variant="body1" component="label">
                {props.index + 1}
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox}
                    onChange={() => setCheckbox(!checkbox)}
                    name={'Check'}
                    color="primary"
                  />
                }
                label={props.title}
              />
            </View>
          }
        />
        <CardContent>
          <Typography variant="body1" noWrap={true} component="h1">
            {props.description}
          </Typography>
        </CardContent>
      </MyCard>
    </HeaderWrapper>
  )
}
export default TodoCard

const HeaderWrapper = styled(View)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  width: '100%',
  backgroundColor: 'red',
})
const MyCard = styled(Card)({
  width: '100%',
  color: '#888888',
  margin: '8px 0',
})
