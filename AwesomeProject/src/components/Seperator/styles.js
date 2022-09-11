import {StyleSheet} from 'react-native'
import {colors} from '../../utils/colors'


export const styles=StyleSheet.create({

  container:{
    flexDirection:"row",
    alignItems:"center",
    marginVertical:20
    
  },
  line:{
  height: 1,
  backgroundColor:colors.ligthGrey,
  flex: 1,
  },
  text:{
 color: colors.red,
 fontWeight:"500",
 marginVertical:8
  }

})