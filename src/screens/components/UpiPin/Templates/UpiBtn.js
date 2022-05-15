import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'

const UpiBtn = (props) => {
    return (
        <View style={styles.ctrStyles.container}>
            <TouchableOpacity style={styles.btnStyles.themeBtn} onPress={props.handleBtn}>
                <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontFiraCode,styles.txtStyles.whiteTxt, styles.txtStyles.txtCenter]}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UpiBtn