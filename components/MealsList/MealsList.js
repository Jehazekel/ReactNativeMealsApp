import { FlatList, StyleSheet, Text, View } from "react-native"
import MealItem from "./MealItem"



export default function MealsList ({displayMeals } ){

  
  function renderMealItem(itemData) {

    const item = itemData.item

    const mealProps = {
      id : item.id,
      title: itemData?.item.title,
      imageUrl: itemData?.item.imageUrl,
      duration: itemData?.item.duration,
      complexity: itemData?.item.complexity,
      affordability: itemData?.item.affordability
    }
    return (
      <MealItem
        {...mealProps}
      />
    )
  }

  
  return (
    <View style={styles?.conatiner}>
      <Text > Meals Overview Screen  </Text>
      <FlatList data={displayMeals}

        keyExtractor={item => item.id} // to get a unique key 
        renderItem={renderMealItem}
      />

    </View>
  )
}



const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 16
  }
})