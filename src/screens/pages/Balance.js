import { View, Text } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
import BalSect from '../components/Balance/Templates/TopSect'
import NumSect from '../components/Balance/Templates/NumSect'
import styles from '../../assets/styles'
import BtnSect from '../components/Balance/Templates/BtnSect'
import AppContext from '../../context/AppContext'
import Loader from '../components/General/Loader'

const Balance = ({ navigation }) => {
  const [balance, setBalance] = useState(0)
  const [loader, setLoader] = useState(false)
  const context = useContext(AppContext)


  useEffect(() => {
    setLoader(true);
    getBalance();
  }, [])

  async function getBalance() {
    const data = await context.fetchBalance();
    if (data.success === true) {
      setBalance(data.response)
    }
    setLoader(false)
  }
  const handleClick = () => {
    navigation.navigate('Home')
  }
  return (
    <>
      {loader ? <Loader /> :
        <View style={[styles.ctrStyles.faCenter, styles.ctrStyles.spaceBetween, styles.ctrStyles.fullContainer, styles.ctrStyles.pyContainer]}>
          <BalSect />
          {balance ?
            <NumSect balance={balance} /> :
            <Text style={[styles.txtStyles.mainHead, styles.txtStyles.themeTxt, styles.txtStyles.fontFiraCode]}>There was an internal server error while fetching your balance.. :(.. Our Best Minds are working on it! ^_^</Text>
          }
          <BtnSect onPress={handleClick} />
        </View>
      }
    </>
  )
}

export default Balance