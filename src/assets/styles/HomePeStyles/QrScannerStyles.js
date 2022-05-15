import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

const qrsStyles = StyleSheet.create({
    barcode:{
        ...StyleSheet.absoluteFill,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    muskContainer: {
        width: width / 1.5,
        height: width / 1.5
    },
    muskTR: {
        borderRightWidth: 3,
        borderTopWidth: 3
    },
    muskTL: {
        borderLeftWidth: 3,
        borderTopWidth: 3
    },
    muskBR: {
        borderRightWidth: 3,
        borderBottomWidth: 3
    },
    muskBL: {
        borderLeftWidth: 3,
        borderBottomWidth: 3
    },
}) 

export default qrsStyles;