import React from 'react'
import { Text, View } from 'react-native'
import { Gap } from '../../components';
import { NewLogo } from '../../assets';
import { BackButton } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';


const Guide = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper.mainWrapper}>
      <View style={{ flexDirection: 'row' }}>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: '#222831', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center', marginRight: 60 }}>GUIDE</Text>
        </View>
      </View>
      <Gap height={6} />
      <View style={styles.wrapper.logoWrapper}>
        <NewLogo width={300} height={150} />
      </View>
      <Gap height={6} />
      <Text style={styles.text.textLogo}>Cara Menggunakan Aplikasi</Text>
      <Gap height={10} />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.wrapper.buahWrapper}>
          <Text style={styles.text.textBuah}>1. Pilih 'Scan' pada menu utama</Text>
          <Text style={styles.text.textBuah}>2. Arahkan kamera ponsel Anda ke buah yang ingin di klasifikasi</Text>
          <Text style={styles.text.textBuah}>3. Ambil gambar buah dengan cara menekan ikon kamera</Text>
          <Text style={styles.text.textBuah}>4. Aplikasi akan mengklasifikasikan gambar buah yang telah di ambil</Text>
          <Text style={styles.text.textBuah}>5. Hasil klasifikasi dan manfaat buah akan ditampilkan di layar ponsel Anda</Text>
        </View>
      </View>
      <View style={styles.wrapper.copyrightWrapper}>
        <Text style={styles.text.textCopyright}>© 2021 Muhammad Rifki Hafidz - All Rights Reserved</Text>
      </View>
    </SafeAreaView >
  )
}

export default Guide

const styles = ({
  wrapper: {
    copyrightWrapper: {
      flex: 1, flexDirection: 'column-reverse', paddingBottom: 10
    },
    buahWrapper: {
      flex: 1, alignItems: 'flex-start', paddingHorizontal: 25
    },
    logoWrapper: {
      alignItems: 'center'
    },
    mainWrapper: {
      backgroundColor: '#A6E3E9',
      flex: 1,
    },
  },
  text: {
    textBuah: {
      color: '#222831', fontWeight: 'bold', textAlign: 'left', marginBottom: 8, fontSize: 16
    },
    textCopyright: {
      fontSize: 14, color: '#222831', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center',
    },
    textDescription: {
      fontSize: 15, color: '#222831', textAlign: 'center', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10,
    },
    textLogo: {
      fontSize: 28, color: '#222831', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center',
    },
  }
})
