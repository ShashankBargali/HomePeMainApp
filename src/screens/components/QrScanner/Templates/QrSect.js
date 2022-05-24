import { View, Button, Alert } from 'react-native'
import { RNCamera } from 'react-native-camera';
import React from 'react'
import styles from '../../../../assets/styles';
import { useNavigation } from '@react-navigation/native'
import { UPI_CODE } from '@env'

const QrSect = (props) => {
    const navigation = useNavigation();
    const handleBarCodeScanned = ({ data }) => {
        if (data.slice(0, 15) === UPI_CODE) {
            const res = props.urlParser(data)
            props.setUpiId(res.upiId)
            setTimeout(() => {
                navigation.navigate('Input')
            }, 500);
        }
        else {
            Alert.alert('Wrong QR Code Scanned', `The Qr Code data: "${data}" is not registered with upi`)
        }
    }
    return (
        <View>
            <RNCamera
                style={[styles.ctrStyles.fullContainer]}
                captureAudio={false}
                onBarCodeRead={handleBarCodeScanned}
            ></RNCamera>
            <View style={styles.qrsStyles.container}>
                <View style={[styles.ctrStyles.f1, styles.ctrStyles.flexRow]}>
                    <View style={[styles.ctrStyles.f1, styles.qrsStyles.opacityCont]}></View>
                    <View style={[styles.ctrStyles.f1, styles.qrsStyles.opacityCont]}></View>
                    <View style={[styles.ctrStyles.f1, styles.qrsStyles.opacityCont]}></View>
                </View>
                <View style={[styles.ctrStyles.f1, styles.ctrStyles.flexRow]}>
                    <View style={[styles.ctrStyles.f1, styles.qrsStyles.opacityCont]}></View>
                    <View style={[styles.ctrStyles.f1]}></View>
                    <View style={[styles.ctrStyles.f1]}></View>
                    <View style={[styles.ctrStyles.f1]}></View>
                    <View style={[styles.ctrStyles.f1, styles.qrsStyles.opacityCont]}></View>
                </View>
                <View style={[styles.ctrStyles.f1, styles.ctrStyles.flexRow]}>
                    <View style={[styles.ctrStyles.f1, styles.qrsStyles.opacityCont]}></View>
                    <View style={[styles.ctrStyles.f1, styles.qrsStyles.opacityCont]}></View>
                    <View style={[styles.ctrStyles.f1, styles.qrsStyles.opacityCont]}></View>
                </View>
            </View>
        </View>
    )
}

export default QrSect