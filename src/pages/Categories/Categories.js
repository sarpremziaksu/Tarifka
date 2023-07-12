/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView , View , StyleSheet, FlatList } from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch/useFetch";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import styles from "./Categories.style";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Categories = ({navigation}) => {
    const {error,loading,data} = useFetch(Config.API_CATEGORIES_URL);

    const handleCategorySelect = strCategory => {
        navigation.navigate('Meals' , {strCategory});
    };

    const renderCategory = ({item}) =>  <CategoryCard category={item} onSelect={()=>handleCategorySelect(item.strCategory)}/>;

    if (loading) {
        return <Loading/>
      }
  
      if (error) {
        return <Error/>
      }
  

    return (
        <SafeAreaView>
            <View>
                <FlatList data={data.categories} renderItem={renderCategory} style={styles.container} contentContainerStyle={styles.listContainer}/>
            </View>
        </SafeAreaView>
    );
};


export default Categories;