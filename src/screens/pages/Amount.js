import { View } from 'react-native'
import React, {useContext} from 'react'
import InpSect from '../components/Amount/Templates/InpSect'
import InpBtn from '../components/Amount/Templates/InpBtn'
import styles from '../../assets/styles'
import HeadingSect from '../components/Amount/Templates/HeadingSect'
import AppContext from '../../context/AppContext'

const Amount = ({ navigation }) => {
    const context = useContext(AppContext)
    const handleOnPress = () => {
        navigation.navigate('UpiPin', {
            next: 'Success'
        })
    }
    return (
        <View style={[styles.ctrStyles.fullContainer, styles.ctrStyles.faCenter, styles.ctrStyles.spaceBetween, styles.ctrStyles.pyContainer]}>
            <HeadingSect upiId={context.upiId}/>
            <InpSect />
            <InpBtn handleOnPress={handleOnPress} msg={'Proceed to Pay'} amt={context.amount} />
        </View>
    )
}

export default Amount