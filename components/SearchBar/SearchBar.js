import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = props => {
    return (
        <View style={styles.container} >
            <TextInput style={styles.input}
                placeholder="Ara..."
                onChangeText={props.onSearch}
            />
        </View>
    );
}

export default SearchBar;