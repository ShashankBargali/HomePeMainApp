import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get('screen')
const amtStyles = StyleSheet.create({
    inpContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    amtCont: {
        height: height / 4
    }
})

export default amtStyles
