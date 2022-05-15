import { StyleSheet } from 'react-native'

const loginStyles = StyleSheet.create({
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

export default loginStyles