import { Text, View, Pressable, Image, StyleSheet, Platform } from "react-native";

function Categories(props) {
    return (
        <View style={[styles.container, { backgroundColor: Platform.OS === 'android' ? props.bgColor : null }]}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]} onPress={props.onPress.bind(this, props.catID, props.bgColor)}>
                <View style={[styles.innerContainer, { backgroundColor: Platform.OS === 'android' ? null : props.bgColor }]}>
                    <Text style={styles.text}>{props.title}</Text>
                </View>
            </Pressable>
        </View >
    );
};

export default Categories;

const styles = StyleSheet.create({
    container: {
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
        flex: 1,
        borderRadius: 8,
        backgroundColor: 'white',

        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: .25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        width: "100%",
        height: "100%",
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
        opacity: Platform.OS === 'android' ? 1 : 0.5,
    }
});