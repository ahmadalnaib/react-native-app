import React,{useState} from 'react'
import {Text, ScrollView, SafeAreaView} from 'react-native'
import AuthHeader from '../../../components/AuthHeader'
import Input from '../../../components/input'
import Button from '../../../components/Button'
import {styles} from './styles'



const Signin = ({navigation}) => {
 
  const onSignUp=()=>{
   navigation.navigate('Signup')
  }

  const onBack=()=>{
  navigation.goBack();
  }

  return (
    <SafeAreaView>
  <ScrollView style={styles.container}>
 <AuthHeader onBackPress={onBack} title="Sign In"/>


 <Input label="E-mail" placeholder="example@gmail.com"/>
 <Input isPassword label="Password" placeholder="********"/>
 
<Button style={styles.button} title="Sign In" />

<Text style={styles.footerText}> Don't have an account? <Text onPress={onSignUp} style={styles.footerLink}>Sign Up</Text></Text>

 </ScrollView>
 </SafeAreaView>
    
  )
}

export default Signin
