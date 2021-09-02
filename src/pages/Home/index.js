import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown, Item, Search} from '../../components';
import Gap from '../../components/Gap';
import {colors, fonts} from '../../utils';

const Home = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Selamat Datang</Text>
      <Text style={styles.subtitle}>
        Hi, Silahkan Pilih Menu Yang Kamu Sukai dan Pesan Sekarang. Selamat
        Menikmati
      </Text>
      <Gap height={20} />
      <Search
        placeholder="Cari menu pilihanmu disini..."
        onPress={() => alert('Halo')}
      />
      <Gap height={10} />
      <Dropdown />
      <Item />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
    padding: 15,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.normal[700],
    fontSize: 20,
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: fonts.normal[400],
    fontSize: 15,
  },
});
