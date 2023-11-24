import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import MealsCard from "../components/MealsCard.js";

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

    // Get meals in cat
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0;
    });

    // Onpress
    function onPressHandler(id) {
        props.navigation.navigate("mealPage", { mealID: id });
    };


    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={displayedMeals}
                    keyExtractor={(item) => item.id}
                    renderItem={itemData => { return <MealsCard meal={itemData.item} bgColor={bgColor} onPress={onPressHandler} /> }}
                    style={styles.list}
                />
            </View>
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