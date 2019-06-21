<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======

import React, { Component } from "react";
import {
 StyleSheet,
 Text,
 View,
 StatusBar,
 TextInput,
 Dimensions,
 Platform,
 ScrollView
} from "react-native";
//import { AppLoading } from "expo";
import ToDo from "./ToDo";

const API_KEY = "6a02793735b1a0345302e08138de80f6";

const { width, height } = Dimensions.get("window");

export default class App extends React.Component {
 constructor(pros){
   super(pros);
   this.state = {
     newToDo: "",
     loadedToDos: false,

     temp: null,
     name: null,
     error: null,
     isLoaded : false
   };
 }

 componentDidMount = () => {
   this._loadToDos;
   navigator.geolocation.getCurrentPosition(position => {
     this._getWeather(position.coords.latitude , position.coords.longitude); //위도,경도
     console.log(this.state.temp);

   }),
   error => {
     this.setState({
       error: error
     });
   };
 };

 _getWeather = (lat, lon) => {
   return fetch(
     `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
   ).then(response =>
       response.json()
     ).then(json => {
       
       this.setState({
         temp: json.main.temp,
         name: json.weather[0].main,
         isLoaded : true
       });
       
       
     });
     
 };

 render() {
   const { newToDo, loadedToDos ,temperature,name,error } = this.state;

   /*   if (!loadedToDos) {
     return <AppLoading />;
   }
 */

   return (
     <View style={styles.container}>
       <StatusBar barStyle="light-content" />
       <Text style={styles.title}>Kawai To Do</Text>
       <View style={styles.card}>
         <TextInput
           style={styles.input}
           placeholder={"New To Do"}
           value={newToDo}
           onChangeText={this._crontolNewToDo}
           placeholderTextColor="#999"
           returnKeyType={"done"}
           autoCorrect={false}
           onSubmitEditing={this._addToDo}
         />

         <ScrollView contentContainerStyle={styles.ToDos}>
           <ToDo text={"hello"} />
         </ScrollView>

         <View style={styles.weather_container}>
           <Text style={styles.weather_text}></Text>
         </View>
       </View>
     </View>
   );
 }
}

_crontolNewToDo = text => {
 this.setState({
   newToDo: text
 });
};

_loadToDos = () => {
 this.setState({
   loadedToDos: true
 });
};

_addToDo = () => {
 const { newToDo } = this.state;
 if (newToDo != "") {
   this.setState({
     newToDo: ""
   });

   this.setState({
     toDos: prevState.toDos + newToDo
   });
 }
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#309FA4",
   alignItems: "center"
 },
 title: {
   color: "#fff",
   fontSize: 30,
   marginTop: 50,
   marginBottom: 30,
   fontWeight: "400"
 },
 card: {
   flex: 1,
   backgroundColor: "#fff",
   width: width - 25,
   borderTopLeftRadius: 13,
   borderTopRightRadius: 13,
   ...Platform.select({
     ios: {
       shadowColor: "rgb(50,50,50)",
       shadowOpacity: 0.5,
       shadowRadius: 5,
       shadowOffset: {
         height: -1,
         width: 0
       }
     },
     android: {
       elevation: 3
     }
   })
 },
 input: {
   padding: 20,
   borderBottomColor: "#bbb",
   borderBottomWidth: 1,
   fontSize: 20
 },
 ToDos: {
   alignItems: "center"
 },
 weather_container: {
   flex: 3,
   backgroundColor: "#DADADA",
   margin: 10
 },
 weather_text: {
   color: "#000",
   fontSize: 20
 }
});
>>>>>>> b0c5c421aadb3c09a2cd3ba18f179d4c541297fb
