import { View, Text, StyleSheet } from "react-native";

function Lists(props) {
    return props.data.map((dataPoint) => (
        <View style={styles.container} key={dataPoint}>
            <Text>{dataPoint}</Text>
        </View>
    ));
};

export default Lists;

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
    }
});