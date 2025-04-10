import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
// import FavoritesContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4d1521" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#f2d5d5" },
        drawerContentStyle: { backgroundColor: "#f2d5d5" },
        drawerInactiveTintColor: "#4d1521",
        drawerActiveTintColor: "#592121",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          {/* <Stack.Navigator initialRouteName="MealOverview"> // Setting the default Screen */}
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#4d1521" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#f2d5d5" },
            }}
          >
            <Stack.Screen
              name="MealCategories"
              component={DrawerNavigator}
              options={{
                title: "All Categories",
                headerShown: false, // To hide stack header
              }}
            />
            <Stack.Screen
              name="MealOverview"
              component={MealsOverview}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return { title: catId };
              // }}
            />
            <Stack.Screen
              name="MealDetailsScreen"
              component={MealDetailsScreen}
              options={{
                // headerRight: () => {
                //   return <Button title="tap me" />;
                // },
                title: "Meal Details",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
