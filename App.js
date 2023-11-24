import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesPage from './pages/CategoriesPage';
import MealsPage from './pages/MealsPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: '#4d3b3b' }
          }}>
          <Stack.Screen
            name="categoriesPage"
            component={CategoriesPage}
            options={{ title: "Categories" }}
          />
          <Stack.Screen name="mealsPage" component={MealsPage} options={{ title: "Meals List" }} />
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
