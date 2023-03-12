import {StyleSheet} from "react-native"

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontFamily: "orbitron-regular",
        fontSize: 20,
        color: "rgb(135, 134, 134)",
        margin: 5
    },
    paragraph: {
        marginVertical: 10,
        fontFamily: "orbitron-regular",
        lineHeight: 20,

    }
})


export const images = {
    ratings: {
        "1": require("../assets/rating-1.png"),
        "2": require("../assets/rating-2.png"),
        "3": require("../assets/rating-3.png"),
        "4": require("../assets/rating-4.png"),
        "5": require("../assets/rating-5.png"),
    }
}