import { View, Image, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../../../context/AppContext'
import styles from '../../../../assets/styles'
import Loader from '../../General/Loader'

const QrGenerator = () => {
    const context = useContext(AppContext)
    const [qrImg, setQrImg] = useState('')

    useEffect(() => {
        genQr();
    }, [])

    const genQr = async () => {
        const qr = await context.qrCode();
        setQrImg(qr.response)
    }
    return (
        <View style={[styles.ctrStyles.contianer, styles.ctrStyles.faCenter, styles.ctrStyles.fjCenter, styles.ctrStyles.myContainer]}>
            {!qrImg ?
                <View style={{ width: 200, height: 200, backgroundColor: 'white' }}>
                    <Loader />
                </View> :
                <>
                    {qrImg === 'Server_error' ?
                        <View style={[styles.ctrStyles.faCenter, styles.ctrStyles.fjCenter, { width: 200, height: 200, backgroundColor: 'white'}]}>
                            <Text style={styles.txtStyles.txtCenter}>Can't Load your QR Code! Please make sure internet is connected and fast enough</Text> 
                        </View> :
                        <Image style={{
                            width: 200,
                            height: 200
                        }} source={{ uri: qrImg }} />

                    }
                </>
            }
        </View>
    )
}

export default QrGenerator