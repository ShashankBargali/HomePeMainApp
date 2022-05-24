import { TouchableOpacity, Text, View, Alert, BackHandler } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import React, { useState, useRef, useContext, useEffect } from 'react'
import styles from '../../assets/styles';
import AppContext from '../../context/AppContext';
import Loader from '../components/General/Loader'
const Login = ({ navigation }) => {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', disableBackButton);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', disableBackButton)
        }
    }, [])

    const pinInput1 = useRef(null);
    const pinInput2 = useRef(null);
    const context = useContext(AppContext);
    const [loader, setLoader] = useState(false)
    const [acno, setAcno] = useState('');
    const [code, setCode] = useState('');

    const disableBackButton = () => {
        BackHandler.exitApp();
        return true;
    }
    const setData = async () => {
        if (acno.length !== 6 || code.length !== 4) {
            Alert.alert("Can't Login", "Please fill the acno and pin sector")
            return;
        }
        setLoader(true);
        const data = await context.login(acno, code)
        if (data.success === true) {
            try {
                setLoader(false)
                await AsyncStorage.setItem("authToken", data.response)
                context.setAuthToken(await AsyncStorage.getItem('authToken'))
            } catch (error) {
                console.log(err)
            }
        }
        else {
            setLoader(false)
            Alert.alert("Can't Login", "Please enter correct acno and pin")
            return;
        }
        navigation.navigate('Home')
    }
    return (
        <View style={styles.loginStyles.container}>
            {loader ? <Loader /> :
                <>
                    <View style={{ width: '100%' }}>
                        <Text style={{ textAlign: 'left', fontSize: 30, fontWeight: '500', fontFamily: 'RobotoSlab-Regular', color: 'black' }}>Login to HomePe</Text>
                        <Text style={{ fontSize: 18, fontWeight: '400' }}>Enter your <Text style={{ color: 'hsl(136, 65%, 51%)', fontSize: 23 }}>Pay</Text><Text style={{ color: 'hsl(192, 70%, 51%)', fontSize: 23 }}>Home</Text> Account's A/c Number and Pin to Login</Text>
                    </View>
                    <View style={styles.ctrStyles.faCenter}>
                        <View style={styles.ctrStyles.myContainer}>
                            <Text style={[styles.txtStyles.head2, styles.txtStyles.fontNunito, styles.txtStyles.txtCenter, styles.ctrStyles.myContainer]}>Enter Acno: </Text>
                            <SmoothPinCodeInput
                                codeLength={6}
                                mask={<View style={{
                                    width: 15,
                                    height: 15,
                                    borderRadius: 25,
                                    backgroundColor: 'black',
                                }}></View>}
                                maskDelay={200}
                                password={true}
                                cellStyle={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 10,
                                    borderWidth: 2,
                                    borderColor: '#00ebc0',
                                    marginHorizontal: 20,
                                    backgroundColor: 'rgba(0,0,0,0.09)'
                                }}
                                cellStyleFocused={{
                                    backgroundColor: 'white'
                                }}
                                ref={pinInput1}
                                value={acno}
                                onTextChange={num => setAcno(num)}
                                keyboardType='decimal-pad'
                            />
                        </View>
                        <View style={[styles.ctrStyles.myContainer]}>
                            <Text style={[styles.txtStyles.head2, styles.txtStyles.fontNunito, styles.txtStyles.txtCenter, styles.ctrStyles.myContainer]}>Enter Pin: </Text>
                            <SmoothPinCodeInput
                                mask={<View style={{
                                    width: 15,
                                    height: 15,
                                    borderRadius: 25,
                                    backgroundColor: 'black',
                                }}></View>}
                                maskDelay={200}
                                password={true}
                                cellStyle={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 10,
                                    borderWidth: 2,
                                    borderColor: '#00ebc0',
                                    marginHorizontal: 20,
                                    backgroundColor: 'rgba(0,0,0,0.09)'
                                }}
                                cellStyleFocused={{
                                    backgroundColor: 'white'
                                }}
                                ref={pinInput2}
                                value={code}
                                onTextChange={code => setCode(code)}
                                keyboardType='decimal-pad'
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.loginStyles.btn} onPress={setData}>
                        <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', fontFamily: 'FiraCode-Regular' }}>Login</Text>
                    </TouchableOpacity>
                </>
            }
        </View>
    )
}

export default Login