import { Text, View } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React, {useContext} from 'react'
import UserFtr from '../Atoms/UserFtr'
import UserFtrLg from '../Atoms/UserFtrLg'
import pay from '../../../../assets/Images/pay.png'
import passbook from '../../../../assets/Images/passbook.png'
import money from '../../../../assets/Images/Balance.png'
import scann from '../../../../assets/Images/scan.png'
import styles from '../../../../assets/styles'
import AppContext from '../../../../context/AppContext'

const TopSect = () => {
  const navigation = useNavigation();
  const context = useContext(AppContext)

  const passbookF = () => {
    navigation.navigate('Passbook')
  }

  const openScanner = () => {
    navigation.navigate('QrScanner')
  }
  
  const checkBal = () => {
    context.setUpiId('');
    context.setAmount(0);
    navigation.navigate('UpiPin', {
      next: 'Balance'
    })
  }

  const send = ()=> {
    navigation.navigate('Send')
  }
  return (
    <View style={styles.ctrStyles.sectContainer}>
      <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontUbuntu]}>UPI & Payments</Text>
      <View style={styles.topsStyles.ftrContainer}>
        <UserFtr img={pay} option="Send Money" onPress={send}/>
        <UserFtr img={passbook} option="Passbook" onPress={passbookF}/>
        <UserFtr img={money} option="Check balance" onPress={checkBal} />
      </View>
      <View style={styles.topsStyles.scanContainer}>
        <UserFtrLg img={scann} option="Scan & Pay" onPress={openScanner}/>
      </View>
    </View>
  )
}

export default TopSect
