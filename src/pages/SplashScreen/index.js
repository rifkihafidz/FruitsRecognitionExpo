import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { NewLogo } from '../../assets';
import { Gap } from '../../components';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <NewLogo width={450} height={300} />
      <Gap height={6} />
      <Text style={styles.textWrapper.textTop}>Fruits Recognition</Text>
      <Gap height={12} />
      <Text style={styles.textWrapper.textBottom}>Helps you to find out the benefits of fruits</Text>
    </View>
  )
}

export default SplashScreen;

const styles = {
  container: {
    backgroundColor: '#A6E3E9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    textTop: {
      fontSize: 40, color: '#222831', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center'
    },
    textBottom: {
      fontSize: 18, color: '#222831', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10,
    }
  }
}