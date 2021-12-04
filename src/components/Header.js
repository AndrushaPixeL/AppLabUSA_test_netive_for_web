import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> TEST</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgb(124, 144, 255)',
    display: 'flex',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontWeight: 'normal',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'start',
  },
})

export default Header
