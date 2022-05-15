import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import QrScanner from './src/screens/pages/QrScanner';
import UpiPin from './src/screens/pages/UpiPin';
import UserHome from './src/screens/pages/UserHome';
import Amount from './src/screens/pages/Amount';
import AppContext from './src/context/AppContext';
import { urlParser } from './src/context/functions/ContextFunc'
import { sendMoney, checkPin, fetchBalance, qrCode, rcntTrnx, fetchBankDetails } from './src/context/middlewares/apiFunctions';
import Balance from './src/screens/pages/Balance';
import Success from './src/screens/pages/Success';
import Passbook from './src/screens/pages/Passbook';
import NotCon from './src/screens/pages/NotCon';
import Send from './src/screens/pages/Send';
import Login from './src/screens/pages/Login';
const Stack = createNativeStackNavigator();

const App = () => {
    const [upiId, setUpiId] = useState('')
    const [amount, setAmount] = useState(0)

    return (
        <NavigationContainer>
            <AppContext.Provider value={{ upiId, setUpiId, amount, setAmount, urlParser, sendMoney, checkPin, fetchBalance, qrCode, rcntTrnx, fetchBankDetails }}>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen component={Login} name="Home" options={{
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