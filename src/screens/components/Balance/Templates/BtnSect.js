import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'

const BtnSect = (props) => {
  return (
    <View style={styles.ctrStyles.container}>
        <TouchableOpacity style={[styles.btnStyles.themeBtn]} onPress={props.onPress}>
            <Text style={[styles.txtStyles.fontUbuntu, styles.txtStyles.mainHead, styles.txtStyles.whiteTxt, styles.txtStyles.txtCenter]}>Ok! Go Back</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BtnSect