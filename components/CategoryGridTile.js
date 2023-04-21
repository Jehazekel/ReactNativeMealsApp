import { Platform, Pressable, StyleSheet, Text, View } from "react-native";



export default function CategoryGridTile({ title, color, onPress }) {

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({pressed})=>
         [styles.button, pressed ? styles.buttonPressesd : null]
        }

        onPress = {onPress}
      >
        <View style={[styles.innerContainer,  {backgroundColor : color}]}>
          <Text > {title} </Text>
        </View>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: 'white',

    // Shadow 
    elevation: 4,  //shadow on android 
    // shadow on ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,

    //overflow hides the shadow since it is outside of 
    overflow : Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  button: {
    flex: 1,

  },
  buttonPressesd : { 
    opacity : 0.5 
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
})