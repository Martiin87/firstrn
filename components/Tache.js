import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';
const Tache = () => {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(res =>{
          console.log(res.data);
        })
      }, [])
    return (
        <View>
            <View>{res.data.userId}</View>
            <View>{res.data.Id}</View>
            <View>{res.data.title}</View>
            <View>{res.data.completed}</View>
        </View>
    )
}
export default Tache
const styles = StyleSheet.create({
})