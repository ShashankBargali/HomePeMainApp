import { TextInput } from 'react-native'
import React, {useContext} from 'react'
import styles from '../../../../assets/styles'
import AppContext from '../../../../context/AppContext'

const AmntInp = () => {
    const context = useContext(AppContext)
    const {setAmount} = context
    return (
        <TextInput placeholder='0.00' style={[styles.amtStyles.inpContainer, styles.inpStyles.amntInp, styles.txtStyles.mainHead, styles.txtStyles.fontFiraCode, styles.txtStyles.txtCenter]} keyboardType={'decimal-pad'} onChangeText={amt=>setAmount(amt)}/>
    )
}

export default AmntInp