import React from 'react'
import Button from '../../../components/Button'
import {Text,Image,View, Pressable} from 'react-native'
import {styles} from './styles'

const Splash = () => {
  return (
  <View style={styles.container}>
     <Image resizeMode="contain" style={styles.image} source={require('../../../assets/home.jpg')}/>

     <View style={styles.titleContainer}>

     <Text style={styles.title}> You'll Find </Text>
     <Text style={[styles.title,styles.innerTitle]}>All you need </Text> 
     <Text style={styles.title}>  Here!</Text>
     </View>
     <Button title="Sign Up"/>
  
     <Pressable hitSlop={20}>
     <Text style={styles.btnText}>Sign In</Text>
     </Pressable>
     </View>
  )
}

export default Splash
