import { View, Text, TextInput } from 'react-native'
import React, { useContext } from 'react'
import styles from '../../assets/styles'
import InpBtn from '../components/Amount/Templates/InpBtn'
import AppContext from '../../context/AppContext'

const Send = ({ navigation }) => {
    const context = useContext(AppContext)
    const sendM = () => {
        navigation.navigate('Input')
    }
    return (
        <View style={[styles.ctrStyles.fullContainer, styles.ctrStyles.container, styles.ctrStyles.spaceBetween, styles.ctrStyles.pyContainer]}>
            <View>
                <Text style={[styles.txtStyles.mainHead, styles.txtStyles.txtCenter, styles.txtStyles.fontRoboto]}>Enter the UPI to Send</Text>
                <Text style={[styles.txtStyles.head4, styles.txtStyles.txtCenter, styles.txtStyles.fontFiraCode, styles.txtStyles.themeTxt]}>UPI Id is in the format of acno@bankname</Text>
                <View style={[styles.ctrStyles.container, styles.ctrStyles.faCenter, styles.ctrStyles.fjCenter, { marginTop: 20 }]}>
                    <TextInput onChangeText={key => context.setUpiId(key)} placeholder='To: abcd@xyz' style={[styles.inpStyles.upiInp, styles.txtStyles.head4, styles.txtStyles.txtCenter]} />
                </View>
            </View>
            <InpBtn handleOnPress={sendM} msg={'Proceed to send '} amt={context.upiId} />
        </View>
    )
}

export default Send