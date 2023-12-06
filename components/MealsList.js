import { View, Text } from "react-native";

import MealsCard from "./MealsCard";


function MealsList(props) {
    const list = props.list;

    return list.map((data) => (
        <MealsCard id={data} bgColor={props.bgColor} onPress={props.onPress} key={data} />
    ));
};

export default MealsList;