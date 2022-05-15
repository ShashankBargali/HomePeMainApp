import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import QrScanner from './src/screens/pages/QrScanner';
import UpiPin from './src/screens/pages/UpiPin';
import UserHome from './src/screens/pages/UserHome';
import Amount from './src/screens/pages/Amount';
import AppContext from './src/context/AppContext';
import { urlParser } from './src/context/functions/ContextFunc'
import Balance from './src/screens/pages/Balance';
import Success from './src/screens/pages/Success';
import Passbook from './src/screens/pages/Passbook';
import NotCon from './src/screens/pages/NotCon';
import Send from './src/screens/pages/Send';
import Login from './src/screens/pages/Login';
const Stack = createNativeStackNavigator();

const App = () => {
    const url = 'https://home-pe-router.herokuapp.com';
    const [upiId, setUpiId] = useState('')
    const [amount, setAmount] = useState(0)
    const [authToken, setAuthToken] = useState('')
    
    const login = async (acno, pin) => {
        const data = await fetch(`${url}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                acno: parseFloat(acno),
                pin: parseInt(pin)
            })
        }).catch(err => {
            return "error";
        })

        if (data === 'error') {
            const parsedData = {
                success: false,
                response: 'Server_error'
            }
            return parsedData
        }
        const parsedData = await data.json();
        return parsedData;
    }

    const fetchBalance = async () => {
        const data = await fetch(`${url}/api/user/fetchbalance`, {
            method: 'GET',
            headers: {
                'auth-token': authToken
            }
        }).catch(err => {
            return "error";
        })

        if (data === 'error') {
            const parsedData = {
                success: false,
                response: 'Server_error'
            }
            return parsedData
        }
        const parsedData = await data.json();
        return parsedData;
    }

    const sendMoney = async (upiId, amount) => {
        const data = await fetch(`${url}/api/user/send`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken
            },
            body: JSON.stringify({ upiId, amount })
        }).catch(err => {
            return "error";
        })

        if (data === 'error') {
            const parsedData = {
                success: false,
                response: 'Server_error'
            }
            return parsedData
        }
        const parsedData = await data.json();
        return parsedData;
    }


    const checkPin = async () => {
        const data = await fetch(`${url}/api/user/getpin`, {
            method: 'GET',
            headers: {
                'auth-token': authToken
            }
        }).catch(err => {
            return "error";
        })

        if (data === 'error') {
            const parsedData = {
                success: false,
                response: 'Server_error'
            }
            return parsedData
        }
        const parsedData = await data.json();
        return parsedData;

    }


    const qrCode = async () => {
        const data = await fetch(`${url}/api/user/qrcode`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken
            }
        }).catch(err => {
            return "error"
        })

        if (data === 'error') {
            const parsedData = {
                success: false,
                response: 'Server_error'
            }
            return parsedData
        }
        const parsedData = await data.json();
        return parsedData;
    }


    const rcntTrnx = async () => {
        const data = await fetch(`${url}/api/transaction/fetchtr`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken
            }
        }).catch(err => {
            return "error";
        })

        if (data === 'error') {
            const parsedData = {
                success: false,
                response: 'Server_error'
            }
            return parsedData
        }
        const parsedData = await data.json();
        return parsedData;
    }


    const fetchBankDetails = async () => {
        const data = await fetch(`${url}/api/auth/fetchbankdetails`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken
            }
        }).catch(err => {
            return "error";
        })

        if (data === 'error') {
            const parsedData = {
                success: false,
                response: 'Server_error'
            }
            return parsedData
        }
        const parsedData = await data.json();
        return parsedData;
    }


    return (
        <NavigationContainer>
            <AppContext.Provider value={{ authToken, setAuthToken, upiId, setUpiId, amount, setAmount, urlParser, login, sendMoney, checkPin, fetchBalance, qrCode, rcntTrnx, fetchBankDetails }}>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen component={Login} name="Login" options={{
                        title: "Login to HomePe",
                        headerTitleAlign: 'center',
                        headerShown: false
                    }} />
                    <Stack.Screen component={UserHome} name="Home" options={{
                        title: "HomePe",
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontFamily: 'Nunito-SemiBold',
                            fontSize: 30,
                            color: 'rgb(0,0,120)'
                        }
                    }} />
                    <Stack.Screen component={QrScanner} name="QrScanner" options={{
                        headerTitleStyle: {
                            fontFamily: 'Nunito-SemiBold'
                        }
                    }} />
                    <Stack.Screen component={UpiPin} name="UpiPin" options={{
                        title: 'Enter your UPI Pin to transfer'
                    }} />

                    <Stack.Screen component={Send} name="Send" options={{
                        title: 'Send to UPI Id',
                        headerTitleStyle: {
                            fontFamily: 'Nunito-SemiBold'
                        }
                    }} />

                    <Stack.Screen component={Amount} name="Input" options={{
                        title: 'Enter the amount of transfer',
                        headerTitleStyle: {
                            fontFamily: 'Nunito-SemiBold'
                        }
                    }} />

                    <Stack.Screen component={Balance} name="Balance" options={{
                        headerShown: false,
                        headerTitleStyle: {
                            fontFamily: 'Nunito-SemiBold'
                        }
                    }} />

                    <Stack.Screen component={Success} name="Success" options={{
                        headerShown: false,
                        headerTitleStyle: {
                            fontFamily: 'Nunito-SemiBold'
                        }
                    }} />

                    <Stack.Screen component={Passbook} name="Passbook" options={{
                        title: 'Your Qr Code and Recent transactions',
                        headerTitleStyle: {
                            fontFamily: 'Nunito-SemiBold'
                        }
                    }} />

                    <Stack.Screen component={NotCon} name="Error" options={{
                        headerShown: false
                    }} />


                </Stack.Navigator>
            </AppContext.Provider>
        </NavigationContainer>
    )
}

export default App