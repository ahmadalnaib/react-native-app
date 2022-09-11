import React,{useState} from 'react'
import {Text, ScrollView} from 'react-native'
import AuthHeader from '../../../components/AuthHeader'
import Input from '../../../components/input'
import Button from '../../../components/Button'
import {styles} from './styles'



const Signin = () => {
 
 

  const onSignUp=()=>{

  }

  return (
  <ScrollView style={styles.container}>
 <AuthHeader title="Sign In"/>


 <Input label="E-mail" placeholder="example@gmail.com"/>
 <Input isPassword label="Password" placeholder="********"/>
 
<Button style={styles.button} title="Sign In" />

<Text style={styles.footerText}> Don't have an account? <Text onPress={onSignUp} style={styles.footerLink}>Sign Up</Text></Text>

 </ScrollView>

    
  )
}

export default Signin
