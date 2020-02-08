import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import AllEvents from './src/AllEvents';
import Icon from 'react-native-vector-icons/FontAwesome';


import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import Detail from './src/Detail';
import Maps from './src/Maps';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const Details=createStackNavigator({
  Details:{
    screen:Detail
  },
  Maps:{
    screen:Maps
  }
},{
  headerMode:'none'
})



const Events=createStackNavigator({
  Event:{
    screen:AllEvents
  }
},{
  headerLayoutPreset:'center',
  defaultNavigationOptions:() => ({
    headerTitle: <Image source={{uri:'https://smashinghub.com/wp-content/uploads/2011/09/36-oil.jpg'}}  style={{width:260,height:54}}/>
  } )
})

const BottomTabs=createBottomTabNavigator({
  Events:{
    screen:Events,
    navigationOptions:({navigation})=>({
      tabBarIcon:({focused,tintColor}) =>{
        return <Icon name="music" color={tintColor} size={20} />
      }
    })
  },
  Detail:{
    screen:Details,
    navigationOptions:({navigation})=>({
      tabBarIcon:({focused,tintColor}) =>{
        return <Icon name="strikethrough" color={tintColor} size={20} />
      }
    })
    
  }
},{
  tabBarOptions:{
    activeTintColor:'#ff4757',
    inactiveTintColor:'black',
    labelStyle:{
      fontSize:13
    },
    style:{
      backgroundColor:'#86dfe5'

    }
  }
})


export default createAppContainer(createSwitchNavigator({
  Events:Events,
  AppStack:BottomTabs
}));