import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Test = () => {
  return (
    <View>
        <View style={styles.container}>
            <View style={[styles.f1, styles.row]}>
                <View style={styles.f1}></View>
                <View style={styles.f1}></View>
            </View>
            <View style={[styles.f1, styles.row]}>
                <View style={styles.f1}></View>
                <View style={styles.f2}></View>
                <View style={styles.f1}></View>
            </View>
            <View style={[styles.f1, styles.row]}>
                <View style={styles.f1}></View>
                <View style={styles.f1}></View>
            </View>
        </View>
      <Text>Test</Text>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    f1: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    f2: {
        flex: 1
    },
    row: {
        flexDirection: 'row'
    }
})