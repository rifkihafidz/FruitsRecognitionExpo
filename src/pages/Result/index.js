import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Gap } from '../../components';
import { IconHome, IconPlay, IconStop } from '../../assets';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';
import { Apel, BuahNaga, Jeruk, Lemon, Nanas, Pir, Pisang, Salak, Semangka, Tomat } from "../../helpers/sounds";

const Result = ({ route, navigation }) => {
  const { imageCaptured, presentedFruit } = route.params;
  const sound = new Audio.Sound();
  const playSound = async () => {
    sound.playAsync();
  }
  const stopSound = async () => {
    sound.stopAsync();
  }
  const benefits = (presentedFruit) => {
    if (presentedFruit === 'Apel') {
      sound.loadAsync(Apel);
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Melawan penyakit asma</Text>
        <Text style={styles.text.benefit}>2. Menjaga kesehatan tulang</Text>
        <Text style={styles.text.benefit}>3. Menjaga kesehatan jantung</Text>
        <Text style={styles.text.benefit}>4. Mencegah terjadinya kanker</Text>
        <Text style={styles.text.benefit}>5. Kaya akan kandungan antioksidan</Text>
        <Text style={styles.text.benefit}>6. Membantu menurunkan berat badan</Text>
        <Text style={styles.text.benefit}>7. Menurunkan risiko penyakit diabetes</Text>
        <Gap height={10} />
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => playSound()}>
            <IconPlay width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => stopSound()}>
            <IconStop width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => { navigation.navigate('Home'); stopSound(); }}>
            <IconHome width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    } else if (presentedFruit === 'Buah Naga') {
      sound.loadAsync(BuahNaga);
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Menurunkan berat badan</Text>
        <Text style={styles.text.benefit}>2. Meredakan batuk dan flu</Text>
        <Text style={styles.text.benefit}>3. Mengurangi risiko kanker</Text>
        <Text style={styles.text.benefit}>4. Mengontrol kadar gula darah</Text>
        <Text style={styles.text.benefit}>5. Meningkatkan kesehatan jantung</Text>
        <Text style={styles.text.benefit}>6. Meningkatkan sistem kekebalan tubuh</Text>
        <Text style={styles.text.benefit}>7. Meningkatkan kesehatan sistem pencernaan</Text>
        <Gap height={10} />
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => playSound()}>
            <IconPlay width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => stopSound()}>
            <IconStop width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => { navigation.navigate('Home'); stopSound(); }}>
            <IconHome width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    } else if (presentedFruit === 'Jeruk') {
      sound.loadAsync(Jeruk);
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Mencegah anemia</Text>
        <Text style={styles.text.benefit}>2. Meningkatkan fungsi otak</Text>
        <Text style={styles.text.benefit}>3. Mengurangi risiko diabetes</Text>
        <Text style={styles.text.benefit}>4. Memelihara sistem pencernaan</Text>
        <Text style={styles.text.benefit}>5. Membantu menjaga tekanan darah</Text>
        <Text style={styles.text.benefit}>6. Memelihara kesehatan rambut dan kulit</Text>
        <Text style={styles.text.benefit}>7. Menjaga kesehatan ibu hamil dan janinnya</Text>
        <Gap height={10} />
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => playSound()}>
            <IconPlay width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => stopSound()}>
            <IconStop width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => { navigation.navigate('Home'); stopSound(); }}>
            <IconHome width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    } else if (presentedFruit === 'Lemon') {
      sound.loadAsync(Lemon);
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Menjaga sistem imun</Text>
        <Text style={styles.text.benefit}>2. Menjaga kesehatan otot</Text>
        <Text style={styles.text.benefit}>3. Mencegah kondisi anemia</Text>
        <Text style={styles.text.benefit}>4. Menjaga kesehatan tulang</Text>
        <Text style={styles.text.benefit}>5. Memelihara kesehatan jantung</Text>
        <Text style={styles.text.benefit}>6. Membantu mengurangi berat badan</Text>
        <Text style={styles.text.benefit}>7. Membantu melancarkan pencernaan</Text>
        <Gap height={10} />
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => playSound()}>
            <IconPlay width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => stopSound()}>
            <IconStop width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => { navigation.navigate('Home'); stopSound(); }}>
            <IconHome width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    } else if (presentedFruit === 'Nanas') {
      sound.loadAsync(Nanas);
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Menjaga kesehatan kulit</Text>
        <Text style={styles.text.benefit}>2. Menjaga kesehatan mata</Text>
        <Text style={styles.text.benefit}>3. Mengurangi risiko kanker</Text>
        <Text style={styles.text.benefit}>4. Menjaga kesehatan tulang</Text>
        <Text style={styles.text.benefit}>5. Menjaga kehamilan tetap sehat</Text>
        <Text style={styles.text.benefit}>6. Meningkatkan daya tahan tubuh</Text>
        <Text style={styles.text.benefit}>7. Mengatasi gangguan pencernaan</Text>
        <Gap height={10} />
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => playSound()}>
            <IconPlay width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => stopSound()}>
            <IconStop width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => { navigation.navigate('Home'); stopSound(); }}>
            <IconHome width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    } else if (presentedFruit === 'Pir') {
      sound.loadAsync(Pir);
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Mencegah sembelit</Text>
        <Text style={styles.text.benefit}>2. Berpotensi melawan kanker</Text>
        <Text style={styles.text.benefit}>3. Membantu mengurangi berat badan</Text>
        <Text style={styles.text.benefit}>4. Membantu menjaga kesehatan tulang</Text>
        <Text style={styles.text.benefit}>5. Membantu menjaga kesehatan jantung</Text>
        <Text style={styles.text.benefit}>6. Berpotensi menurunkan risiko diabetes</Text>
        <Text style={styles.text.benefit}>7. Berpotensi menurunkan risiko penyakit kronis</Text>
        <Gap height={10} />
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => playSound()}>
            <IconPlay width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => stopSound()}>
            <IconStop width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => { navigation.navigate('Home'); stopSound(); }}>
            <IconHome width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    } else if (presentedFruit === 'Pisang') {
      sound.loadAsync(Pisang);
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Baik untuk kulit</Text>
        <Text style={styles.text.benefit}>2. Baik bagi pencernaan</Text>
        <Text style={styles.text.benefit}>3. Kaya akan magnesium</Text>
        <Text style={styles.text.benefit}>4. Mengandung serat tinggi</Text>
        <Text style={styles.text.benefit}>5. Menurunkan risiko stroke</Text>
        <Text style={styles.text.benefit}>6. Menurunkan tekanan darah</Text>
        <Text style={styles.text.benefit}>7. Meningkatkan stamina olahraga</Text>
        <Gap height={10} />
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => playSound()}>
            <IconPlay width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => stopSound()}>
            <IconStop width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => { navigation.navigate('Home'); stopSound(); }}>
            <IconHome width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    } else if (presentedFruit === 'Salak') {
      sound.loadAsync(Salak);
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Melancarkan pencernaan</Text>
        <Text style={styles.text.benefit}>2. Menjaga kesehatan kulit</Text>
        <Text style={styles.text.benefit}>3. Menjaga kesehatan jantung</Text>
        <Text style={styles.text.benefit}>4. Menjaga berat badan seimbang</Text>
        <Text style={styles.text.benefit}>5. Meningkatkan kekebalan tubuh</Text>
        <Text style={styles.text.benefit}>6. Memperbaiki jaringan tubuh yang rusak</Text>
        <Text style={styles.text.benefit}>7. Meningkatkan kepadatan dan kekuatan tulang</Text>
        <Gap height={10} />
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => playSound()}>
            <IconPlay width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => stopSound()}>
            <IconStop width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => { navigation.navigate('Home'); stopSound(); }}>
            <IconHome width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    } else if (presentedFruit === 'Semangka') {
      sound.loadAsync(Semangka);
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Mengatasi nyeri otot</Text>
        <Text style={styles.text.benefit}>2. Menjaga kesehatan jantung</Text>
        <Text style={styles.text.benefit}>3. Meningkatkan kesehatan kulit</Text>
        <Text style={styles.text.benefit}>4. Meningkatkan kesehatan rambut</Text>
        <Text style={styles.text.benefit}>5. Memenuhi kebutuhan cairan tubuh</Text>
        <Text style={styles.text.benefit}>6. Mencegah pembentukan batu ginjal</Text>
        <Text style={styles.text.benefit}>7. Membantu mengendalikan gula darah</Text>
        <Gap height={10} />
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => playSound()}>
            <IconPlay width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => stopSound()}>
            <IconStop width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => { navigation.navigate('Home'); stopSound(); }}>
            <IconHome width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    } else if (presentedFruit === 'Tomat') {
      sound.loadAsync(Tomat);
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Mencegah kanker</Text>
        <Text style={styles.text.benefit}>2. Mengatasi diabetes</Text>
        <Text style={styles.text.benefit}>3. Menjaga kesehatan kulit</Text>
        <Text style={styles.text.benefit}>4. Menjaga kesehatan mata</Text>
        <Text style={styles.text.benefit}>5. Melancarkan pencernaan</Text>
        <Text style={styles.text.benefit}>6. Menjaga kesehatan jantung</Text>
        <Text style={styles.text.benefit}>7. Meningkatkan kesehatan saat hamil</Text>
        <Gap height={10} />
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => playSound()}>
            <IconPlay width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => stopSound()}>
            <IconStop width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
          </TouchableOpacity>
          <Gap width={35} />
          <TouchableOpacity onPress={() => { navigation.navigate('Home'); stopSound(); }}>
            <IconHome width={75} height={75} />
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    } else {
      return <Text>Belum ada hasil.</Text>
    }
  }

  return (
    <SafeAreaView style={styles.wrapper.mainWrapper}>
      <View style={{ alignItems: 'center', width: '100%', height: '100%', borderRadius: 24, backgroundColor: '#A6E3E9' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', paddingTop: 10 }}>
            <Text style={styles.text.result}>Hasil : {presentedFruit}</Text>
          </View>
        </View>
        <View style={{ height: 250, width: 125, marginVertical: 10, alignItems: 'center', borderColor: 'black', borderRadius: 5, borderWidth: 1 }}>
          <Image source={imageCaptured} style={{ height: '100%', width: '100%' }} />
        </View>
        <View style={{ paddingHorizontal: 15, alignItems: 'center' }}>
          {benefits(presentedFruit)}
        </View>
      </View>
    </SafeAreaView >
  )
}

export default Result

const styles = ({
  wrapper: {
    mainWrapper: { backgroundColor: '#A6E3E9', flex: 1 }
  },
  text: {
    title: {
      textAlign: 'center', fontSize: 20, color: '#222831', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, marginRight: 60
    },
    result: {
      textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, marginTop: 5
    },
    benefitresult: {
      textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 'bold', marginTop: 5
    },
    benefit: {
      textAlign: 'left', fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5
    }
  }
})
