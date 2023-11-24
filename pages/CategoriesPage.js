import { Text, View, FlatList, StyleSheet } from "react-native";

import { CATEGORIES } from '../data/dummy-data.js';
import icon from "../assets/icon.png";

import Categories from "../components/Categories.js";

function CategoriesPage({ navigation }) {

    function onCatePress(catID, bgColor) {
        navigation.navigate("mealsPage", { catID: catID, bgColor: bgColor });
    }

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={CATEGORIES}
                    keyExtractor={(item) => item.id}
                    renderItem={itemData => {
                        return <Categories title={itemData.item.title} bgColor={itemData.item.color} image={icon} onPress={onCatePress} catID={itemData.item.id} />
                    }}
                    numColumns={2}
                    style={styles.flexList}
                />
            </View>
        </View>
    );
}

export default CategoriesPage;

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        alignItems: 'center',
        width: "100%",
        color: "#24180f",
    },
    title: {
        fontSize: 36,
        padding: 8,
        fontWeight: 'bold',
        color: 'white'
    },
    listContainer: {
        alignItems: 'center',
        width: "100%"
    },
    flexList: {
        width: "100%"
    }
});