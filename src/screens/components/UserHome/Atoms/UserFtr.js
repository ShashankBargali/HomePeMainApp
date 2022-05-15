import { View, TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'

const UserFtr = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.ftrStyles.iconCtr} onPress={props.onPress}>
        <Image source={props.img} style={styles.ftrStyles.iconImg} />
      </TouchableOpacity>
      <Text style={styles.ftrStyles.ftrOptn}>{props.option}</Text>
    </View>
  )
}

export default UserFtr