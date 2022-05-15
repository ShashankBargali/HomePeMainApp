import { StyleSheet } from 'react-native'

const pinsStyles = StyleSheet.create({
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    midBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 70,
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#1b3280'
    },
    inpPlaceHolder: {
        width: 40,
        height: 10,
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    inpMusk: {
        width: 15,
        height: 15,
        borderRadius: 25,
        backgroundColor: 'black',
    }
})

export default pinsStyles
