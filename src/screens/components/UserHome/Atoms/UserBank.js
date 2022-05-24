import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'

const UserBank = (props) => {
    const { bank, acno } = props;
    const acnoString = acno.toString();
    const acnoSliced = acnoString.slice(4, 6)
    const handlePress = () => {
        Alert.alert('Not Available', "This feature is closed in the current version of app and you can use in the next update")
    }
    return (
        <View style={styles.midsStyles.card}>
            <View>
                <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontFiraCode, styles.txtStyles.themeTxt, styles.txtStyles.fontUpCase]}>{bank}</Text>
            </View>
            <View style={[styles.ctrStyles.flexRow, styles.ctrStyles.faCenter, styles.ctrStyles.spaceBetween, styles.ctrStyles.container]}>
                <Text style={styles.txtStyles.head3}>* * * * {acnoSliced}</Text>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={[styles.txtStyles.head2, styles.txtStyles.linkTxt]}>Change Upi Pin</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserBank