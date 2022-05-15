import { View, Text } from 'react-native'
import React from 'react'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import styles from '../../../../assets/styles'

const InpBar = (props) => {
    return (
        <View>
            <Text style={[styles.txtStyles.fontFira, styles.ctrStyles.my10]}>Enter UPI Pin</Text>
            <SmoothPinCodeInput
                mask={<View style={styles.pinsStyles.inpMusk}></View>}
                maskDelay={200}
                password={true}
                placeholder={<View style={styles.pinsStyles.inpPlaceHolder}></View>}
                cellStyle={null}
                cellStyleFocused={null}
                value={props.pin}
                onTextChange={pin => props.checkPin(pin)}
                keyboardType='decimal-pad'
            />
        </View>
    )
}

export default InpBar