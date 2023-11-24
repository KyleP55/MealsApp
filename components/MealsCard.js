import { Text, View, StyleSheet, Pressable, Image } from "react-native";

function MealsCard(props) {
    const meal = props.meal;
    return (
        <View style={[styles.container, { backgroundColor: Platform.OS === 'android' ? props.bgColor : null }]}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}>
                <View style={[styles.innerContainer, { backgroundColor: Platform.OS === 'android' ? null : props.bgColor }]}>
                    <View style={styles.whiteBox}>
                        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
                        <View style={styles.mealInfo}>
                            <Text style={styles.title}>{meal.title}</Text>
                            <View style={styles.subInfo}>
                                <Text>Difficulty: {meal.complexity}</Text>
                                <Text>{meal.affordability}</Text>
                                <Text>Time: {meal.duration} Mins</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

export default MealsCard;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 16,
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
        padding: 8,
    },
    whiteBox: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#fff",
        alignItems: 'center',
        borderRadius: 8,
    },
    mealInfo: {
        flex: 1,
        alignItems: "center",
        paddingTop: 6,
    },
    subInfo: {
        flex: 1,
        alignItems: "center",
        padding: 8,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: "center",
    },
    image: {
        width: 100,
        height: 100,
        margin: 6,
    },
    buttonPressed: {
        opacity: Platform.OS === 'android' ? 1 : 0.5,
    }
});