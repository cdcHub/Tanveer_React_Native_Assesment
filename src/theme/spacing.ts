import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const spacing = {
  small: width * 0.01,
  medium: width * 0.02,
  large: width * 0.04,
};
export default spacing;
