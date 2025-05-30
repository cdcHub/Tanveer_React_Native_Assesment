import {StyleSheet} from 'react-native';
import colors from './colors';

const appStyles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  fullWidth: {width: '100%'},
});
export default appStyles;
