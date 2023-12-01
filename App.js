import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesPage from './pages/CategoriesPage';
import MealsPage from './pages/MealsPage';
import MealPage from './pages/MealPage';
import FavoritesPage from './pages/favoritesPage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNav() {
  return <Drawer.Navigator
    screenOptions={{
      sceneContainerStyle: { backgroundColor: '#4d3b3b' },
      drawerContentStyle: { backgroundColor: '#5c4c4c' },
      drawerInactiveTintColor: '#fff',
      drawerActiveBackgroundColor: '#917474',
      drawerActiveTintColor: '#fff'
    }}>
    <Drawer.Screen name="categoriesPage" component={CategoriesPage} options={{
      title: 'All Categories',
      drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name="list" />
    }} />
    <Drawer.Screen name="favoritePage" component={FavoritesPage} options={{
      title: 'Your Favorites',
      drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name="star" />
    }} />
  </Drawer.Navigator>;
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: '#4d3b3b' } }}>
          <Stack.Screen
            name="drawerScreen"
            component={DrawerNav}
            options={{
              title: 'All Categories',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="mealsPage"
            component={MealsPage}
          />
          <Stack.Screen
            name="mealPage"
            component={MealPage}
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
