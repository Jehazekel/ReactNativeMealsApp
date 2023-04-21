import { FlatList, StyleSheet, Text, View } from "react-native"
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "./MealsList/MealItem";

import { useEffect, useLayoutEffect } from "react";
import MealsList from "./MealsList/MealsList";

export default function MealOverviewScreen({ route, navigation }) {

  //navgator provides a "route" parameter for each screen
  const catId = route.params.categoryId;

  //get 
  const displayMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0 //checks the "categoryIds" arr for "catId"
  })


  //Get catId & set the route Options from within a screen
  const category = CATEGORIES.find((category) => category.id === catId);

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: category.title,
  //     headerStyle: { backgroundColor: category.color }
  //   })
  // }, [category, navigation])

  useLayoutEffect(() => { //used to execute simultaneously as a layout is set
    navigation.setOptions({
      title: category.title,
      headerStyle: { backgroundColor: category.color }
    })
  }, [category, navigation])


  return (
    <MealsList displayMeals={displayMeals} />

  )
}

