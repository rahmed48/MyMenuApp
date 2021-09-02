import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.magnify} onPress={onPress}>
      <MaterialCommunityIcons name="magnify" size={30} />
    </TouchableOpacity>
  );
};

export default SearchButton;

const styles = StyleSheet.create({magnify: {position: 'absolute', right: 10}});
