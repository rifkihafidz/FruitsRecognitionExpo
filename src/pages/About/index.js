import React from 'react'
import { Text, View } from 'react-native'
import { Gap } from '../../components';
import { NewLogo } from '../../assets';
import { BackButton } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';


const About = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper.mainWrapper}>
      <View style={{ flexDirection: 'row' }}>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: '#222831', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center', marginRight: 60 }}>ABOUT</Text>
        </View>
      </View>
      <Gap height={6} />
      <View style={styles.wrapper.logoWrapper}>
        <NewLogo width={300} height={150} />
      </View>
      <Gap height={6} />
      <Text style={styles.text.textLogo}>About Fruits Recognition</Text>
      <Gap height={10} />
      <Text style={styles.text.textDescription}>Fruits Recognition merupakan aplikasi yang berfungsi untuk mengklasifikasikan buah-buahan menggunakan kamera smartphone secara real-time, setelah buah berhasil diklasifikasi, aplikasi ini akan menampilkan manfaat buah tersebut dalam bentuk teks dan suara.</Text>
      <Gap height={10} />
      <Text style={styles.text.textDescription}>Buah yang dapat diklasifikasikan:</Text>
      <Gap height={10} />
      <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
        <View style={styles.wrapper.buahWrapper} >
          <Text style={styles.text.textBuah}>APEL</Text>
          <Text style={styles.text.textBuah}>BUAH NAGA</Text>
          <Text style={styles.text.textBuah}>JERUK</Text>
          <Text style={styles.text.textBuah}>LEMON</Text>
          <Text style={styles.text.textBuah}>NANAS</Text>
        </View>
        <View style={styles.wrapper.buahWrapper} >
          <Text style={styles.text.textBuah}>PIR</Text>
          <Text style={styles.text.textBuah}>PISANG</Text>
          <Text style={styles.text.textBuah}>SALAK</Text>
          <Text style={styles.text.textBuah}>SEMANGKA</Text>
          <Text style={styles.text.textBuah}>TOMAT</Text>
        </View>
      </View>
      <View style={styles.wrapper.copyrightWrapper}>
        <Text style={styles.text.textCopyright}>© 2021 Muhammad Rifki Hafidz - All Rights Reserved</Text>
      </View>
    </SafeAreaView >
  )
}

export default About

const styles = ({
  wrapper: {
    copyrightWrapper: {
      flex: 1, flexDirection: 'column-reverse', paddingBottom: 10
    },
    buahWrapper: {
      flex: 1, alignItems: 'center'
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
      color: '#222831', fontWeight: 'bold'
    },
    textCopyright: {
      fontSize: 14, color: '#222831', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center',
    },
    textDescription: {
      fontSize: 15, color: '#222831', textAlign: 'center'
    },
    textLogo: {
      fontSize: 32, color: '#222831', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center',
    },
  }
})
