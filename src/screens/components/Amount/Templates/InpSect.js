import { View, Text } from 'react-native'
import React from 'react'
import AmntInp from '../Atoms/AmntInp'
import styles from '../../../../assets/styles'

const InpSect = () => {
    return (
        <View style={[styles.ctrStyles.fjCenter, styles.ctrStyles.faCenter]}>
            <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontUbuntu, styles.ctrStyles.mrContainer]}>UC</Text>
            <AmntInp />
        </View>
    )
}

export default InpSect