import {StyleSheet} from 'react-native'
import {colors} from '../../../utils/colors'




export const  styles=StyleSheet.create({
  container:{
     padding: 24,
     flexDirection:"column",
     justifyContent:'center',
     alignItems:'center',
     height: '100%',
  
  },

  titleContainer:{
    marginVertical:54,
  },
  image:{
    width: '100%',
    height: 200,
  },
  title:{
  fontSize:40,
  fontWeight:'bold',
  textAlign:'center'

  },
  innerTitle:{
    color: colors.red,
    textDecorationLine:"underline",


  },
  btnText:{
    color: colors.red,
    textAlign:"center",
    fontSize:16,
    fontWeight:'bold',
    marginTop:30
  }
})