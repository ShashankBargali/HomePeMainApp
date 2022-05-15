import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'

const Card = (props) => {
    return (
        <View style={[styles.ctrStyles.spaceBetween, styles.ctrStyles.container, styles.ctrStyles.bdr2, styles.ctrStyles.bdrBlack, styles.ctrStyles.bdrRds5, styles.ctrStyles.pyContainer, styles.ctrStyles.myContainer]}>
            <View style={[styles.ctrStyles.flexRow, styles.ctrStyles.faCenter, styles.ctrStyles.fjCenter]}>
                <Text style={[styles.txtStyles.head4]}>{props.action === 'sent' ? "To" : "By"} : </Text>
                <Text style={[styles.txtStyles.head4, styles.txtStyles.fontNunito]}>{props.upiId}</Text>
            </View>
            <View style={[styles.ctrStyles.flexRow, styles.ctrStyles.faCenter, styles.ctrStyles.spaceBetween]}>
                <View style={[styles.ctrStyles.flexRow]}>
                    <Text style={[styles.txtStyles.desc, styles.txtStyles.fontUbuntu]}>Action : </Text>
                    <Text style={[styles.txtStyles.fontNunito, styles.txtStyles.head4]}>{props.action === 'sent' ? "Sent" : "Received"}</Text>
                </View>
                <View style={[styles.ctrStyles.flexRow, styles.ctrStyles.faCenter, styles.ctrStyles.spaceBetween]}>
                    <Text style={[styles.txtStyles.desc, styles.txtStyles.fontUbuntu]}>Amount : </Text>
                    <Text style={[styles.txtStyles.fontNunito, styles.txtStyles.head2, props.action === 'sent' ? styles.txtStyles.txtRed : styles.txtStyles.txtGreen]}>{props.amount}</Text>
                </View>
            </View>
            <View style={[styles.ctrStyles.faCenter, styles.ctrStyles.fjCenter]}>
                <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontUbuntu]}>Balance </Text>
                <View style={[styles.ctrStyles.faCenter, styles.ctrStyles.fjCenter, { width: 50, height: 50, backgroundColor: '#008068', borderRadius: 10 }]}>
                    <Text style={[styles.txtStyles.head2, styles.txtStyles.fontNunito, styles.txtStyles.whiteTxt]}>{props.balance}</Text>
                </View>
            </View>
        </View>
    )
}

Card.defaultProps = {
    upiId: 'None',
    amount: 0,
    balance: 0,
    action: 'Null'
}

export default Card