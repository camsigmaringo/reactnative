
import {StatusBar} from 'expo-status-bar';
import React, { Component } from 'react';
import { 
  //StyleSheet,
  Text,
   View, 
   //SafeAreaView,
   } from 'react-native';
   import {Screen_Import} from './Screens/Screens_Import'
import {Screen_viewIportedCards} from './Screens/Screen_viewIportedCards'
import {Screen_FlatList} from './Screens/Screen_FlatList'
   //import AsyncStorage from '@react-native-async-storage/async-storage';

//    export default class App extends React.Component {
//      constructor () {
//        super ();
//      }
   

  

//    componentDidMount ();

//    async storageStirng () {
//      try {
//        await AsyncStorage.setItem ('@mystring', value);
//      }catch (error){
//        console.log (mal)
//      }
//    }

   

//    }



// class App extends component {
  

// render() {
//   return(
// <View style={{felx:1, felxDirection: 'column', justifyContent: 'flex-end'}} >
// <TouchableOpacity onPress= {() => this.storageStirng('hola mundo')}>


// <Text> guardar saludo </Text>
// </TouchableOpacity>

// <StatusBar style = "auto" /> 
// </View>


//   );
  
//   }
// }
class App extends Component {
  render() {
    return (
      <Screen_FlatList/>
    )
  }
}

export default App;