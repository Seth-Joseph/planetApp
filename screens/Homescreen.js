import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-paper';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

export default class Homescreen extends React.Component {

  gotoplanetNames=()=>{
   this.props.navigation.navigate('Name') 
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/bg.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <Card style={styles.card}>
            <Text style={styles.title}>Hello!</Text>
            <Text style={styles.subtext}>
              Want to know and explore all things about exoplanets in our space?
            </Text>
            <TouchableOpacity style={styles.btn}
              onPress={this.gotoplanetNames}
              >
              <Text style={styles.text}>Explore Now</Text>
            </TouchableOpacity>
          </Card>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
  title: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -40,
    fontFamily: 'sans-serif',
  },
  card: {
    backgroundColor: 'white',
    marginTop: '100%',
    marginLeft: '5%',
    padding: 50,
    width: '90%',
    borderRadius: 15,
  },
  subtext: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    fontFamily: 'sans-serif',
  },
  btn: {
    backgroundColor: '#E35B5B',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#E35B5B',
    marginTop: 20,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: 24,
    textAlign: 'center',
  },
});
