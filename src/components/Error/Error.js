/* eslint-disable prettier/prettier */
import Lottie from 'lottie-react-native';
import React from 'react';

function Error(){
    return (
        <Lottie source={require('../../assets/error.json')} autoPlay loop />
      );
};

export default Error;