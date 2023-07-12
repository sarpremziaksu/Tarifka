/* eslint-disable prettier/prettier */
import Lottie from 'lottie-react-native';
import React from 'react';

function Loading() {
    return (
        <Lottie source={require('../../assets/loading.json')} autoPlay loop />
      );
};
export default Loading;