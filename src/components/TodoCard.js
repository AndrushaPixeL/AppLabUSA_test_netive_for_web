import React from 'react'
import { StyleSheet, View } from 'react-native'
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
  return (
    <View style={styles.cardWrapper}>
      <MyCard>
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
            <View style={styles.header}>
              <Typography variant="body1" component="label">
                {props.index + 1}
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={false}
                    onChange={console.log('check')}
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
    </View>
  )
}
export default TodoCard

const styles = StyleSheet.create({
  cardWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
})
const MyCard = styled(Card)({
  width: '100%',
  // textDecoration: 'line-through',
  color: '#888888',
  margin: '8px 0',
})
