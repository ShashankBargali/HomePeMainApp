import { View, Text, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import AppContext from '../../context/AppContext'
import styles from '../../assets/styles'
import { useNavigation } from "@react-navigation/native";
import Loader from '../components/General/Loader';

const Success = () => {
    const navigation = useNavigation();
    const handleBtn = () => {
        navigation.navigate('Home')
    }
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({ success: false, response: '' })
    useEffect(() => {
        setLoading(true)
        sendMoneyNow()
    }, [])
    const context = useContext(AppContext)
    async function sendMoneyNow() {
        const done = await context.sendMoney(context.upiId, context.amount)
        setData({
            success: done.success,
            response: done.response
        })
        setLoading(false)
    }
    return (
        <View style={[styles.ctrStyles.faCenter, styles.ctrStyles.fullContainer, styles.ctrStyles.evenly, styles.ctrStyles.pyContainer]}>
            {loading ? (
                <Loader/>
            ) : (
                <>
                    {data.success ?
                        <>
                            <Text style={[styles.txtStyles.mainHead, styles.txtStyles.themeTxt, styles.txtStyles.fontFiraCode]}>Sent to {context.upiId} Successfully</Text>
                            <View style={styles.ctrStyles.container}>
                                <TouchableOpacity style={styles.btnStyles.themeBtn} onPress={handleBtn}>
                                    <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontFiraCode, styles.txtStyles.whiteTxt, styles.txtStyles.txtCenter]}>Awesome! Go Back</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                        :
                        <>
                            <Text style={[styles.txtStyles.mainHead, styles.txtStyles.themeTxt, styles.txtStyles.fontFiraCode]}>Some internal Error occured while sending. Our best minds are working on it ..!</Text>
                            <View style={styles.ctrStyles.container}>
                                <TouchableOpacity style={styles.btnStyles.themeBtn} onPress={handleBtn}>
                                    <Text style={[styles.txtStyles.mainHead, styles.txtStyles.fontFiraCode, styles.txtStyles.whiteTxt, styles.txtStyles.txtCenter]}>Ok! Go Back</Text>
                                </TouchableOpacity>
                            </View>
                        </>}
                </>

            )}
        </View>
    )
}

export default Success