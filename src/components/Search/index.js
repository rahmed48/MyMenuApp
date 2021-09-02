import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../utils';
import SearchButton from '../SearchButton';

const Search = ({placeholder, onPress}) => {
  return (
    <View style={styles.container}>
      <SearchButton onPress={onPress} />
      <TextInput placeholder={placeholder} style={styles.placeholder} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    height: 43,
    width: '100%',
    backgroundColor: colors.secondary,
    borderRadius: 50,
    elevation: 5,
    shadowColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholder: {paddingHorizontal: 20},
});
