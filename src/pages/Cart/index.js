import React from 'react';
import {StyleSheet, Text, View, FlatList, Image, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {ICTrash} from '../../assets';
import Gap from '../../components/Gap';
import {colors, fonts} from '../../utils';
import {connect, useDispatch} from 'react-redux';
import numeral from 'numeral';

const Cart = () => {
  const dispatch = useDispatch();
  const harga = [];
  const total = [];
  const state = useSelector(state => state);
  const stateGlobal = useSelector(state => state.cartItems);
  const count = useSelector(state => state.count);
  console.log(state);
  // console.log(stateGlobal);
  // console.log(count);

  for (let i = 0; i < stateGlobal.length; i++) {
    harga.push(stateGlobal[i].harga);
  }
  for (let i = 0; i < harga.length; i++) {
    total.push(harga[i] * count);
  }

  const totalHarga = harga.reduce((val, nilaiSekarang) => {
    return val + nilaiSekarang;
  }, 0);
  const iniHarganya = numeral(totalHarga).format('0,0');

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.itemContainer}>
          <Image
            style={styles.image}
            resizeMode={'cover'}
            source={{
              uri: `https://e-menus.herokuapp.com/${item.imageUrl}`,
            }}
          />
          <View>
            <Text style={styles.titleItem}>{item.nameItem}</Text>
            <Text style={styles.count}>{count}</Text>
            <ICTrash
              onPress={() =>
                Alert.alert(
                  item.nameItem,
                  `Yakin Hapus ${item.nameItem} Dari Pesanan`,
                  [
                    {
                      text: 'Tidak',
                    },
                    {
                      text: 'Ya',
                      onPress: () =>
                        dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: item,
                        }),
                    },
                  ],
                )
              }
            />
            {/* <Text style={styles.count}>{count}</Text> */}
          </View>
        </View>
        <Gap height={20} />
      </View>
    );
  };

  if (stateGlobal.length > 0) {
    return (
      <View style={styles.page}>
        <View style={styles.hargaContainer}>
          <Text style={[styles.harga, {fontSize: 25}]}>Total Pembayaran</Text>
          <Text style={[styles.harga, {fontSize: 30}]}>Rp. {iniHarganya}</Text>
        </View>
        <Gap height={20} />
        <Text style={styles.order}>Order Menu</Text>
        <Gap height={30} />
        <FlatList
          data={stateGlobal}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
    );
  }
  return (
    <View>
      <Text>Pilih Menu Dulu..</Text>
    </View>
  );
};

export default connect()(Cart);

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1, padding: 20},
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: colors.cart,
    borderRadius: 15,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  titleItem: {fontSize: 20, fontFamily: fonts.normal[600], padding: 15},
  count: {fontSize: 20, fontFamily: fonts.normal[600], marginLeft: 150},
  hargaContainer: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 120,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  harga: {
    color: colors.text.secondary,
    fontFamily: fonts.normal[600],
  },
  order: {
    color: colors.text.primary,
    fontFamily: fonts.normal[600],
    fontSize: 18,
  },
});
