import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data"



export default function CategoriesScreen({ navigation }){ //navigation is provided by react navigation

  function CategoryItem ( itemData ){

    //used to get render an item
    function onPressHandler( ){
      navigation.navigate('Meals Overview', {
        categoryId : itemData?.item.id
      })
    }


    return (
      <CategoryGridTile 
      title={itemData?.item?.title}
      color={ itemData?.item?.color}
      onPress = { onPressHandler}
      />
    )
  }


  return ( 
    <FlatList
    data={CATEGORIES}
    key= { item => item.id }
    renderItem = { itemData => CategoryItem(itemData)}
    numColumns={ 2}
    horizontal={false}
    />
  );
}