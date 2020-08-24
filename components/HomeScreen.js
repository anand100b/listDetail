import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'

export const HomeScreen = (props) => {
  const navigation = useNavigation()

  const renderList = ({item}) =>(
    <ListItem id={item.id} 
    amount ={item.amount} 
    category={item.category} />
  )

  const showDetail = (item) =>{

  }
  return (
    <View>
      <Text> {props.text} </Text>
      {/* <Button title="Go to Detail" onPress={()=>{navigation.navigate("Detail")}}/> */}
      <FlatList
      data = {props.data}
      renderItem = {renderList}
      keyExtractor = { item => item.id }
      />
    </View>
  )
}

const ListItem =(props) => {
  return (
    <View style ={homeStyle.item}>
      <Text>{props.category}</Text>
      <Text>${props.amount}</Text>
    </View>
  )
}

const homeStyle = StyleSheet.create({
  item:{
    paddingHorizontal:15,
    paddingVertical:20,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
    flexDirection: 'row',
    justifyContent:"flex-start"
  }
})
