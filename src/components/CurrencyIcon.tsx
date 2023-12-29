import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyIconProp = PropsWithChildren<{
    name: string,
    flag: string
}>

const CurrencyIcon = (props: CurrencyIconProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'space-between',
    backgroundColor: '#EFE7BC',
    paddingHorizontal: 25,
    borderRadius: 20,
    paddingVertical: 20
  },

  flag: {
    fontSize: 20
  },

  name: {
    fontSize: 20,
    color: '#111111'
  }

})

export default CurrencyIcon
