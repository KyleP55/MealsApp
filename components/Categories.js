import { Text, View, Image, StyleSheet } from "react-native";

function Categories() {
    return (
        <View>
            <Image source={props.image} />
            <Text>{props.name}</Text>
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        color: props.bgColor
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'white',
    },
    image: {
        width: "70%",
        height: "70%",
        borderRadius: 8,
    }
});