/**
 * Revision History:
 *     Initial: 2018/1/24     Li Gang
 */

import { Dimensions } from 'react-native';

const _width = 640;
const _height = 1138;

const Styles = {
  ScreenWidth: Dimensions.get('window').width,
  ScreenHight: Dimensions.get('window').hight,

  Height: (x) => {
    return x * Dimensions.get('window').height / _height; //eslint-disable-line
  },

  Width: (y) => {
    return y * Dimensions.get('window').width / _width; //eslint-disable-line
  },
};

export default Styles;
