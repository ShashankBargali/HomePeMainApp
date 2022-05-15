import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'

const HeadingSect = (props) => {
  return (
    <View style={[styles.ctrStyles.flexRow, styles.ctrStyles.container, styles.ctrStyles.faCenter, styles.ctrStyles.fjCenter]}>
      <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontRoboto]}>To: </Text><Text>     </Text>
      <Text style={[styles.txtStyles.head2, styles.txtStyles.fontFiraCode]}>{props.upiId ? props.upiId : 'noOne'}</Text>
    </View>
  )
}

export default HeadingSect