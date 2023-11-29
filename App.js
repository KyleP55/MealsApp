import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesPage from './pages/CategoriesPage';
import MealsPage from './pages/MealsPage';
import MealPage from './pages/MealPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: '#4d3b3b' } }}>
          <Stack.Screen
            name="categoriesPage"
            component={CategoriesPage}
            options={{ title: "Categories" }}
          />
          <Stack.Screen
            name="mealsPage"
            component={MealsPage}
          />
          <Stack.Screen
            name="mealPage"
            component={MealPage}
            options={{
              headerRight: () => {
                return <Button title={"Add"} />
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    backgroundColor: '#24180f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
