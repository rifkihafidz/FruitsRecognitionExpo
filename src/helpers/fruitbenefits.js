import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { Audio } from 'expo-av';
import { IconPlay, IconStop } from "../assets";
import { Gap } from "../components";
import { Apel, BuahNaga, Jeruk, Lemon, Nanas, Pir, Pisang, Salak, Semangka, Tomat } from "./sounds";

export const benefits = (presentedFruit) => {
  const sound = new Audio.Sound();
  const playSound = async () => {
    sound.playAsync();
  }
  const stopSound = async () => {
    sound.stopAsync();
  }
  if (presentedFruit === 'Apel') {
    sound.loadAsync(Apel);
    return <View style={{ alignItems: 'center' }}>
      <Text style={styles.textBenefit}>Manfaat Buah {presentedFruit}:</Text>
      <Text style={styles.textBenefit}>1. Menjaga kesehatan jantung</Text>
      <Text style={styles.textBenefit}>2. Membantu menurunkan berat badan</Text>
      <Text style={styles.textBenefit}>3. Kaya akan kandungan antioksidan</Text>
      <Text style={styles.textBenefit}>4. Menurunkan risiko penyakit diabetes</Text>
      <Text style={styles.textBenefit}>5. Mencegah terjadinya kanker</Text>
      <Text style={styles.textBenefit}>6. Melawan penyakit asma</Text>
      <Text style={styles.textBenefit}>7. Menjaga kesehatan tulang</Text>
      <Gap height={35} />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => playSound()}>
          <IconPlay width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
        </TouchableOpacity>
        <Gap width={50} />
        <TouchableOpacity onPress={() => stopSound()}>
          <IconStop width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  } else if (presentedFruit === 'Buah Naga') {
    sound.loadAsync(BuahNaga);
    return <View style={{ alignItems: 'center' }}>
      <Text style={styles.textBenefit}>Manfaat Buah {presentedFruit}:</Text>
      <Text style={styles.textBenefit}>1. Mengurangi risiko kanker</Text>
      <Text style={styles.textBenefit}>2. Meningkatkan kesehatan jantung</Text>
      <Text style={styles.textBenefit}>3. Mengontrol kadar gula darah</Text>
      <Text style={styles.textBenefit}>4. Meningkatkan sistem kekebalan tubuh</Text>
      <Text style={styles.textBenefit}>5. Meredakan batuk dan flu</Text>
      <Text style={styles.textBenefit}>6. Menurunkan berat badan</Text>
      <Text style={styles.textBenefit}>7. Meningkatkan kesehatan sistem pencernaan</Text>
      <Gap height={35} />
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <TouchableOpacity onPress={() => playSound()}>
          <IconPlay width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
        </TouchableOpacity>
        <Gap width={50} />
        <TouchableOpacity onPress={() => stopSound()}>
          <IconStop width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  } else if (presentedFruit === 'Jeruk') {
    sound.loadAsync(Jeruk);
    return <View style={{ alignItems: 'center' }}>
      <Text style={styles.textBenefit}>Manfaat Buah {presentedFruit}:</Text>
      <Text style={styles.textBenefit}>1. Meningkatkan fungsi otak</Text>
      <Text style={styles.textBenefit}>2. Menjaga kesehatan ibu hamil dan janinnya</Text>
      <Text style={styles.textBenefit}>3. Membantu menjaga tekanan darah</Text>
      <Text style={styles.textBenefit}>4. Memelihara kesehatan rambut dan kulit</Text>
      <Text style={styles.textBenefit}>5. Memelihara sistem pencernaan</Text>
      <Text style={styles.textBenefit}>6. Mengurangi risiko diabetes</Text>
      <Text style={styles.textBenefit}>7. Mencegah anemia</Text>
      <Gap height={35} />
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <TouchableOpacity onPress={() => playSound()}>
          <IconPlay width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
        </TouchableOpacity>
        <Gap width={50} />
        <TouchableOpacity onPress={() => stopSound()}>
          <IconStop width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  } else if (presentedFruit === 'Lemon') {
    sound.loadAsync(Lemon);
    return <View style={{ alignItems: 'center' }}>
      <Text style={styles.textBenefit}>Manfaat Buah {presentedFruit}:</Text>
      <Text style={styles.textBenefit}>1. Membantu melancarkan pencernaan</Text>
      <Text style={styles.textBenefit}>2. Menjaga sistem imun</Text>
      <Text style={styles.textBenefit}>3. Memelihara kesehatan jantung</Text>
      <Text style={styles.textBenefit}>4. Mencegah kondisi anemia</Text>
      <Text style={styles.textBenefit}>5. Membantu mengurangi berat badan</Text>
      <Text style={styles.textBenefit}>6. Menjaga kesehatan tulang</Text>
      <Text style={styles.textBenefit}>7. Menjaga kesehatan otot</Text>
      <Gap height={35} />
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <TouchableOpacity onPress={() => playSound()}>
          <IconPlay width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
        </TouchableOpacity>
        <Gap width={50} />
        <TouchableOpacity onPress={() => stopSound()}>
          <IconStop width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  } else if (presentedFruit === 'Nanas') {
    sound.loadAsync(Nanas);
    return <View style={{ alignItems: 'center' }}>
      <Text style={styles.textBenefit}>Manfaat Buah {presentedFruit}:</Text>
      <Text style={styles.textBenefit}>1. Meningkatkan daya tahan tubuh</Text>
      <Text style={styles.textBenefit}>2. Menjaga kesehatan tulang</Text>
      <Text style={styles.textBenefit}>3. Mengurangi risiko kanker</Text>
      <Text style={styles.textBenefit}>4. Mengatasi gangguan pencernaan</Text>
      <Text style={styles.textBenefit}>5. Menjaga kesehatan mata</Text>
      <Text style={styles.textBenefit}>6. Menjaga kehamilan tetap sehat</Text>
      <Text style={styles.textBenefit}>7. Menjaga kesehatan kulit</Text>
      <Gap height={35} />
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <TouchableOpacity onPress={() => playSound()}>
          <IconPlay width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
        </TouchableOpacity>
        <Gap width={50} />
        <TouchableOpacity onPress={() => stopSound()}>
          <IconStop width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  } else if (presentedFruit === 'Pir') {
    sound.loadAsync(Pir);
    return <View style={{ alignItems: 'center' }}>
      <Text style={styles.textBenefit}>Manfaat Buah {presentedFruit}:</Text>
      <Text style={styles.textBenefit}>1. Mencegah sembelit</Text>
      <Text style={styles.textBenefit}>2. Berpotensi menurunkan risiko diabetes</Text>
      <Text style={styles.textBenefit}>3. Membantu menjaga kesehatan tulang</Text>
      <Text style={styles.textBenefit}>4. Membantu mengurangi berat badan</Text>
      <Text style={styles.textBenefit}>5. Berpotensi melawan kanker</Text>
      <Text style={styles.textBenefit}>6. Membantu menjaga kesehatan jantung</Text>
      <Text style={styles.textBenefit}>7. Berpotensi menurunkan risiko penyakit kronis</Text>
      <Gap height={35} />
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <TouchableOpacity onPress={() => playSound()}>
          <IconPlay width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
        </TouchableOpacity>
        <Gap width={50} />
        <TouchableOpacity onPress={() => stopSound()}>
          <IconStop width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  } else if (presentedFruit === 'Pisang') {
    sound.loadAsync(Pisang);
    return <View style={{ alignItems: 'center' }}>
      <Text style={styles.textBenefit}>Manfaat Buah {presentedFruit}:</Text>
      <Text style={styles.textBenefit}>1. Baik bagi pencernaan</Text>
      <Text style={styles.textBenefit}>2. Menurunkan tekanan darah</Text>
      <Text style={styles.textBenefit}>3. Menurunkan risiko stroke</Text>
      <Text style={styles.textBenefit}>4. Meningkatkan stamina olahraga</Text>
      <Text style={styles.textBenefit}>5. Kaya akan magnesium</Text>
      <Text style={styles.textBenefit}>6. Mengandung serat tinggi</Text>
      <Text style={styles.textBenefit}>7. Baik untuk kulit</Text>
      <Gap height={35} />
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <TouchableOpacity onPress={() => playSound()}>
          <IconPlay width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
        </TouchableOpacity>
        <Gap width={50} />
        <TouchableOpacity onPress={() => stopSound()}>
          <IconStop width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  } else if (presentedFruit === 'Salak') {
    sound.loadAsync(Salak);
    return <View style={{ alignItems: 'center' }}>
      <Text style={styles.textBenefit}>Manfaat Buah {presentedFruit}:</Text>
      <Text style={styles.textBenefit}>1. Melancarkan pencernaan</Text>
      <Text style={styles.textBenefit}>2. Meningkatkan kekebalan tubuh</Text>
      <Text style={styles.textBenefit}>3. Menjaga berat badan seimbang</Text>
      <Text style={styles.textBenefit}>4. Menjaga kesehatan kulit</Text>
      <Text style={styles.textBenefit}>5. Menjaga kesehatan jantung</Text>
      <Text style={styles.textBenefit}>6. Meningkatkan kepadatan dan kekuatan tulang</Text>
      <Text style={styles.textBenefit}>7. Memperbaiki jaringan tubuh yang rusak</Text>
      <Gap height={35} />
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <TouchableOpacity onPress={() => playSound()}>
          <IconPlay width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
        </TouchableOpacity>
        <Gap width={50} />
        <TouchableOpacity onPress={() => stopSound()}>
          <IconStop width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  } else if (presentedFruit === 'Semangka') {
    sound.loadAsync(Semangka);
    return <View style={{ alignItems: 'center' }}>
      <Text style={styles.textBenefit}>Manfaat Buah {presentedFruit}:</Text>
      <Text style={styles.textBenefit}>1. Menjaga kesehatan jantung</Text>
      <Text style={styles.textBenefit}>2. Memenuhi kebutuhan cairan tubuh</Text>
      <Text style={styles.textBenefit}>3. Mencegah pembentukan batu ginjal</Text>
      <Text style={styles.textBenefit}>4. Meningkatkan kesehatan rambut</Text>
      <Text style={styles.textBenefit}>5. Meningkatkan kesehatan kulit</Text>
      <Text style={styles.textBenefit}>6. Membantu mengendalikan gula darah</Text>
      <Text style={styles.textBenefit}>7. Mengatasi nyeri otot</Text>
      <Gap height={35} />
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <TouchableOpacity onPress={() => playSound()}>
          <IconPlay width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
        </TouchableOpacity>
        <Gap width={50} />
        <TouchableOpacity onPress={() => stopSound()}>
          <IconStop width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  } else if (presentedFruit === 'Tomat') {
    sound.loadAsync(Tomat);
    return <View style={{ alignItems: 'center' }}>
      <Text style={styles.textBenefit}>Manfaat Buah {presentedFruit}:</Text>
      <Text style={styles.textBenefit}>1. Menjaga kesehatan jantung</Text>
      <Text style={styles.textBenefit}>2. Mencegah kanker</Text>
      <Text style={styles.textBenefit}>3. Mengatasi diabetes</Text>
      <Text style={styles.textBenefit}>4. Melancarkan pencernaan</Text>
      <Text style={styles.textBenefit}>5. Menjaga kesehatan mata</Text>
      <Text style={styles.textBenefit}>6. Menjaga kesehatan kulit</Text>
      <Text style={styles.textBenefit}>7. Meningkatkan kesehatan saat hamil</Text>
      <Gap height={35} />
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <TouchableOpacity onPress={() => playSound()}>
          <IconPlay width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mulai</Text>
        </TouchableOpacity>
        <Gap width={50} />
        <TouchableOpacity onPress={() => stopSound()}>
          <IconStop width={75} height={75} />
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  } else {
    return <Text>Belum ada hasil.</Text>
  }
}

const styles = ({
  textBenefit: {
    textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center', marginTop: 5
  }
})