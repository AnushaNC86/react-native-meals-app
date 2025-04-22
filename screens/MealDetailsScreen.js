import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, removeFavorites } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailsScreen = ({ route, navigation }) => {
  // context usage
  // const favoriteMealContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;

  const mealIsFavorite = favoriteMealIds?.includes(mealId);

  const changeFavHandler = () => {
    if (mealIsFavorite) {
      // favoriteMealContext.removeFavorite(mealId)
      dispatch(removeFavorites({ id: mealId }));
    } else {
      // favoriteMealContext.addFavorite(mealId)
      dispatch(addFavorites({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          // <View style={{ marginRight: 16, borderWidth: 1, borderColor: "red" }}>
          <IconButton
            onPress={changeFavHandler}
            icon={mealIsFavorite ? "heart" : "heart-outline"}
            color="white"
          />
          // </View>
        );
      },
    });
  }, [navigation, changeFavHandler, mealIsFavorite]);

  const selectMealItem = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectMealItem.imageUrl }} />
      <Text style={styles.title}>{selectMealItem.title}</Text>
      <MealDetails
        duration={selectMealItem.duration}
        affordability={selectMealItem.affordability}
        complexity={selectMealItem.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectMealItem.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectMealItem.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 112,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  detailText: {
    color: "black",
  },
  listContainer: {
    maxWidth: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
