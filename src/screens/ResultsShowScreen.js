import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking } from 'react-native';
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get('/'+id);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style = { styles.title }>
                {result.name}
            </Text>
            <FlatList
                horizontal = { true }
                showsHorizontalScrollIndicator = { false }
                data = { result.photos }
                keyExtractor = {photo => photo}
                renderItem = {({item}) => {
                    return <Image style = {styles.image} source = {{ uri: item }} />
                }}
                
            />
            <View style = { styles.containerStyle1 }>
                <View style = { styles.containerStyle2 }>
                    <Text>Address: { result.location.display_address }</Text>
                </View>
                <View style = { styles.containerStyle2 }>
                    <Text>Phone: </Text>
                    <TouchableOpacity onPress = {() => {
                        Linking.openURL('tel:+905437244216')
                    }}>
                        <Text>{result.display_phone}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        borderRadius: 4,
        marginVertical: 5,
        marginLeft: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        backgroundColor: '#441F1E',
        color: 'white',
    },
    containerStyle1: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width:0, height:2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    containerStyle2: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
});

export default ResultsShowScreen;