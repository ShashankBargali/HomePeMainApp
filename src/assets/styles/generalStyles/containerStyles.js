import { StyleSheet } from 'react-native'

const ctrStyles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20
    },
    fullContainer: {
        width: '100%',
        height: '100%'
    },
    myContainer: {
        marginVertical: 10
    },
    mrContainer: {
        marginHorizontal: 10
    },
    pyContainer: {
        paddingVertical: 20
    },
    sectContainer: {
        display: 'flex',
        margin: 20,
        borderRadius: 30,
        backgroundColor: 'white',
        padding: 30
    },
    flexCol: {
        flexDirection: 'column'
    },
    flexRow: {
        flexDirection: 'row'
    },
    faCenter: {
        alignItems: 'center',
    },
    fjCenter: {
        justifyContent: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    evenly: {
        justifyContent: 'space-evenly'
    },
    f1: {
        flex: 1
    },
    bdrWhite: {
        borderColor: 'white'
    },
    bdrBlack: {
        borderColor: 'black'
    },
    bdr2: {
        borderWidth: 2
    },
    bdrRds5: {
        borderRadius: 5
    } 
})

export default ctrStyles