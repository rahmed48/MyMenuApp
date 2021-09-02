import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Cart = () => {
  const stateGolbal = useSelector(state => state);
  // const dispatch = useDispatch();

  // const updateName = () => {
  //   dispatch({type: 'SET_NAME', value: 'alfian'});
  // };

  return (
    <View>
      <Text>{stateGolbal}</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
