/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import MealsCard from '../../components/MealCard/MealsCard';
import styles from './Meals.style';
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Meals = ({route,navigation}) => {
    const {strCategory} = route.params;
    const {error,loading,data} = useFetch(`${Config.API_MEALS_URL}${strCategory}`);

    const handleMealSelect = strMeal => {
        navigation.navigate('Detail', {strMeal});
    };

   const renderMeals = ({item}) => <MealsCard meal = {item} onSelect={()=>handleMealSelect(item.strMeal)}/>;
 
   if (loading) {
    return <Loading/>
  }

  if (error) {
    return <Error/>
  }

    return (
        <FlatList data={data.meals} renderItem={renderMeals} style={styles.container}/>
    );
};

export default Meals;
