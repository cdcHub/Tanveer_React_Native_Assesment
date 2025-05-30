import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const fontsize = {
  h1: width * 0.07,
  h2: width * 0.05,
  h3: width * 0.04,
  h4: width * 0.03,
};
export default fontsize;
