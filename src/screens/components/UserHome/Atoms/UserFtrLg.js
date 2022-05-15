import { View, TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'

const UserFtrLg = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.ftrStyles.iconCtrLg} onPress={props.onPress}>
                <Image source={props.img} style={styles.ftrStyles.iconImg} />
            </TouchableOpacity>
            <Text style={styles.ftrStyles.ftrOptnLg}>{props.option}</Text>
        </View>
    )
}

export default UserFtrLg