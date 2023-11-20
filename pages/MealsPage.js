import { View, Text, StyleSheet, FlatList } from "react-native";

import MealsCard from "../components/MealsCard.js";

import { MEALS } from '../data/dummy-data.js';

function MealsPage(props) {
    const catID = props.route.params.catID;
    const bgColor = props.route.params.bgColor;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0;
    });


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meals Page</Text>
            <View style={styles.listContainer}>
                <FlatList
                    data={displayedMeals}
                    keyExtractor={(item) => item.id}
                    renderItem={itemData => { return <MealsCard meal={itemData.item} bgColor={bgColor} /> }}
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
        paddingHorizontal: 16,
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