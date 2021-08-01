import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, View, Text, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { convertBase64ToTensor, getModel, startPrediction } from '../../helpers/tensor-helper';
import { cropPicture } from '../../helpers/image-helper';
import { BackButton, Gap } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';
import { IconCamera, IconCameraDisabled, IconFlashOn, IconFlashOff, IconFlip, IconFlipDisabled, IconPlay, IconStop } from '../../assets';
import { Apel, BuahNaga, Jeruk, Lemon, Nanas, Pir, Pisang, Salak, Semangka, Tomat } from "../../helpers/sounds";

const Scan = ({ navigation }) => {
  const [appStatus, setAppStatus] = useState('Ready.');
  const [flashSwitch, setFlashSwitch] = useState(Camera.Constants.FlashMode.off);
  const [flipSwitch, setFlipSwitch] = useState(Camera.Constants.Type.back);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [presentedFruit, setPresentedFruit] = useState('Belum ada hasil.');
  const [imageCaptured, setImageCaptured] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const ratio = '16:9';
  const cameraRef = useRef();
  const sound = new Audio.Sound();
  const label = ['Apel', 'Buah Naga', 'Jeruk', 'Lemon', 'Nanas', 'Pir', 'Pisang', 'Salak', 'Semangka', 'Tomat'];

  useEffect(() => {
    permissionFunction();
  })

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
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
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
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Menurunkan berat badan</Text>
        <Text style={styles.text.benefit}>2. Meredakan batuk dan flu</Text>
        <Text style={styles.text.benefit}>3. Mengurangi risiko kanker</Text>
        <Text style={styles.text.benefit}>4. Mengontrol kadar gula darah</Text>
        <Text style={styles.text.benefit}>5. Meningkatkan kesehatan jantung</Text>
        <Text style={styles.text.benefit}>6. Meningkatkan sistem kekebalan tubuh</Text>
        <Text style={styles.text.benefit}>7. Meningkatkan kesehatan sistem pencernaan</Text>
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
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
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Mencegah anemia</Text>
        <Text style={styles.text.benefit}>2. Meningkatkan fungsi otak</Text>
        <Text style={styles.text.benefit}>3. Mengurangi risiko diabetes</Text>
        <Text style={styles.text.benefit}>4. Memelihara sistem pencernaan</Text>
        <Text style={styles.text.benefit}>5. Membantu menjaga tekanan darah</Text>
        <Text style={styles.text.benefit}>6. Memelihara kesehatan rambut dan kulit</Text>
        <Text style={styles.text.benefit}>7. Menjaga kesehatan ibu hamil dan janinnya</Text>
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
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
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Menjaga sistem imun</Text>
        <Text style={styles.text.benefit}>2. Menjaga kesehatan otot</Text>
        <Text style={styles.text.benefit}>3. Mencegah kondisi anemia</Text>
        <Text style={styles.text.benefit}>4. Menjaga kesehatan tulang</Text>
        <Text style={styles.text.benefit}>5. Memelihara kesehatan jantung</Text>
        <Text style={styles.text.benefit}>6. Membantu mengurangi berat badan</Text>
        <Text style={styles.text.benefit}>7. Membantu melancarkan pencernaan</Text>
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
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
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Menjaga kesehatan kulit</Text>
        <Text style={styles.text.benefit}>2. Menjaga kesehatan mata</Text>
        <Text style={styles.text.benefit}>3. Mengurangi risiko kanker</Text>
        <Text style={styles.text.benefit}>4. Menjaga kesehatan tulang</Text>
        <Text style={styles.text.benefit}>5. Menjaga kehamilan tetap sehat</Text>
        <Text style={styles.text.benefit}>6. Meningkatkan daya tahan tubuh</Text>
        <Text style={styles.text.benefit}>7. Mengatasi gangguan pencernaan</Text>
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
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
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Mencegah sembelit</Text>
        <Text style={styles.text.benefit}>2. Berpotensi melawan kanker</Text>
        <Text style={styles.text.benefit}>3. Membantu mengurangi berat badan</Text>
        <Text style={styles.text.benefit}>4. Membantu menjaga kesehatan tulang</Text>
        <Text style={styles.text.benefit}>5. Membantu menjaga kesehatan jantung</Text>
        <Text style={styles.text.benefit}>6. Berpotensi menurunkan risiko diabetes</Text>
        <Text style={styles.text.benefit}>7. Berpotensi menurunkan risiko penyakit kronis</Text>
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
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
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Baik untuk kulit</Text>
        <Text style={styles.text.benefit}>2. Baik bagi pencernaan</Text>
        <Text style={styles.text.benefit}>3. Kaya akan magnesium</Text>
        <Text style={styles.text.benefit}>4. Mengandung serat tinggi</Text>
        <Text style={styles.text.benefit}>5. Menurunkan risiko stroke</Text>
        <Text style={styles.text.benefit}>6. Menurunkan tekanan darah</Text>
        <Text style={styles.text.benefit}>7. Meningkatkan stamina olahraga</Text>
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
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
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Melancarkan pencernaan</Text>
        <Text style={styles.text.benefit}>2. Menjaga kesehatan kulit</Text>
        <Text style={styles.text.benefit}>3. Menjaga kesehatan jantung</Text>
        <Text style={styles.text.benefit}>4. Menjaga berat badan seimbang</Text>
        <Text style={styles.text.benefit}>5. Meningkatkan kekebalan tubuh</Text>
        <Text style={styles.text.benefit}>6. Memperbaiki jaringan tubuh yang rusak</Text>
        <Text style={styles.text.benefit}>7. Meningkatkan kepadatan dan kekuatan tulang</Text>
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
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
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Mengatasi nyeri otot</Text>
        <Text style={styles.text.benefit}>2. Menjaga kesehatan jantung</Text>
        <Text style={styles.text.benefit}>3. Meningkatkan kesehatan kulit</Text>
        <Text style={styles.text.benefit}>4. Meningkatkan kesehatan rambut</Text>
        <Text style={styles.text.benefit}>5. Memenuhi kebutuhan cairan tubuh</Text>
        <Text style={styles.text.benefit}>6. Mencegah pembentukan batu ginjal</Text>
        <Text style={styles.text.benefit}>7. Membantu mengendalikan gula darah</Text>
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
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
      return <View>
        <Text style={styles.text.benefitresult}>Manfaat Buah {presentedFruit}:</Text>
        <Text style={styles.text.benefit}>1. Mencegah kanker</Text>
        <Text style={styles.text.benefit}>2. Mengatasi diabetes</Text>
        <Text style={styles.text.benefit}>3. Menjaga kesehatan kulit</Text>
        <Text style={styles.text.benefit}>4. Menjaga kesehatan mata</Text>
        <Text style={styles.text.benefit}>5. Melancarkan pencernaan</Text>
        <Text style={styles.text.benefit}>6. Menjaga kesehatan jantung</Text>
        <Text style={styles.text.benefit}>7. Meningkatkan kesehatan saat hamil</Text>
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center', justifyContent: 'center' }}>
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

  const permissionFunction = async () => {
    let { status } = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(status === 'granted');
  }

  // Handle captured image.
  const handleImageCapture = async () => {
    const imageData = await cameraRef.current.takePictureAsync({
      base64: true,
    });
    cameraRef.current.pausePreview();
    setImageCaptured(imageData);
    processImagePrediction(imageData);
  };

  // Predict function.
  const processImagePrediction = async (base64Image) => {
    setAppStatus('Predicting...')
    const croppedData = await cropPicture(base64Image, 200);
    const model = await getModel();
    const tensor = await convertBase64ToTensor(croppedData.base64);

    const prediction = await startPrediction(model, tensor);

    const highestPrediction = prediction.indexOf(
      Math.max.apply(null, prediction),
    );
    setPresentedFruit(label[highestPrediction]);
    setModalVisible(true);
  };

  const flashFunction = () => {
    setFlashSwitch(
      flashSwitch === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    );
  }

  const flipFunction = () => {
    setFlipSwitch(
      flipSwitch === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  const setFlashIcon = () => {
    if (flipSwitch === Camera.Constants.Type.back) {
      if (flashSwitch === Camera.Constants.FlashMode.off) {
        return <IconFlashOff width={45} height={45} />
      } else {
        return <IconFlashOn width={45} height={45} />
      }
    } else {
      return <IconFlashOff width={45} height={45} />
    }
  }

  const setCameraIcon = () => {
    if (appStatus === 'Predicting...') {
      return <TouchableOpacity disabled={true} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><IconCameraDisabled height={45} width={45} /></TouchableOpacity>
    } else {
      return <TouchableOpacity onPress={() => handleImageCapture()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><IconCamera height={45} width={45} /></TouchableOpacity>
    }
  }

  const setFlipIcon = () => {
    if (appStatus === 'Predicting...') {
      return <TouchableOpacity disabled={true} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><IconFlipDisabled height={45} width={45} /></TouchableOpacity>
    } else {
      return <TouchableOpacity onPress={() => flipFunction()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><IconFlip height={45} width={45} /></TouchableOpacity>
    }
  }

  return (
    <SafeAreaView style={styles.wrapper.mainWrapper}>
      {modalVisible ? (
        <View style={{ flex: 1 }}>
          <Modal visible={modalVisible} transparent={true} animationType="slide">
            <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center' }}>
              <View style={{ alignItems: 'center', width: '100%', height: '100%', borderRadius: 24, backgroundColor: '#A6E3E9' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <BackButton onPress={() => { setModalVisible(false); setAppStatus('Ready.'); stopSound(); }} />
                  <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginRight: 57, paddingBottom: 5 }}>
                    <Text style={styles.text.result}>Hasil : {presentedFruit}</Text>
                  </View>
                </View>
                <View style={{ height: 250, width: 125, marginVertical: 5, alignItems: 'center', borderColor: 'black', borderRadius: 5, borderWidth: 1 }}>
                  <Image source={imageCaptured} style={{ height: '100%', width: '100%' }} />
                </View>
                <View style={{ padding: 10, marginBottom: 10 }}>
                  {benefits(presentedFruit)}
                </View>
              </View>
            </View>
          </Modal>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <BackButton onPress={() => navigation.goBack()} />
            <View style={{ justifyContent: 'center', flex: 1 }}>
              <Text style={styles.text.title}>SCAN</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Camera style={{ height: '100%', width: '100%' }} ref={cameraRef} type={flipSwitch} autoFocus={true} ratio={ratio} whiteBalance={Camera.Constants.WhiteBalance.auto} flashMode={flashSwitch}>
            </Camera>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.text.status}>App status: {appStatus}</Text>
          </View>
          <View style={{ height: 75, flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => flashFunction()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {setFlashIcon()}
            </TouchableOpacity>
            {setCameraIcon()}
            {setFlipIcon()}
          </View>
        </View>
      )
      }
    </SafeAreaView>
  )
}

export default Scan

const styles = ({
  wrapper: {
    mainWrapper: { backgroundColor: '#A6E3E9', flex: 1 },
    topWrapper: { flex: 2, flexDirection: 'row' },
    middleWrapper: { flex: 11, },
    bottomWrapper: { flex: 4, backgroundColor: 'blue' }
  },
  text: {
    title: {
      textAlign: 'center', fontSize: 20, color: '#222831', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center', marginRight: 60
    },
    result: {
      textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, marginTop: 5
    },
    status: {
      textAlign: 'center', fontSize: 14, color: 'black', fontWeight: 'bold', marginTop: 5
    },
    benefitresult: {
      textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 'bold', marginTop: 5
    },
    benefit: {
      textAlign: 'left', fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5, paddingHorizontal: 15
    }
  }
})