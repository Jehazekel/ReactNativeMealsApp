import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import MealDetailScreen from './components/MealDetailScreen';
import MealOverviewScreen from './components/MealOverviewScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavoritesScreen';

import { Ionicons } from '@expo/vector-icons'
import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

// Stack Navigation, navigate to & back from pages using a stack approach 
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator(); //returns an object with two components "screen" & "navigator"

function MyDrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignItems: 'center'
        },
        // Adding style to drawer content section
        sceneContainerStyle: { backgroundColor: '#3f2f25' },//'#00ffbb'}
        drawerContentStyle: { backgroundColor: '#351401' },//'#00ffbb'}
        drawerInactiveTintColor: 'white', //changes the text color
        drawerActiveTintColor: '#351401', //changes the text color
        drawerActiveBackgroundColor: '#e4baa1'
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons name='list' size={size} color={color} />
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name='star' size={size} color={color} />
        }}
      />
    </Drawer.Navigator>
  )
}


export default function App() {


  return (


    <View style={styles.container}>
      <StatusBar style='light' />
      {/* Using redux as an alternative for context Provider  */}
      <Provider  store={store}> 

      {/* <FavoritesContextProvider >  */}

        {/* Wrapp the section of the app that uses Navigation woth NavigationContainer */}
        <NavigationContainer>


          <Stack.Navigator
            initialRouteName="All Categories"
            screenOptions={{
              title: ' All Catgories',
              headerStyle: { backgroundColor: '#58940f' },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                alignItems: 'center'
              },
              // Adding style to stack content section
              contentStyle: { backgroundColor: '#3f2f25' }
            }}
          >
            <Stack.Screen
              name="My Nested Nav"
              component={MyDrawerNavigator}
              options={{
                title: 'My Nested Nav Title',
                headerShown: false
              }}
              // options={{
                //   title : ' All Catgories',
                //   headerStyle : { backgroundColor : '#351401'},
                //   headerTintColor: '#fff',
                //   headerTitleStyle: {
                  //     fontWeight: 'bold',
                  //     alignItems : 'center'
                  //   },
                  // }}
                  />

            {/* <Stack.Screen
            name="Meals Categories"
            component={CategoriesScreen}
            options={{
              title : ' All Catgories',
              headerStyle : { backgroundColor : '#351401'},
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold',
              alignItems : 'center'
            },
          }}
          />
        */}

            <Stack.Screen name="Meals Overview" component={MealOverviewScreen}
            // options = { ({route, navigation})=>{
              //   //setting the params as the title (via on navigation.route() )
              //   const catId = route.params.categoryId;
              //   return {
                //     title : catId
            //   };
            // }}
            />

            <Stack.Screen name="MealDetail"
              component={MealDetailScreen}
              options={{
                title: 'Meal Detail',
                
                // headerRight : ()=>  { return <Button title='Tap me!' onPress={null} /> },
              }}
              />
          </Stack.Navigator>


        </NavigationContainer>
      {/* </FavoritesContextProvider> */}
      </Provider>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
