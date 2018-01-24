/**
 *  2018/1/24 Li Gang
 */

import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';

import Styles from '../../res/Styles';

const renderSlide = ({ item }) => {
  return (
    <Image
      source={{ uri: item }}
      style={styles.slide}
    />
  );
};

class Carousels extends Component {
  render() {
    return (
      <View style={styles.carousel}>
        <Carousel
          autoplay
          loop
          autoplayDelay={500}
          autoplayInterval={2000}
          data={this.props.pics}
          renderItem={renderSlide}
          sliderWidth={Styles.ScreenWidth}
          itemWidth={Styles.ScreenWidth}
        />
      </View>
    );
  }
}

const styles = {
  carousel: {
    height: Styles.Height(320),
  },

  slide: {
    width: Styles.Width(640),
    height: Styles.Height(320),
  },
};

export default connect(({ carousel }) => ({ pics: carousel.pics }))(Carousels);
