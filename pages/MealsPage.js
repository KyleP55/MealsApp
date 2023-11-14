import { View, Text, StyleSheet } from "react-native";

import { MEALS } from '../data/dummy-data.js';

function MealsPage(props) {
    const catID = props.route.params.catID;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meals Page</Text>
            <Text style={styles.title}>{catID}</Text>
        </View>
    );
}

export default MealsPage;

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 36,
        padding: 8,
        fontWeight: 'bold',
        color: 'black'
    },
})