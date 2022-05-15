import { Text, View } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import UserBank from '../Atoms/UserBank'
import styles from '../../../../assets/styles'
import AppContext from '../../../../context/AppContext'
import ContLoader from '../../General/ContLoader'

const MiddleSect = () => {
  const context = useContext(AppContext)
  const [bankDetails, setBankDetails] = useState({ name: '', acno: '' })
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true);
    getUserBankDetails();
  }, [])

  const getUserBankDetails = async () => {
    const data = await context.fetchBankDetails();
    setBankDetails({name: data.response.name, acno:data.response.acno})
    setLoader(false)
  }
  return (
    <View style={[styles.ctrStyles.sectContainer, styles.ctrStyles.faCenter, styles.ctrStyles.fjCenter]}>
      <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontUbuntu]}>Your Linked Bank(s)</Text>
      <View style={styles.ctrStyles.flexCol}>
        {loader ? <ContLoader /> : <UserBank bank={bankDetails.name} acno={bankDetails.acno} />}
      </View>
    </View>
  )
}

export default MiddleSect