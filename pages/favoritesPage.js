import { useContext } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import MealsList from '../components/MealsList';
import FavoritesContextProvider from '../store/context/favorites-context';
import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesPage(props) {
    const favMealContext = useContext(FavoritesContext);

    // Onpress
    function onPressHandler(id) {
        props.navigation.navigate("mealPage", { mealID: id });
    };

    return <View style={styles.container}>
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <Text style={styles.text}>Your Favorites</Text>
            <FavoritesContextProvider>
                <MealsList list={favMealContext.ids} bgColor={"#ffe869"} onPress={onPressHandler} />
            </FavoritesContextProvider>
        </ScrollView>
    </View>
};

export default FavoritesPage;

styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        alignItems: "center",
    },
    scrollContainer: {
        flex: 1,
        width: "100%",
    },
    text: {
        fontSize: 48,
        marginVertical: 14,
        textAlign: "center",
        color: '#fff',
        fontWeight: 'bold'
    }
});