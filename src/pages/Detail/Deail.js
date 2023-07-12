/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React,{useCallback} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking , ScrollView , Alert } from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Detail = ({ route }) => {
  const { strMeal } = route.params;
  const { error, loading, data } = useFetch(`${Config.API_DETAIL_URL}${strMeal}`);
  const mealData = data?.meals?.[0];


  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Can't handle this URL: ${url}`);
      }
    }, [url]);

    return <TouchableOpacity style={styles.button} onPress={handlePress}>{children}</TouchableOpacity>;
  };

  if (loading) {
    return <Loading/>
  }

  if (error || !mealData) {  // mealData kontrolü eklendi
    return <Error/>
  }

  return (
    <ScrollView style={styles.container}>
    <Image source={{ uri: mealData.strMealThumb }} style={styles.image} />
    <Text style={styles.title}>{mealData.strMeal}</Text>
    <Text style={styles.subtitle}>{mealData.strArea}</Text>
    <View style={styles.separator}/>
    <Text style={styles.instructions}>{mealData.strInstructions}</Text>
    <OpenURLButton url={mealData.strYoutube}>
      <Text style={styles.buttonText}>Watch on Youtube</Text>
    </OpenURLButton>
  </ScrollView>
  );
};


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    image: {
      width: '100%',
      height: 200,
    },
    title: {
      fontSize: 24,
      color: 'darkred',
      fontWeight: 'bold',
      paddingTop: 10,
    },
    subtitle: {
      fontSize: 18,
      color: 'darkred',
      paddingTop: 5,
    },
    separator: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      marginVertical: 10,
    },
    instructions: {
      fontSize: 16,
      color: 'black',
    },
    button: {
      backgroundColor: 'red',
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom : 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });
  
  export default Detail;