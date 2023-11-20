import { Text, View, Pressable, Image, StyleSheet, Platform } from "react-native";

function Categories(props) {
    return (
        <View style={styles.container}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]} onPress={props.onPress.bind(this, props.catID, props.bgColor)}>
                <View style={[styles.innerContainer, { backgroundColor: props.bgColor }]}>
                    <Image source={props.image} style={styles.image} />
                    <Text style={styles.text}>{props.title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    container: {
        width: 140,
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
        flex: 1,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'black',
        paddingTop: 2,
        textAlign: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    button: {
        width: "100%",
        height: "100%"
    },
    buttonPressed: {
        opacity: 0.5,
    }
});