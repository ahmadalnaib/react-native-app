import React from 'react'
import {   TouchableOpacity, View ,Image} from 'react-native'
import { styles } from './styles';

const CheckBox= ({checked,onCheck}) =>{
 

  return(
    <TouchableOpacity activeOpacity={0.6} onPress={()=>onCheck(!checked)} style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image style={styles.CheckIcon} source={require('../../assets/tick.png')}/>
        </View>
      ): null}
    </TouchableOpacity>
  )
}

export default React.memo(CheckBox);