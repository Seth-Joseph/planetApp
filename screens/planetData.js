import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';

export default class PlanetData extends React.Component{
  constructor(props){
    super(props)
    this.state={
      details : {},
      imagePath:'',
      url : "http://localhost:5000/planet?name=${this.props.navigation.getParam('planet_name')}"
    }
  } 
  componentDidMount(){
    this.getDetails()
  }
  getDetails=()=>{
    const {url} = this.state
    axios.get(url).then(response=>{
      this.setDetails(response.data.data)
      console.log(response)
    })
    .catch(error=>{
      Alert.alert(error.message)

    })
  }
  setDetails=planetDetails=>{
    const planetType = planetDetails.planet_type;
    var imagePath = ''
    switch(planetType){
      case 'Gas Giant':imagePath = require('../assets/gas_giant.png')

      break;

      case 'Terrestrial':imagePath = require('../assets/terrestrial.png')

      break;

      case 'Super Earth':imagePath = require('../assets/super_earth.png')

      break;

      case 'Neptune-like':imagePath = require('../assets/neptune_like.png')

      break;

      default:
        imagePath = require('../assets/gas_giant.png')
    }
    this.setState({
      imagePath:imagePath,
      details:planetDetails
    })
  }

  render(){
    const {imagePath,details} = this.state

    if(details.specifications){
    return (
      <View style={styles.container}>
        <Card
        title = {details.name}
        image = {imagePath}
        imageProps = {{width:'100%',resizeMode:'contain'}}
        >
          <View>
            <Text>{'Distance From Earth : ${details.distance_from_earth}'}</Text>  
            <Text>{'Planet Mass: ${details.planet_mass}'}</Text>
            <Text>{'Gravity : ${details.gravity}'}</Text>
            <Text>{'Radius : ${details.planet_radius}'}</Text>
              <View>
                <Text>{details.specifications?`Specifications :`:""}</Text>
                {details.specifications.map((item,index)=>{
                  <Text key={index.toString()}>{item}</Text>
                })}
              </View>
          </View>          
        </Card>
      </View>
    );
    }
  }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});