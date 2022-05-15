import { View, Text } from 'react-native'
import React from 'react'
import QrGenerator from '../Atoms/QrGenerator'
import styles from '../../../../assets/styles'

const QrCodeSect = () => {
  return (
    <View>
        <Text style={[styles.txtStyles.mainHead, styles.txtStyles.themeTxt, styles.txtStyles.fontUbuntu]}>YOUR QrCode</Text>
        <QrGenerator/>
        <Text style={[styles.txtStyles.desc, styles.txtStyles.txtCenter, styles.txtStyles.fontFiraCode]}>Anyone can scan this qr code to send money to you. Or can send directly through your upi id</Text>
    </View>
  )
}

export default QrCodeSect