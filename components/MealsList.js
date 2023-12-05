import { View, Text } from "react-native";

import MealsCard from "./MealsCard";


function MealsList(props) {
    const list = props.list;

    // Onpress
    function onPressHandler(id) {
        props.onPress.bind(this, id);
        console.log("popopp")
    }

    function test() {
        props.onPress;
        console.log('eestst')
    }

    return list.map((data) => (
        <MealsCard id={data} bgColor={props.bgColor} onPress={onPressHandler} key={data} tester={test} />
    ));
};

export default MealsList;