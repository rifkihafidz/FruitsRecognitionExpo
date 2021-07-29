import React, { useState } from 'react'
import { View, TouchableOpacity, Text, BackHandler, Modal } from 'react-native'
import { Gap } from '../../components';
import { IconExit, IconGuide, IconInformation, IconScan, NewLogo } from '../../assets';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.wrapper.mainWrapper}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modal.wrapper}>
          <View style={styles.modal.view}>
            <Text style={styles.modal.text}>Keluar dari aplikasi?</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={[styles.modal.button, styles.modal.buttonYes]} onPress={() => BackHandler.exitApp()}>
                <Text style={styles.modal.textButton}>Ya</Text>
              </TouchableOpacity>
              <Gap width={20} />
              <TouchableOpacity style={[styles.modal.button, styles.modal.buttonNo]} onPress={() => setModalVisible(false)}>
                <Text style={styles.modal.textButton}>Tidak</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.wrapper.topWrapper}>
        <NewLogo width={200} height={200} />
        <Gap height={6} />
        <Text style={styles.text.textLogo}>Fruits Recognition</Text>
      </View>
      <View style={styles.wrapper.bottomWrapper}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
            <IconScan width={110} height={110} />
            <Text style={styles.text.textMenu}>Scan</Text>
          </TouchableOpacity>
          <Gap width={60} />
          <TouchableOpacity onPress={() => navigation.navigate('Guide')}>
            <IconGuide width={110} height={110} />
            <Text style={styles.text.textMenu}>Guide</Text>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <IconInformation width={110} height={110} />
            <Text style={styles.text.textMenu}>About</Text>
          </TouchableOpacity>
          <Gap width={60} />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <IconExit width={110} height={110} />
            <Text style={styles.text.textMenu}>Exit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  )
}

export default Home

const styles = {
  wrapper: {
    mainWrapper: {
      backgroundColor: '#A6E3E9', flexDirection: 'column', flex: 1
    },
    topWrapper: {
      flex: 5, justifyContent: 'center', alignItems: 'center',
    },
    bottomWrapper: {
      flex: 6, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
    },
  },
  text: {
    textLogo: {
      fontSize: 40, color: '#222831', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center'
    },
    textMenu: {
      fontSize: 25, color: '#222831', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center'
    },
  },
  modal: {
    button: {
      borderRadius: 20, elevation: 2, height: 35, width: 60, justifyContent: 'center', alignItems: 'center', elevation: 5
    },
    buttonYes: {
      backgroundColor: '#00c0f1ff'
    },
    buttonNo: {
      backgroundColor: '#009ae4ff'
    },
    text: {
      marginBottom: 15, textAlign: 'center', color: '#222831', fontSize: 15, fontWeight: 'bold'
    },
    textButton: {
      color: '#222831', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center'
    },
    view: {
      backgroundColor: 'white', borderRadius: 20, paddingVertical: 30, paddingHorizontal: 100, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5
    },
    wrapper: {
      flex: 1, justifyContent: 'center', alignItems: 'center'
    }
  }
}