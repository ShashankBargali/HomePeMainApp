import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import styles from '../../../../assets/styles'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppContext from '../../../../context/AppContext'

const LogOutSect = () => {
    const navigation = useNavigation();
    const context = useContext(AppContext);

    const LogOut = async () => {
        await AsyncStorage.clear();
        context.setAuthToken('')
        navigation.navigate('Login')
    }
    return (
        <View style={styles.ctrStyles.sectContainer}>
            <TouchableOpacity style={styles.btnStyles.themeBtn} onPress={LogOut} >
                <Text style={[styles.txtStyles.head3, styles.txtStyles.txtCenter, styles.txtStyles.whiteTxt]}>LogOut</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LogOutSect