import { View, Image, Text } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'
const HPFtrs = (props) => {
    const { img, txt } = props
  return (
    <View style={styles.ctrStyles.myContainer}>
        <Image source={img} style={styles.btmsStyles.ftrImg}/>
        <Text style={[styles.txtStyles.fontFiraCode, styles.txtStyles.head4, styles.txtStyles.txtCenter]}>{txt}</Text>
    </View>
  )
}

export default HPFtrs