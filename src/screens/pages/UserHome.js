import { ScrollView } from 'react-native'
import React, { useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TopSect from '../components/UserHome/Templates/TopSect'
import MiddleSect from '../components/UserHome/Templates/MiddleSect'
import BtmSect from '../components/UserHome/Templates/BtmSect'
import AppContext from '../../context/AppContext'
import LogOutSect from '../components/UserHome/Templates/LogOutSect'
const UserHome = ({ navigation }) => {
  const context = useContext(AppContext);

  useEffect(() => {
    checkLogged();
  }, [])


  const checkLogged = async () => {
    const token = await AsyncStorage.getItem('authToken')
    if (!token) {
      navigation.navigate('Login')
    }
    else{
      await context.setAuthToken(token)
      return;
    }
  }

  return (
    <ScrollView>
      <TopSect />
      <MiddleSect />
      <BtmSect />
      <LogOutSect/>
    </ScrollView>
  )
}

export default UserHome