import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const SearchComponent = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
    <View style={styles.sub_container}>
    <Icon name="arrow-back" size={25} color="#999999" />
    <TextInput value={value} onChangeText={onChangeText} placeholder='Enter text to Search' placeholderTextColor={'#999999'} style={styles.searchBar} />
    </View>
  </View>
  )
}

export {SearchComponent};

const styles = StyleSheet.create({
    container: {
        width:'100%',height:60, backgroundColor:'white', alignItems:'center',justifyContent:'center',borderBottomWidth:0.5,borderColor:'#999999'
    },
    sub_container: {
        width:'90%',height:45,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'white' ,borderRadius:50,shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    searchBar: {
        fontSize: 14,
        margin: 10,
        width: '80%',
        height: 40,
      },
      elevation: 5
})