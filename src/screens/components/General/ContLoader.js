import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from '../../../assets/styles'

const ContLoader = () => {
    return (
        <View style={[styles.ctrStyles.fjCenter, styles.ctrStyles.faCenter]}>
            <ActivityIndicator size={100} color="#008068" />
        </View>
    )
}

export default ContLoader