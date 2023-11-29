import { useLayoutEffect, useState } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import Lists from "../components/Lists";
import IconButton from "../components/IconButton";

function MealPage(props) {
    const mealID = props.route.params.mealID;
    const [catList, setCatList] = useState([]);

    // Get meal info
    const meal = MEALS.find((x) => x.id == mealID);
    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: meal.title,
            headerRight: () => {
                return <IconButton onPress={favHandler} color={"#000000"} />
            }
        });
    }, [props.navigation, favHandler]);

    useLayoutEffect(() => {
        for (var i = 0; i < meal.categoryIds.length; i++) {
            for (var I = 0; I < CATEGORIES.length; I++) {
                if (meal.categoryIds[i] == CATEGORIES[I].id) {
                    setCatList((currentList) => [...currentList, CATEGORIES[i].title]);
                }
            }
        }
    }, [props.navigation, mealID]);

    function favHandler(id) {
        console.log('added');
    }

    return (<>
        <View style={styles.container}>
            <ScrollView style={{ width: "100%" }}>
                <Image source={{ uri: meal.imageUrl }} style={styles.image} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{meal.title}</Text>
                    <Text style={styles.text}>{catList}</Text>
                    <Text style={styles.text}>{meal.affordability}</Text>
                </View>
                <View style={styles.subInfo}>
                    <Text style={styles.text}>Difficulty: {meal.complexity}</Text>
                    <Text style={styles.text}>Time: {meal.duration} Mins</Text>
                    <Text style={styles.text}>Gluten Free?: {meal.isGlutenFree ? "Yes" : "No"}       Lactos Free?: {meal.isLactoseFree ? "Yes" : "No"}</Text>
                    <Text style={styles.text}>Vegetarian?: {meal.isVegetarian ? "Yes" : "No"}       Vegan?: {meal.isVegan ? "Yes" : "No"}</Text>
                    <Text style={styles.subTitle}>Ingredients:</Text>
                    <View style={styles.listContainer}>
                        <Lists data={meal.ingredients} />
                    </View>
                    <Text style={styles.subTitle}>Steps:</Text>
                    <View style={styles.listContainer}>
                        <Lists data={meal.steps} />
                    </View>
                </View>
            </ScrollView>
        </View>
    </>)
};

export default MealPage;

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    titleContainer: {
        alignItems: "center",
        marginBottom: 6,
        paddingBottom: 6,
        borderBottomWidth: 2,
        borderColor: '#fff'
    },
    title: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center',
    },
    subTitle: {
        width: '80%',
        textAlign: 'center',
        color: '#fff',

        marginBottom: 6,
        paddingBottom: 6,
        borderBottomWidth: 2,
        borderColor: '#fff'
    },
    listContainer: {
        width: '80%',
    },
    text: {
        fontSize: 14,
        color: '#fff',
    },
    image: {
        width: '100%',
        height: 350,
    },
    subInfo: {
        marginHorizontal: 8,
        alignItems: 'center',
        width: '100%',
    }
});