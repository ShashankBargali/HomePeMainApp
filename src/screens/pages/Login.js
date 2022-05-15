import { StyleSheet, Pressable, Dimensions, Text, View, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import React, { useState, useRef } from 'react'

const Login = ({ navigation }, props) => {
    const pinInput = useRef(null);
    const { width } = Dimensions.get('screen')

    const [code, setCode] = useState('');
    
    const setData = async () => {
        try {
            await AsyncStorage.setItem('acno', code)
            navigation.navigate('Home')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ width: '100%' }}>
                <Text style={{ textAlign: 'left', fontSize: 30, fontWeight: '500', fontFamily: 'RobotoSlab-Regular', color: 'black' }}>Login to HomePe</Text>
                <Text style={{ marginVertical: width / 20, fontSize: 18, fontWeight: '400' }}>Enter your <Text style={{ color: 'hsl(136, 65%, 51%)', fontSize: 23 }}>Pay</Text><Text style={{ color: 'hsl(192, 70%, 51%)', fontSize: 23 }}>Home</Text> Account's Pin to Login</Text>
            </View>
            <View style={{ position: 'absolute', top: width / 1.5 }}>
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
                    ref={pinInput}
                    value={code}
                    onTextChange={code => setCode(code)}
                    onFulfill={setData}
                    keyboardType='decimal-pad'
                />
            </View>
            <Pressable style={styles.btn}>
                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', fontFamily: 'FiraCode-Regular' }}>Login</Text>
            </Pressable>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        height: '100%'
    },
    inp: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        width: '100%',
        borderRadius: 10,
        marginVertical: 20
    },
    btn: {
        paddingHorizontal: 40,
        paddingVertical: 15,
        backgroundColor: '#008068',
        borderRadius: 20,
        width: '100%'
    }
})