import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from '../../../assets/styles'

const Loader = () => {
    return (
        <View style={[styles.ctrStyles.fjCenter, styles.ctrStyles.fullContainer]}>
            <ActivityIndicator size={100} color="#008068" />
        </View>
    )
}

export default Loader