import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserComponent = ({name, age, count}) => {
  return (
    <View style={styles.container}>
    <View style={styles.sub_container}>
    <Text style={styles.text_style}>Name: {name}</Text>
    <Text style={styles.text_style}>Age: {age}</Text>
    </View>
    <Text style={styles.text_style}>Count: {count} </Text>
  </View>
  )
}

export {UserComponent};

const styles = StyleSheet.create({
    container: {
        width:'90%',minHeight:30,alignItems:'center', backgroundColor:'#D3D3D3',alignSelf:'center',margin:10,padding:8,borderRadius:10,
    },
    sub_container: {
        width:'90%',flexDirection:'row',justifyContent:'space-around'
    },
    text_style: {
        width:'40%',
        textAlign:'center',
        fontWeight:'bold'
    }

})