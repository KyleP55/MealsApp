import { useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealPage(props) {
    const mealID = props.route.params.mealID;
    const catList = CATEGORIES.filter();

    // Get meal info
    const meal = MEALS.find((x) => x.id == mealID);
    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: meal.title
        });
    }, [props.navigation, mealID]);

    return (<>
        <View style={styles.container}>
            <Image source={{ uri: meal.imageUrl }} />
            <Text style={styles.title}>{meal.title}</Text>
            <Text style={styles.text}>Categories</Text>
            <Text style={styles.text}>{meal.affordability}</Text>
            <View style={styles.subInfo}>
                <Text style={styles.text}>Difficulty: {meal.complexity}</Text>
                <Text style={styles.text}>Time: {meal.duration} Mins</Text>
                <Text style={styles.text}>Gluten Free?: {meal.isGlutenFree ? "Yes" : "No"}       Lactos Free?: {meal.isLactoseFree ? "Yes" : "No"}</Text>
                <Text style={styles.text}>Vegetarian?: {meal.isVegetarian ? "Yes" : "No"}       Vegan?: {meal.isVegan ? "Yes" : "No"}</Text>
                <Text style={styles.text}>Ingredients: {meal.ingredients}</Text>
                <Text style={styles.text}>Steps:</Text>
                <Text style={styles.text}>{meal.steps}</Text>
            </View>
        </View>
    </>)
};

export default MealPage;

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    title: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
        color: '#fff',
    }
});