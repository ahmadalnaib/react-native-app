import {StyleSheet} from 'react-native'
import {colors} from '../../../utils/colors'




export const  styles=StyleSheet.create({
  container:{
     padding: 24,
     
  },
  agreeRole:{
   flexDirection:"row",
   alignItems:"center"
   
   },
   text:{
     marginHorizontal:14
   },
   button:{
 marginVerticalar:20,
   },
   footerText:{
color: colors.red,
textAlign:'center',
marginBottom:56
   },
   footerLink:{
    color: colors.darkGrey,
    fontWeight:'500'  
   }
  
})