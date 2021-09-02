import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Alert,
  Modal,
} from 'react-native';
import axios from 'axios';
import {colors, fonts} from '../../utils';
import {ICInfo} from '../../assets';
import {ICPlus} from '../../assets/icon';
// import Modal from 'react-native-modal';

const Item = ({kategori, cari}) => {
  const [item, setItem] = useState();

  axios
    .get('https://e-menus.herokuapp.com/api/v1/menu/item')
    .then(response => {
      setItem(response.data.item);
    })
    .catch(err => console.log('err:', err));
  // console.log(DATA);
  // console.log(itemnya);

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.image}
          resizeMode={'cover'}
          source={{
            uri: `https://e-menus.herokuapp.com/${item.imageUrl}`,
          }}
        />
        <View style={styles.blackContainer} />
        <ICPlus
          style={styles.plus}
          onPress={() =>
            Alert.alert(
              item.nameItem,
              `Masukkan ${item.nameItem} Ke Pesanan`,
              [
                {
                  text: 'Tidak',
                },
                {
                  text: 'Ya',
                  onPress: () => Alert.alert('Berhasil Di Masukan'),
                },
              ],
              // {
              //   cancelable: true,
              //   onDismiss: () =>
              //     Alert.alert(
              //       'This alert was dismissed by tapping outside of the alert dialog.',
              //     ),
              // },
            )
          }
        />
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.text,
              {
                fontFamily: fonts.normal[600],
              },
            ]}>
            {item.nameItem}
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontFamily: fonts.normal[400],
              },
            ]}>
            Rp. {item.harga}
          </Text>
        </View>
        <ICInfo
          style={{position: 'absolute', bottom: 10, right: 10}}
          onPress={() => Alert.alert(item.nameItem, item.harga.toString())}
        />
      </View>
    );
  };
  return (
    <FlatList
      data={item}
      columnWrapperStyle={{justifyContent: 'space-around'}}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={item => item._id}
    />
  );
};

export default Item;

const styles = StyleSheet.create({
  itemContainer: {
    height: 140,
    width: 140,
    marginBottom: 25,
    backgroundColor: 'gray',
    borderRadius: 25,
    elevation: 5,
    shadowColor: colors.primary,
  },
  image: {width: '100%', height: '100%', borderRadius: 25},
  blackContainer: {
    width: '100%',
    height: '35%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 25,
    justifyContent: 'center',
    opacity: 0.6,
    backgroundColor: colors.primary,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
  },
  text: {
    fontSize: 13,
    paddingHorizontal: 12,
    color: colors.text.secondary,
  },
  plus: {position: 'absolute', right: 15, top: 15},
});
