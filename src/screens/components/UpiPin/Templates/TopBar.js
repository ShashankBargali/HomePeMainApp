import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'

const TopBar = () => {
  return (
    <View style={styles.pinsStyles.topBar}>
      <View style={styles.ctrStyles.flexRow}>
        <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontRoboto, styles.txtStyles.colorPay]}>Pay</Text>
        <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontUbuntu, styles.txtStyles.colorHome]}>Home</Text>
      </View>
      <Image source={require('../../../../assets/Images/upi.png')} style={{ width: 60, height: 60 }}></Image>
    </View>
  )
}

export default TopBar