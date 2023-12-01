import { Text, View, StyleSheet } from 'react-native';

function FavoritesPage() {
    return <View style={styles.container}>
        <Text style={styles.text}>FavoritesPage!</Text>
    </View>
};

export default FavoritesPage;

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    text: {
        fontSize: 38,
        textAlign: "center"
    }
});