import { useContext, useLayoutEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/favorites-context";
import IconButton from "./IconButton";
import List from "./List";
import MealDetail from "./MealDetails";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favoritesReducer";


export default function MealDetailScreen({ route, navigation }) {
  // get app wide context 
  // const favoriteMealContext = useContext(FavoriteContext);
  
  const dispatch = useDispatch();
  const favoriteMealIds = useSelector( (state)=> state.favoriteMeals.ids);

  const mealId = route.params.mealId;

  // Check mealContext to determine if meal is favorite
  // const mealIsFavorite = favoriteMealContext.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const onPressHandler = ()=>{
    console.log('Fav Meals', favoriteMealIds);
    console.log(mealId)
    if(mealIsFavorite){
      // favoriteMealContext.removeFavorite(mealId)
      dispatch( removeFavorite({id :mealId}))
    }
    else 
      // favoriteMealContext.addFavorite(mealId);
      dispatch( addFavorite({ id :mealId} ))
  };

  //setting header button from component Screen
  useLayoutEffect( ()=>{
    navigation.setOptions({
      headerRight : ()=>  { 
        return <IconButton icon="star" color={mealIsFavorite ? 'brown' : 'white'} onPress={onPressHandler}/> //<Button title='Tap me!' onPress={ onPressHandler} />
       }
    })
  }, [navigation, onPressHandler ])


  //get selected Meal
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <ScrollView >
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}> {selectedMeal.title}</Text>


      <MealDetail textStyle={styles.detailText} duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />



      <View style={styles.listOuterContainer} >
        <View style={styles.list} >
          <View style={styles.subtitleContainer} >
            <Text style={styles.subTitle}> Ingredients</Text>
          </View>
          {/* {selectedMeal.ingredients.map(ingredient => <Text key={ingredient} style={styles.subTitle}> {ingredient} </Text>)} */}
          <List data={selectedMeal.ingredients} />


          <View style={styles.subtitleContainer} >
            <Text style={styles.subTitle}> Steps</Text>
          </View >
          {/* {selectedMeal.steps.map(step => <Text key={step} > {step} </Text>)} */}
          <List data={selectedMeal.steps} />
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create
  ({
    image: {
      width: '100%',
      height: 350
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      margin: 8,
      textAlign: 'center'
    },
    detailText: {
      // color: 'white'
    },
    subTitle: {
      // color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      margin: 6
    },
    subtitleContainer: {
      padding: 6,
      marginHorizontal: 12,
      marginVertical: 6,
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      alignItems : 'center'
    }
    , list: {
      width: '80%',
      // justifyContent : 'center'
    },
    listOuterContainer : {
      
      alignItems: 'center',
    }
  })