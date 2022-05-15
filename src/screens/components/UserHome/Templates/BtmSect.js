import { View, Text, Alert } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'
import UserFtrLg from '../Atoms/UserFtrLg'
import piggy from '../../../../assets/Images/piggyBank.png'
import HPFtrs from '../Atoms/HPFtrs'
import bg1 from '../../../../assets/Images/bgImg.png'
import bg2 from '../../../../assets/Images/bgImg5.png'
import bg3 from '../../../../assets/Images/bgImg6.png'
import bg4 from '../../../../assets/Images/bgImg7.png'

const BtmSect = () => {
    const onPress = () => {
        Alert.alert('Not Available', "This feature is closed in the current version of app and you can use in the next update")
    }
    return (
        <View style={styles.ctrStyles.sectContainer}>
            <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontUbuntu]}>HomePe PostPaid</Text>
            <View style={styles.topsStyles.scanContainer}>
                <UserFtrLg img={piggy} option="Create Account" onPress={onPress} />
            </View>
            <HPFtrs img={bg1} txt="Make payments easily & fastly and use your precious time" />
            <HPFtrs img={bg2} txt="The Using UPI from your mobile at one go" />
            <HPFtrs img={bg3} txt="The first UPI bank and first mobile banking app" />
            <HPFtrs img={bg4} txt="Get Extra discounts on goods by paying from this bank" />
        </View>
    )
}

export default BtmSect