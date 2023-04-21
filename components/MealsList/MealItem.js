import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetail from "../MealDetails";


export default function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {


  const navigation = useNavigation ( )

  function selectMealItemHandler( ){
    
    navigation.navigate( 'MealDetail', {
      mealId : id
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable 
      android_ripple={ {color : '#ccc'}}
      // Adding opcatiy effect on IOS since only android has rippple
      style={({pressed})=> pressed ? styles.buttonPressesd : null }
      onPress = { selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          {/* For images from the web we use 'uri' but local we set source = {require(path)} */}
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>
            {title}
          </Text>
        </View>

        <MealDetail  duration={duration} complexity={complexity} affordability={affordability} />
      </Pressable>
    </View>
  )
}



const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    //overflow hides the shadow since it is outside on IOS
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
     
    backgroundColor: 'white',

    // Shadow 
    elevation: 4,  //shadow on android 
    // shadow on ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.35,
  },
  innerContainer : {
    borderRadius : 8,
    overflow : 'hidden'
  },
  image: {
    width: '100%',
    height: 200,
    // padding : 16,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  },
 
})