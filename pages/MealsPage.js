import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import MealsList from "../components/MealsList.js"

import { MEALS, CATEGORIES } from '../data/dummy-data.js';

function MealsPage(props) {
    const catID = props.route.params.catID;
    const bgColor = props.route.params.bgColor;

    // Set cat title
    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find((cat) => cat.id === catID).title;
        props.navigation.setOptions({
            title: catTitle
        });
    }, [catID, props.navigation]);

    // Get Meal Ids in Cat
    const meals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catID) >= 0;
    });

    const mealsID = [];
    for (var i = 0; i < meals.length; i++) {
        mealsID.push(meals[i].id);
    }

    // Onpress
    function onPressHandler(id) {
        props.navigation.navigate("mealPage", { mealID: id });
    };


    return (
        <View style={styles.container}>
            <MealsList list={mealsID} bgColor={bgColor} onPress={onPressHandler} />
        </View>
    );
}

export default MealsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 36,
        padding: 8,
        fontWeight: 'bold',
        color: 'black'
    },
    listContainer: {
        flex: 1,
        width: "100%",
    },
    list: {
        width: "100%",
    }
})