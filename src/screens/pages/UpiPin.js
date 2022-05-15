import { View, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import TopBar from '../components/UpiPin/Templates/TopBar'
import MidBar from '../components/UpiPin/Templates/MidBar'
import styles from '../../assets/styles'
import InpBar from '../components/UpiPin/Templates/InpBar'
import UpiBtn from '../components/UpiPin/Templates/UpiBtn'
import AppContext from '../../context/AppContext'
import Loader from '../components/General/Loader'


const UpiPin = ({ route, navigation }) => {
  
  const context = useContext(AppContext)
  const [loader, setLoader] = useState(false)
  const [pin, setPin] = useState('')

  const handleBtn = async () => {
    setLoader(true)
    const data = await context.checkPin(context.authToken);
    const userPin = data.response;
    if(data.response === 'Server_error'){
      navigation.navigate('Error')
      return;
    }
    if (userPin.toString() === pin) {
      if (route.params.next === 'Success') {
        navigation.navigate('Success')
      }
      else if (route.params.next === 'Balance') {
        navigation.navigate('Balance')
      }
    }
    else {
      Alert.alert("Enter correct pin", "Please enter correct UPI Pin")
      setLoader(false)
      return;
    }
    setLoader(false)
  }
  const checkPin = (rpin) => {
    setPin(rpin)
  }

  const { upiId, amount } = context;
  return (
    <>
      {loader ? <Loader /> :
        <View style={[styles.ctrStyles.fullContainer, styles.ctrStyles.faCenter, styles.ctrStyles.fjCenter]}>
          <TopBar />
          <MidBar info={{ upiId, amount }} />
          <InpBar pin={pin} checkPin={checkPin} />
          <UpiBtn handleBtn={handleBtn} />
        </View>
      }
    </>
  )
}

export default UpiPin