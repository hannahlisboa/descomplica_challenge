import React, { Component } from 'react';
import { View, Image } from 'react-native';


export default class LogoTitle extends Component {
    render() {
      return (
        <View>
            <Image
                style={{width: 180, height: 40}}
                resizeMode='contain'
                source={require('../../assets/images/logo_descomplica.png')}
            />
        </View>
      );
    }
  }