import { Text, View, StyleSheet, Pressable, Image } from "react-native";

function MealsCard(props) {
    const meal = props.meal;
    return (
        <View style={styles.container}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}>
                <View style={[styles.innerContainer, { backgroundColor: props.bgColor }]}>
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
        borderWidth: 1,
        borderColor: 'black',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        borderRadius: 8,
        overflow: 'hidden'
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
        opacity: 0.5,
    }
});