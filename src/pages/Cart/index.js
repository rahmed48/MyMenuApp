import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {ICDecrement, ICIncrement, ICTrash} from '../../assets';
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
    if (item[1] > 0) {
      return (
        <View>
          <View style={styles.itemContainer}>
            <Image
              style={styles.image}
              resizeMode={'cover'}
              source={{
                uri: `https://e-menus.herokuapp.com/${item[0].imageUrl}`,
              }}
            />
            <View style={{padding: 10}}>
              <Text style={styles.titleItem}>{item[0].nameItem}</Text>
              <View style={{flexDirection: 'row'}}>
                <ICTrash
                  style={{marginLeft: 5, marginTop: 20}}
                  onPress={() =>
                    Alert.alert(
                      item[0].nameItem,
                      `Yakin Hapus ${item[0].nameItem} Dari Pesanan`,
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
                <View
                  style={{flexDirection: 'row', marginLeft: 80, marginTop: 5}}>
                  <TouchableOpacity
                    style={{marginTop: 7}}
                    onPress={() =>
                      dispatch(
                        {
                          type: 'DECREMENT',
                          payload: item,
                        },
                        console.log(item),
                      )
                    }>
                    <ICDecrement />
                  </TouchableOpacity>
                  <Gap width={10} />
                  <Text style={styles.count}>{item[1]}</Text>
                  <Gap width={10} />
                  <TouchableOpacity
                    style={{marginTop: 7}}
                    onPress={() =>
                      dispatch(
                        {
                          type: 'INCREMENT',
                          payload: item,
                        },
                        console.log(item),
                      )
                    }>
                    <ICIncrement />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <Gap height={20} />
        </View>
      );
    }
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
          keyExtractor={item => item[0]._id}
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
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  titleItem: {fontSize: 20, fontFamily: fonts.normal[600]},
  count: {fontSize: 22, fontFamily: fonts.normal[600]},
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
