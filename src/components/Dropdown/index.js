import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {fonts} from '../../utils';

const Dropdown = () => {
  const [kategori, setKategori] = useState();

  return (
    <View style={styles.container}>
      <View style={{flex: 1.5}}>
        <Text style={styles.text}>Pilih Kategori</Text>
      </View>
      <View style={{flex: 2}}>
        <Picker
          selectedValue={kategori}
          borderRadius={20}
          style={{
            backgroundColor: 'white',
            elevation: 5,
            shadowColor: 'black',
            borderRadius: 20,
          }}
          mode={'dropdown'}
          onValueChange={(itemValue, itemIndex) => setKategori(itemValue)}>
          <Picker.Item label="Kategori" value="all" />
          <Picker.Item label="Makanan" value="makanan" />
          <Picker.Item label="Minuman" value="minuman" />
        </Picker>
      </View>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', padding: 10},
  text: {fontSize: 18, fontFamily: fonts.normal[300]},
});
