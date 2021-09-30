import React from 'react';
import { StyleSheet, Text, View,FlatList,Alert } from 'react-native';
import {ListItem} from 'react-native-elements'
import axios from 'axios'

export default class PlanetName extends React.Component{
  constructor(props){
    super(props)
    this.state={
      listdata : [],
      url : "http://localhost:5000/"
    }
  }
  componentDidMount(){
    this.getPlanet()
  }
  getPlanet=()=>{
    const {url} = this.state
    axios.get(url).then(response=>{
      return this.setState({
        listdata:response.data.data
      })
      console.log(response)
    })
    .catch(error=>{
      Alert.alert(error.message)

    })
  }
  renderItem=({item,index})=>{
    <ListItem
      key={index}
      title={`Planet:${item.name}`}
      subtitle={`Distance From Earth:${item.distance_from_earth}`}
      titleStyle={styles.planettitle}
      bottomDivider
      onPress={()=>{this.props.navigation.navigate('Details',{planet_name:item.name})}}
    />
    console.log(item)

  }

  keyExtractor=(item,index)=>index.toString()

  render(){
    const {listdata} = this.state
    if(listdata.length===0){
      <View>
        <Text>Loading...</Text>
      </View>
    }
    return (
      <View style={styles.container}>
        <Text>Planet World</Text>
        <FlatList
          data={this.state.listdata}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    planettitle:{
      fontStyle:'italic',
      fontSize:24
    },
});