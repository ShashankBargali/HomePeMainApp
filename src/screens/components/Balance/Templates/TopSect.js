import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'

const BalSect = () => {
  return (
    <View>
        <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontFiraCode, styles.txtStyles.txtCenter]}>Your PayHome Balance: </Text>
    </View>
  )
}

export default BalSect