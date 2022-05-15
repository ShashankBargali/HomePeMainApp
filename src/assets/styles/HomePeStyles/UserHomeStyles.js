import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("screen")

const topsStyles = StyleSheet.create({
    ftrContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        width: '100%'
    },
    scanContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: '100%'
    }
})

const midsStyles = StyleSheet.create({
    card: {
        backgroundColor: '#00ebc0',
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        width: width / 1.2,
        height: 200,
        marginVertical: 20
    }
})

const ftrStyles = StyleSheet.create({
    iconCtr: {
        backgroundColor: '#00968a',
        borderRadius: 10,
        width: 65,
        height: 65,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    }, 
    iconImg: {
        width: "100%", 
        height: "100%", 
        tintColor: 'white'
    },
    ftrOptn:{
        fontSize: 14, 
        fontFamily: 'FiraCode-Regular', 
        textAlign: 'center', 
        width: 67
    },
    iconCtrLg: {
        backgroundColor: '#00786e',
        borderRadius: 10,
        width: 112, 
        height: 112,
        padding: 20
    },
    ftrOptnLg:{
        fontSize: 20, 
        fontFamily: 'FiraCode-Regular', 
        textAlign: 'center', 
        width: 112
    },
})

const btmsStyles = StyleSheet.create({
    ftrImg: {
        height: 100,
        width: "100%",
        borderRadius: 20,
    }
})
export {topsStyles, midsStyles, ftrStyles, btmsStyles}