import { Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import UserBank from '../Atoms/UserBank'
import styles from '../../../../assets/styles'
import AppContext from '../../../../context/AppContext'
import ContLoader from '../../General/ContLoader'

const MiddleSect = () => {
  const context = useContext(AppContext)
  const [bankDetails, setBankDetails] = useState({ name: '', acno: '' })
  const [loader, setLoader] = useState(false)
  const [bnk, setBnk] = useState(false)
  useEffect(() => {
    return (() => {
      setBnk(false)
    })
  }, [])

  useEffect(() => {
    if (bnk === true) {
      setLoader(true)
      getUserBankDetails();
    }
  }, [bnk])


  const getUserBankDetails = async () => {
    const data = await context.fetchBankDetails();
    setBankDetails({ name: data.response.name, acno: data.response.acno })
    console.log(data)
    setLoader(false)
    setTimeout(() => {
      setBnk(false)
    }, 60000);
  }
  return (
    <View style={[styles.ctrStyles.sectContainer, styles.ctrStyles.faCenter, styles.ctrStyles.fjCenter]}>
      <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontUbuntu]}>Your Linked Bank(s)</Text>
      <View style={styles.ctrStyles.flexCol}>
        {bnk ?
          <>
            {loader ? <ContLoader /> : <UserBank bank={bankDetails.name} acno={bankDetails.acno} />}
          </> : <TouchableOpacity style={[styles.btnStyles.themeBtn, styles.ctrStyles.myContainer]} onPress={() => { setBnk(true) }}>
            <Text style={[styles.txtStyles.head3, styles.txtStyles.fontUbuntu, styles.txtStyles.whiteTxt]}>Check all Linked Banks</Text>
          </TouchableOpacity>
        }
      </View>
    </View>
  )
}

export default MiddleSect