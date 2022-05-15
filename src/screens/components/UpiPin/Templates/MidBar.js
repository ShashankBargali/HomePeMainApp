import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import styles from '../../../../assets/styles'

const MidBar = (props) => {
    const {amount , upiId} = props.info
    return (
        <View style={styles.pinsStyles.midBar}>
            <Text style={{ color: 'white' }}>UC {amount}</Text>
            <Text style={{ color: 'white', width: '50%', height: 20, overflow: 'hidden' }}>{upiId}</Text>
        </View>
    )
}

MidBar.defaultProps = {
    upiId: 'none',
    amount: 0.00
}
export default MidBar