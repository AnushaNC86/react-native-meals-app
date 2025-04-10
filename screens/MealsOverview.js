import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { View } from "react-native";

const MealsOverview = ({ route, navigation }) => {
  //   const route = useRoute();// one way of getting routes
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return (
    <View style={{ flex: 1, paddingBottom: 60 }}>
      <MealsList items={displayedMeals} />
    </View>
  );
};

export default MealsOverview;
