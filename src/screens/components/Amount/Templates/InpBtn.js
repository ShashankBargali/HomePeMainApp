import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'

const InpBtn = (props) => {
  return (
    <View>
        <TouchableOpacity style={styles.btnStyles.themeBtn} onPress={props.handleOnPress}>
          <Text style={[styles.txtStyles.head2,styles.txtStyles.txtCenter, styles.txtStyles.fontFiraCode,styles.txtStyles.whiteTxt]}>{props.msg} {props.amt}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default InpBtn