import { ScrollView } from 'react-native'
import React from 'react'
import TopSect from '../components/UserHome/Templates/TopSect'
import MiddleSect from '../components/UserHome/Templates/MiddleSect'
import BtmSect from '../components/UserHome/Templates/BtmSect'
const UserHome = () => {
  return (
    <ScrollView>
      <TopSect/>
      <MiddleSect/>
      <BtmSect/>
    </ScrollView>
  )
}

export default UserHome