import {StyleSheet} from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom:20
  },
  label: {
    marginBottom:8,
    color: colors.red,
    fontSize:16,
    fontWeight:'500'
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius:14,
    flexDirection:'row',
    alignItems:'center'
  },
  input: {
    
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius:14,
    flex: 1,
    
  },
  image:{
    width:24,
    height: 24,
    marginHorizontal:16,
    position: 'absolute',
    top: -30,
    left: 280,
    
  }
});
