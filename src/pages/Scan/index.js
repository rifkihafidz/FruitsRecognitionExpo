import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, Modal, ActivityIndicator, Dimensions, View, Text } from 'react-native';
import { Camera } from 'expo-camera';
import { convertBase64ToTensor, getModel, startPrediction } from '../../helpers/tensor-helper';
import { cropPicture } from '../../helpers/image-helper';
import { BackButton, Gap } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconCamera, IconFlashOn, IconFlashOff, IconFlip, IconScan } from '../../assets';

const Scan = ({ navigation }) => {

  const label = ["Alpukat", "Apel", "Buah Naga", "Jeruk", "Lemon", "Nanas", "Pir", "Pisang", "Semangka", "Tomat"];
  const ratio = "16:9";
  const cameraRef = useRef();
  const [isProcessing, setIsProcessing] = useState(false);
  const [flashSwitch, setFlashSwitch] = useState(Camera.Constants.FlashMode.off);
  const [flipSwitch, setFlipSwitch] = useState(Camera.Constants.Type.back);
  const [presentedFruit, setPresentedFruit] = useState('Not predicted yet.');
  const [cameraPermission, setCameraPermission] = useState(null);

  useEffect(() => {
    permissionFunction();
  })

  const permissionFunction = async () => {
    let { status } = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(status === 'granted');
  }

  // Handle captured image.
  const handleImageCapture = async () => {
    const imageData = await cameraRef.current.takePictureAsync({
      base64: true,
    });
    processImagePrediction(imageData);
  };

  // Predict function.
  const processImagePrediction = async (base64Image) => {
    const croppedData = await cropPicture(base64Image, 200);
    const model = await getModel();
    const tensor = await convertBase64ToTensor(croppedData.base64);

    const prediction = await startPrediction(model, tensor);

    const highestPrediction = prediction.indexOf(
      Math.max.apply(null, prediction),
    );
    setPresentedFruit(label[highestPrediction]);
  };

  const flashFunction = () => {
    setFlashSwitch(
      flashSwitch === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
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

  const flipFunction = () => {
    setFlipSwitch(
      flipSwitch === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  return (
    <SafeAreaView style={styles.wrapper.mainWrapper}>
      <View style={{ flexDirection: 'row' }}>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center', marginRight: 60 }}>SCAN</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Camera
          style={{ height: '100%', width: '100%' }}
          ref={cameraRef}
          type={flipSwitch}
          autoFocus={true}
          ratio={ratio}
          whiteBalance={Camera.Constants.WhiteBalance.auto}
          flashMode={flashSwitch}
        >
        </Camera>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text>{presentedFruit}</Text>
      </View>
      <View style={{ height: 75, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => flashFunction()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {setFlashIcon()}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImageCapture()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <IconCamera height={45} width={45} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => flipFunction()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <IconFlip height={45} width={45} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Scan

const styles = ({
  wrapper: {
    mainWrapper: {
      backgroundColor: '#98DDCA',
      flex: 1,
    },
    topWrapper: {
      flex: 2,
      flexDirection: 'row',
    },
    middleWrapper: {
      flex: 11,
    },
    bottomWrapper: {
      flex: 4,
      backgroundColor: 'blue'
    }
  },
})