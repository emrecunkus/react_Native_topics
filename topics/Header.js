import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {headerText} </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: 'orange',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  }

};

export default Header;