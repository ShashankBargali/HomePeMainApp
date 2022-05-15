import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'
import Card from '../Atoms/Card'
import AppContext from '../../../../context/AppContext'
import Loader from '../../General/Loader'

const StmtsSect = (props) => {
    const { trnxs } = props
    return (
        <View style={[styles.ctrStyles.sectContainer]}>
            <View style={styles.ctrStyles.myContainer}>
                <Text style={[styles.txtStyles.mainHead, styles.txtStyles.txtCenter]}>Recent Transactions</Text>
            </View>
            {trnxs.length === 0 ?
                <>
                    <Text style={[styles.txtStyles.head4, styles.txtStyles.fontUbuntu]}>No transactions yet :-{"("}</Text>
                    <Text style={[styles.txtStyles.desc, styles.txtStyles.fontNunito]}>Send money to your friend by upi or Scan and Pay at the shop to display</Text>
                </>
                :
                <>
                    {trnxs.map(ele => {
                        const { action, upiId } = props.urlParser(ele.action)
                        return (
                            <Card key={ele._id} amount={ele.amount} action={action} upiId={upiId} balance={ele.balance} />
                        )
                    })}
                </>
            }
        </View>
    )
}

export default StmtsSect