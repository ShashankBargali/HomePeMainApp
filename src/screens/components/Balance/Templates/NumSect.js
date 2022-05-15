import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'

const NumSect = (props) => {
  return (
    <View style={[styles.ctrStyles.container, styles.ctrStyles.faCenter, styles.ctrStyles.fjCenter]}>
        <View style={styles.balsStyles.container}>
          <Text style={[styles.balsStyles.numTxt, styles.txtStyles.themeTxt, styles.txtStyles.fontUbuntu]}>{props.balance}</Text>
        </View>
    </View>
  )
}

export default NumSect