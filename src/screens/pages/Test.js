import { View, Text } from 'react-native'
import React from 'react'

const Test = ({ route }) => {
  return (
    <View>
        <Text>{route.params.pin}</Text>
    </View>
  )
}

export default Test