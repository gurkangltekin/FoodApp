import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style = {styles.backgroundStyle}>
            <Feather name = "search" style = { styles.iconStyle } />
            <TextInput 
                style = { styles.inpuStyle } 
                placeholder = 'Search' 
                value = { term }
                onChangeText = { onTermChange }
                autoCapitalize = "none"
                autoCorrect = { true }
                onEndEditing = { onTermSubmit }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        backgroundColor: '#ECEAEB',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inpuStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;