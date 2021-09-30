import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import PlanetName from './screens/planetName';
import PlanetData from './screens/planetData';
import Homescreen from './screens/Homescreen';

export default class App extends React.Component{
  render(){
  return (
    
      <AppContainer/>

  );
  }
}

const stackNavigator = createStackNavigator({
  Home:{screen:Homescreen,
    navigationOptions:{
      headerShown:false
    }
  },
  Name:{screen:PlanetName},
  Details:{screen:PlanetData}
},
  {
    initialRouteName:'Home'
  }
)

const AppContainer = createAppContainer(stackNavigator);


