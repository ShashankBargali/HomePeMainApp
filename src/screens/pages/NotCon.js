import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../assets/styles'
import BtnSect from '../components/Balance/Templates/BtnSect'

const NotCon = ({navigation}) => {
  const handleClick = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={[styles.ctrStyles.fullContainer, styles.ctrStyles.faCenter, styles.ctrStyles.fjCenter]}>
      <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontFiraCode, styles.txtStyles.txtCenter]}>Oops! Process timeout ...!</Text>
      <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontNunito, styles.txtStyles.txtCenter]}> Server didn't responded. </Text>
      <Text style={[styles.txtStyles.head3, styles.txtStyles.fontNunito, styles.txtStyles.txtCenter]}> Looks like the mobile is not connected with internet or the internet is too slow! Please try again later </Text>
      <BtnSect onPress={handleClick}/>
    </View>
  )
}

export default NotCon