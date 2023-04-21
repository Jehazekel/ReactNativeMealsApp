import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoriteContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";


export default function FavoritesScreen( ){

  // const favoriteMealsCtx = useContext(FavoriteContext);
  // const favoriteMeals = MEALS.filter( meal => favoriteMealsCtx.ids.includes(meal.id) )
  const favoriteMealsList = useSelector( state => state.favoriteMeals.ids);
  const favoriteMeals = MEALS?.filter( meal => favoriteMealsList?.includes(meal.id) )
  
  
  if( favoriteMeals?.length === 0 ){
    return (
      <View style={styles?.rootContainer}>
        <Text style={styles?.text}> You have no favorite meals yet. </Text>
      </View>
    )
  }
  
  return <MealsList displayMeals={favoriteMeals} />
}


const styles = StyleSheet.create({
  rootContainer : {
    flex : 1 ,
    justifyContent : 'center' , //to center text vertically
    alignItems : 'center' , //to center text vertically
  } ,
  text : {
    fontSize : 18,
    fontWeight : 'bold',
    color : 'white'
  }
});