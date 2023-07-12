/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // yatay düzlemde hizalamak için
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 10,
        borderRadius: 50, // sol tarafı daha oval yapmak için
        borderBottomRightRadius: 10, // sağ alt tarafı hafif oval yapmak için
        borderTopRightRadius: 10, // sağ üst tarafı hafif oval yapmak için
        elevation: 2,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35, // fotoğrafı tamamen oval yapmak için
        marginRight: 10, // fotoğraf ile metin arasındaki boşluğu ayarlamak için
    },
    textContainer: {
        justifyContent: 'center', // metni dikey eksende merkeze yerleştirmek için
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color:'black',
    },
});

export default styles;